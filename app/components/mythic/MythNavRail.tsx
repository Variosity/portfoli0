"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "threshold", label: "Threshold" },
  { id: "record", label: "The Record" },
  { id: "arsenal", label: "The Arsenal" },
  { id: "forge", label: "The Forge" },
  { id: "rite", label: "The Rite" },
];

export default function MythNavRail() {
  const [active, setActive] = useState("threshold");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop: vertical rail */}
      <nav
        aria-label="Section navigation"
        className="fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
      >
        <ul className="flex flex-col items-start gap-5">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                data-cursor-hover
                className="group flex items-center gap-3"
                aria-current={active === s.id ? "true" : undefined}
              >
                <span
                  className="h-[6px] w-[6px] rounded-full transition-all duration-300"
                  style={{
                    background: active === s.id ? "var(--ember)" : "var(--ash-faint)",
                    boxShadow: active === s.id ? "0 0 0 3px var(--ember-soft)" : "none",
                  }}
                />
                <span
                  className="font-codex text-[13px] italic tracking-wide transition-all duration-300"
                  style={{
                    color: active === s.id ? "var(--bone)" : "var(--ash)",
                    opacity: active === s.id ? 1 : 0,
                    transform: active === s.id ? "translateX(0)" : "translateX(-4px)",
                  }}
                >
                  {s.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile: top bar */}
      <nav
        aria-label="Section navigation"
        className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-[var(--myth-line)] bg-[var(--void)]/90 px-5 py-3 backdrop-blur lg:hidden"
      >
        <span className="font-inscribed text-[11px] uppercase tracking-[0.14em] text-[var(--ash)]">
          M. Esteves
        </span>
        <ul className="flex gap-4">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>
                <span
                  className="block h-[6px] w-[6px] rounded-full"
                  style={{ background: active === s.id ? "var(--ember)" : "var(--ash-faint)" }}
                  aria-label={s.label}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
