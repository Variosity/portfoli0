"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

const LINES = [
  { prompt: "$ whoami", output: "miguel_esteves — full-stack engineer, systems & security" },
  { prompt: "$ status --stack", output: "typescript · node · postgres · next.js  →  ready" },
  { prompt: "$ deploy --profile production", output: "secure by design. shipped end-to-end." },
];

export default function BootHero() {
  const [reduced, setReduced] = useState(false);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduced(isReduced);
    if (isReduced) {
      setLineIndex(LINES.length);
      setRevealed(true);
      return;
    }
  }, []);

  useEffect(() => {
    if (reduced) return;
    if (lineIndex >= LINES.length) {
      const t = setTimeout(() => setRevealed(true), 350);
      return () => clearTimeout(t);
    }
    const current = LINES[lineIndex];
    const full = current.prompt + "\n" + current.output;
    if (charIndex < full.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 14 + Math.random() * 18);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 260);
      return () => clearTimeout(t);
    }
  }, [charIndex, lineIndex, reduced]);

  return (
    <section
      id="index"
      className="relative flex min-h-screen w-full flex-col justify-center px-6 sm:px-12 lg:pl-36 lg:pr-20"
    >
      <div className="mx-auto w-full max-w-4xl">
        {/* Terminal block */}
        <div className="mb-10 min-h-[92px] font-mono text-[13px] leading-relaxed text-[var(--text-dim)] sm:text-sm">
          {LINES.slice(0, reduced ? LINES.length : lineIndex).map((l, i) => (
            <div key={i} className="mb-1">
              <span className="text-[var(--cyan)]">{l.prompt}</span>
              <br />
              <span>{l.output}</span>
            </div>
          ))}
          {!reduced && lineIndex < LINES.length && (
            <div>
              <span className="text-[var(--cyan)]">
                {(LINES[lineIndex].prompt + "\n" + LINES[lineIndex].output).slice(0, charIndex).split("\n")[0]}
              </span>
              {charIndex > LINES[lineIndex].prompt.length && (
                <>
                  <br />
                  <span>
                    {(LINES[lineIndex].prompt + "\n" + LINES[lineIndex].output)
                      .slice(0, charIndex)
                      .split("\n")[1] ?? ""}
                  </span>
                </>
              )}
              <span className="blink-cursor" />
            </div>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={revealed ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h1 className="font-display text-[13vw] font-medium leading-[0.95] tracking-tight text-[var(--text)] sm:text-6xl lg:text-7xl">
            Miguel Esteves
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[var(--text-dim)] sm:text-xl">
            Full-stack software engineer building secure, production-ready
            applications in JavaScript, TypeScript, and Node.js.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              data-cursor-hover
              className="group inline-flex items-center gap-2 border border-[var(--amber)] px-6 py-3 text-sm font-medium text-[var(--amber)] transition-colors hover:bg-[var(--amber)] hover:text-[#0a0e17]"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href="#registry"
              data-cursor-hover
              className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-[var(--text-dim)] transition-colors hover:text-[var(--text)]"
            >
              View the registry
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
