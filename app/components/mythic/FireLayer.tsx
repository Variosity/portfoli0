"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const VERTEX = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// Procedural fire: layered fractal noise scrolled upward through a
// flame-shaped mask, then run through a black -> blood -> ember -> gold
// colour ramp. Rendered on a plane inside a real three.js scene/camera —
// this is the "3D fire" layer; EmberField supplies the separate rising
// spark particles on top of it.
const FRAGMENT = /* glsl */ `
  precision highp float;
  varying vec2 vUv;
  uniform float uTime;
  uniform vec2 uResolution;

  vec2 hash(vec2 p) {
    p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
    return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
  }

  float noise(vec2 p) {
    const float K1 = 0.366025404;
    const float K2 = 0.211324865;
    vec2 i = floor(p + (p.x + p.y) * K1);
    vec2 a = p - i + (i.x + i.y) * K2;
    vec2 o = (a.x > a.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec2 b = a - o + K2;
    vec2 c = a - 1.0 + 2.0 * K2;
    vec3 h = max(0.5 - vec3(dot(a, a), dot(b, b), dot(c, c)), 0.0);
    vec3 n = h * h * h * h * vec3(dot(a, hash(i + 0.0)), dot(b, hash(i + o)), dot(c, hash(i + 1.0)));
    return dot(n, vec3(70.0));
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 5; i++) {
      v += amp * noise(p);
      p *= 2.02;
      amp *= 0.52;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float aspect = uResolution.x / uResolution.y;

    // Turbulent flow rising upward, faster + finer near the base.
    vec2 q = vec2(uv.x * aspect * 2.4, uv.y * 3.0 - uTime * 1.15);
    float n = fbm(q + fbm(q + uTime * 0.12));

    // Flame silhouette: strongest at the bottom centre, tapering with
    // height and falling off toward the horizontal edges.
    float centerFalloff = 1.0 - smoothstep(0.0, 0.62, abs(uv.x - 0.5) * 2.0);
    float heightFalloff = pow(1.0 - clamp(uv.y, 0.0, 1.0), 1.5);
    float base = smoothstep(0.0, 0.2, uv.y) * heightFalloff * centerFalloff;

    float flame = clamp(n * 0.55 + 0.45, 0.0, 1.0) * base;
    flame = pow(flame, 1.25);

    vec3 black = vec3(0.02, 0.01, 0.0);
    vec3 blood = vec3(0.42, 0.05, 0.03);
    vec3 ember = vec3(0.95, 0.32, 0.06);
    vec3 gold = vec3(1.0, 0.78, 0.35);

    vec3 color = black;
    color = mix(color, blood, smoothstep(0.05, 0.35, flame));
    color = mix(color, ember, smoothstep(0.3, 0.65, flame));
    color = mix(color, gold, smoothstep(0.68, 0.92, flame));

    float alpha = smoothstep(0.04, 0.5, flame);
    gl_FragColor = vec4(color, alpha * 0.92);
  }
`;

export default function FireLayer() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
    };
    const material = new THREE.ShaderMaterial({
      vertexShader: VERTEX,
      fragmentShader: FRAGMENT,
      uniforms,
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let raf = 0;
    let width = 0;
    let height = 0;

    const resize = () => {
      width = mount.clientWidth;
      height = mount.clientHeight;
      renderer.setSize(width, height, false);
      uniforms.uResolution.value.set(width, height);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduced) {
      uniforms.uTime.value = 4.0;
      renderer.render(scene, camera);
      return () => {
        window.removeEventListener("resize", resize);
        renderer.dispose();
        geometry.dispose();
        material.dispose();
        mount.removeChild(renderer.domElement);
      };
    }

    const clock = new THREE.Clock();
    const tick = () => {
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-[58vh] w-full opacity-90 mix-blend-screen sm:h-[64vh]"
    />
  );
}
