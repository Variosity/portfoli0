"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "index", label: "Index" },
  { id: "systems", label: "Systems" },
  { id: "stack", label: "Stack" },
  { id: "registry", label: "Registry" },
  { id: "contact", label: "Contact" },
];

export default function NavRail() {
  const [active, setActive] = useState("index");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
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
                    background: active === s.id ? "var(--amber)" : "var(--text-faint)",
                    boxShadow: active === s.id ? "0 0 0 3px var(--amber-dim)" : "none",
                  }}
                />
                <span
                  className="font-mono text-[11px] uppercase tracking-[0.14em] transition-all duration-300"
                  style={{
                    color: active === s.id ? "var(--text)" : "var(--text-faint)",
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
        className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-[var(--line)] bg-[var(--bg)]/85 px-5 py-3 backdrop-blur lg:hidden"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--text-dim)]">
          M. Esteves
        </span>
        <ul className="flex gap-4">
          {SECTIONS.map((s) => (
            <li key={s.id}>
              <a href={`#${s.id}`}>
                <span
                  className="block h-[6px] w-[6px] rounded-full"
                  style={{
                    background: active === s.id ? "var(--amber)" : "var(--text-faint)",
                  }}
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
