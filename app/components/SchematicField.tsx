"use client";

import { useEffect, useRef } from "react";

type Pulse = {
  axis: "h" | "v";
  pos: number; // fixed coordinate (row/col index)
  t: number; // 0..1 progress along the line
  speed: number;
  color: string;
};

export default function SchematicField() {
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
    const cell = 64;
    let pulses: Pulse[] = [];

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

    const cols = () => Math.ceil(width / cell) + 1;
    const rows = () => Math.ceil(height / cell) + 1;

    const spawnPulse = (): Pulse => {
      const axis: "h" | "v" = Math.random() > 0.5 ? "h" : "v";
      const max = axis === "h" ? rows() : cols();
      const colorPick = Math.random() > 0.6 ? "85,214,232" : "255,176,32";
      return {
        axis,
        pos: Math.floor(Math.random() * max),
        t: 0,
        speed: 0.0025 + Math.random() * 0.003,
        color: colorPick,
      };
    };

    for (let i = 0; i < 5; i++) pulses.push(spawnPulse());

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // static grid
      ctx.strokeStyle = "rgba(230,236,250,0.045)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += cell) {
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += cell) {
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
        ctx.stroke();
      }

      if (!reduced) {
        pulses.forEach((p) => {
          p.t += p.speed;
          if (p.t > 1) {
            Object.assign(p, spawnPulse());
          }
          const glowLen = 0.08;
          if (p.axis === "h") {
            const y = p.pos * cell;
            const x = p.t * width;
            const grad = ctx.createLinearGradient(x - width * glowLen, y, x, y);
            grad.addColorStop(0, `rgba(${p.color},0)`);
            grad.addColorStop(1, `rgba(${p.color},0.9)`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(Math.max(0, x - width * glowLen), y + 0.5);
            ctx.lineTo(x, y + 0.5);
            ctx.stroke();
            ctx.fillStyle = `rgba(${p.color},0.9)`;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
          } else {
            const x = p.pos * cell;
            const y = p.t * height;
            const grad = ctx.createLinearGradient(x, y - height * glowLen, x, y);
            grad.addColorStop(0, `rgba(${p.color},0)`);
            grad.addColorStop(1, `rgba(${p.color},0.9)`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(x + 0.5, Math.max(0, y - height * glowLen));
            ctx.lineTo(x + 0.5, y);
            ctx.stroke();
            ctx.fillStyle = `rgba(${p.color},0.9)`;
            ctx.beginPath();
            ctx.arc(x, y, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        });
        raf = requestAnimationFrame(draw);
      }
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
