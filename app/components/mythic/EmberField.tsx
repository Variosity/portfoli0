"use client";

import { useEffect, useRef } from "react";

type Ember = {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  driftPhase: number;
  life: number;
  maxLife: number;
  hue: "ember" | "gold";
};

export default function EmberField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Scroll depth drives how hot the glow reads — the descent gets warmer
  // as you go, quietly reinforcing "further into the fire" on every scroll.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !glowRef.current) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
        if (glowRef.current) {
          glowRef.current.style.opacity = String(0.55 + progress * 0.45);
          glowRef.current.style.transform = `scale(${1 + progress * 0.35})`;
        }
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let embers: Ember[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const spawn = (initial = false): Ember => ({
      x: Math.random() * width,
      y: initial ? Math.random() * height : height + 20,
      r: 0.6 + Math.random() * 2.2,
      speed: 0.25 + Math.random() * 0.6,
      drift: (Math.random() - 0.5) * 0.4,
      driftPhase: Math.random() * Math.PI * 2,
      life: 0,
      maxLife: 400 + Math.random() * 500,
      hue: Math.random() > 0.75 ? "gold" : "ember",
    });

    const COUNT = width < 640 ? 44 : 85;
    for (let i = 0; i < COUNT; i++) embers.push(spawn(true));

    if (reduced) {
      ctx.clearRect(0, 0, width, height);
      embers.forEach((e) => {
        const color = e.hue === "gold" ? "201,162,75" : "255,106,42";
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color},0.35)`;
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      });
      return () => window.removeEventListener("resize", resize);
    }

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      embers.forEach((e, i) => {
        e.life += 1;
        e.y -= e.speed;
        e.driftPhase += 0.01;
        e.x += Math.sin(e.driftPhase) * e.drift;

        if (e.y < -20 || e.life > e.maxLife) {
          embers[i] = spawn(false);
          return;
        }

        const fadeIn = Math.min(1, e.life / 40);
        const fadeOut = Math.min(1, (e.maxLife - e.life) / 60);
        const alpha = Math.max(0, Math.min(fadeIn, fadeOut)) * 0.85;

        const color = e.hue === "gold" ? "201,162,75" : "255,106,42";
        ctx.beginPath();
        ctx.fillStyle = `rgba(${color},${alpha})`;
        ctx.shadowColor = `rgba(${color},${alpha})`;
        ctx.shadowBlur = 6;
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.shadowBlur = 0;

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Breathing underworld glow, anchored low — intensifies with scroll depth */}
      <div
        ref={glowRef}
        className="flame-breathe absolute left-1/2 top-[62%] h-[70vh] w-[70vh] -translate-x-1/2 rounded-full transition-transform duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(255,106,42,0.30) 0%, rgba(156,28,28,0.16) 38%, rgba(7,4,2,0) 70%)",
          filter: "blur(2px)",
        }}
      />
      <div
        className="absolute left-1/2 top-full h-[40vh] w-full -translate-x-1/2 -translate-y-1/3"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,90,31,0.22) 0%, rgba(7,4,2,0) 72%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}
