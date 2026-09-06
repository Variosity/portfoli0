"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export type Tag = { label: string; tone: "solo" | "shipped" | "ai" | "proto" };

const TONE_COLOR: Record<Tag["tone"], string> = {
  solo: "var(--cyan)",
  shipped: "var(--amber)",
  ai: "#c792ff",
  proto: "var(--text-faint)",
};

export default function RegistryRow({
  index,
  name,
  description,
  tags,
  href,
}: {
  index: string;
  name: string;
  description: string;
  tags: Tag[];
  href?: string;
}) {
  const Wrapper = href ? motion.a : motion.div;

  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer", "data-cursor-hover": true } : {})}
      className="group grid cursor-default grid-cols-[auto_1fr_auto] items-start gap-4 border-b border-[var(--line)] py-6 transition-colors first:pt-0 hover:border-[var(--line-strong)] sm:items-center sm:gap-6"
      whileHover={href ? { x: 4 } : undefined}
      transition={{ duration: 0.2 }}
    >
      <span className="font-mono text-xs text-[var(--text-faint)] sm:text-sm">{index}</span>

      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h4 className="font-display text-lg font-medium text-[var(--text)] sm:text-xl">
            {name}
          </h4>
        </div>
        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-[var(--text-dim)] sm:text-[15px]">
          {description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t.label}
              className="font-mono text-[10px] uppercase tracking-wide"
              style={{ color: TONE_COLOR[t.tone] }}
            >
              [{t.label}]
            </span>
          ))}
        </div>
      </div>

      <span className="hidden self-center text-[var(--text-faint)] transition-colors group-hover:text-[var(--amber)] sm:block">
        {href ? <ArrowUpRight className="h-5 w-5" /> : <span className="block h-5 w-5" />}
      </span>
    </Wrapper>
  );
}
