"use client";

import { useEffect, useRef } from "react";

type Ember = {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  driftPhase: number;
  alpha: number;
  hue: number;
};

export default function EmberField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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
    let raf = 0;

    const COUNT = 70;

    const makeEmber = (spawnAtBottom = false): Ember => ({
      x: Math.random() * width,
      y: spawnAtBottom ? height + Math.random() * 80 : Math.random() * height,
      r: 0.6 + Math.random() * 2.2,
      speed: 0.25 + Math.random() * 0.7,
      drift: 0.4 + Math.random() * 0.8,
      driftPhase: Math.random() * Math.PI * 2,
      alpha: 0.15 + Math.random() * 0.55,
      hue: 18 + Math.random() * 30, // amber -> deep orange -> red
    });

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      resize();
      embers = Array.from({ length: COUNT }, () => makeEmber(false));
    };

    init();

    if (reduced) {
      // Static, gentle scatter for reduced-motion users — no animation loop.
      ctx.clearRect(0, 0, width, height);
      embers.forEach((e) => {
        ctx.beginPath();
        ctx.fillStyle = `hsla(${e.hue}, 90%, 60%, ${e.alpha * 0.6})`;
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        ctx.fill();
      });
      window.addEventListener("resize", resize);
      return () => window.removeEventListener("resize", resize);
    }

    let t = 0;
    const tick = () => {
      t += 1;
      ctx.clearRect(0, 0, width, height);
      for (const e of embers) {
        e.y -= e.speed;
        e.x += Math.sin(t * 0.01 + e.driftPhase) * (e.drift * 0.05);
        if (e.y < -10) {
          Object.assign(e, makeEmber(true));
        }
        const fadeNearTop = Math.min(1, (height - e.y) / (height * 0.15));
        ctx.beginPath();
        const glow = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, e.r * 4);
        glow.addColorStop(0, `hsla(${e.hue}, 95%, 62%, ${e.alpha * fadeNearTop})`);
        glow.addColorStop(1, `hsla(${e.hue}, 95%, 50%, 0)`);
        ctx.fillStyle = glow;
        ctx.arc(e.x, e.y, e.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Breathing flame glow, anchored low so it reads as heat rising off the ground */}
      <div
        className="flame-breathe absolute left-1/2 top-[62%] h-[70vh] w-[70vh] -translate-x-1/2 rounded-full"
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
