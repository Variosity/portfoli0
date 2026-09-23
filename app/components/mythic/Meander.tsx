"use client";

import { motion } from "framer-motion";

export default function Meander({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.span
        aria-hidden
        className="h-1.5 w-1.5 shrink-0 rounded-full"
        style={{ background: "var(--ember)", boxShadow: "0 0 8px 1px var(--ember-soft)" }}
        animate={{ opacity: [0.5, 1, 0.6, 0.9, 0.5], scale: [1, 1.15, 0.95, 1.1, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg
        aria-hidden
        viewBox="0 0 240 16"
        className="h-4 w-full max-w-[220px]"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
      >
        <motion.path
          d="M0 8H10V0H26V16H42V0H58V16H74V0H90V16H106V0H122V16H138V0H154V16H170V0H186V16H202V0H218V16H230V8H240"
          stroke="var(--myth-line-strong)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
