"use client";

import { motion, AnimatePresence, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, Mail, Send, CheckCircle, X, ArrowUpRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

import CustomCursor from "./components/CustomCursor";
import EmberField from "./components/mythic/EmberField";
import FireLayer from "./components/mythic/FireLayer";
import MythNavRail from "./components/mythic/MythNavRail";
import FuseProgress from "./components/mythic/FuseProgress";
import TiltCard from "./components/mythic/TiltCard";
import Meander from "./components/mythic/Meander";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const FOCUS_ROLES = [
  "Support",
  "Escalation",
  "Triage",
  "Backend",
  "Application Security",
  "LLMOps",
];

const EXPERIENCE = [
  {
    role: "Software Engineer",
    org: "DataAnnotation",
    note: "Remote Contract",
    dates: "2026 — Present",
    bullets: [
      "Systematically stress-test agentic LLM coding runtimes against real-world open-source codebases, surfacing logic, instruction-following, and verification failures in production-grade code.",
      "Operate Linux CLI-based agent environments (tmux, git, pytest) to reproduce, capture, and log failure conditions for structured technical review — daily terminal-driven diagnostic work.",
      "Design targeted test scenarios spanning ambiguity categories — underspecified requirements, technical impossibilities, contextual ambiguity, and conflicting constraints — to systematically elicit and document model failures.",
    ],
  },
  {
    role: "Full-Stack Developer / SysAdmin",
    org: "KW Reserve",
    note: "Winter Garden, FL — Remote, Part-Time",
    dates: "2022 — Present",
    bullets: [
      "Architect and maintain technical infrastructure, web architecture, and production database organization for a real estate brokerage's digital operations.",
      "Design and deploy automated cold-outreach systems integrating third-party APIs (Google, Groq, Gemini) to accelerate lead generation.",
      "Implement secure, token-based authentication and role-based access control (RBAC) across internal applications.",
    ],
  },
];

const ARSENAL = [
  {
    tier: "I",
    name: "Backend Languages",
    tags: ["Go", "Python", "JavaScript / TypeScript"],
  },
  {
    tier: "II",
    name: "Linux",
    tags: ["10+ years", "Arch, Debian, Fedora", "Custom Arch repositories", "Production terminal work"],
  },
  {
    tier: "III",
    name: "Python & Frameworks",
    tags: ["FastAPI", "Flask", "Scripting & automation", "REST API design", "Cryptography", "CLI tooling"],
  },
  {
    tier: "IV",
    name: "Data & Infrastructure",
    tags: ["PostgreSQL", "Supabase", "Docker", "Git", "GitHub Actions"],
  },
  {
    tier: "V",
    name: "Security",
    tags: ["OWASP Top 10", "PortSwigger Web Security Academy", "Auth & access control"],
  },
  {
    tier: "VI",
    name: "AI Tooling & Evaluation",
    tags: ["Claude Code", "Gemini CLI", "Codex", "tmux", "Systematic failure-mode analysis"],
  },
];

const PROJECTS = [
  {
    numeral: "I",
    name: "Concurrent Port Scanner",
    role: "Go — Solo-written",
    description:
      "A multi-threaded TCP port scanner using goroutines and WaitGroups, with a configurable worker pool and timeout handling — written independent of AI tooling to internalize Go's concurrency primitives.",
    href: "https://github.com/Variosity/go-concurrent-port-scanner",
  },
  {
    numeral: "II",
    name: "AES-GCM Encryption CLI/Server",
    role: "Go — Solo-written",
    description:
      "A symmetric encryption/decryption tool (CLI + HTTP server) built from the cryptographic primitives up, plus a hand-rolled REST API/HTTP server to internalize routing and middleware before adopting a framework.",
    href: "https://github.com/Variosity/go-aes-server",
  },
  {
    numeral: "III",
    name: "Hacklingo",
    role: "Full-Stack Developer",
    description:
      "A gamified cybersecurity learning platform with RPG-style progress tracking across Red, Blue, and Purple team curricula. Backend API and relational data models in Supabase/PostgreSQL, applying OWASP Top 10-aligned validation and hardening.",
    href: "https://hacklingo.tech",
  },
  {
    numeral: "IV",
    name: "Achlys Runtime Environment",
    role: "Creator & Systems Designer",
    description:
      "A custom systems-level runtime with a hand-built tokenizer, AST evaluator, and interpreter, designed to study parser mechanics and low-level execution models.",
    href: "https://achlyssys.vercel.app",
  },
];

const LANGUAGES = [
  { name: "English", level: "Fluent" },
  { name: "Spanish", level: "Fluent" },
  { name: "Italian", level: "Fluent" },
  { name: "Neapolitan", level: "Intermediate" },
  { name: "Portuguese", level: "Intermediate" },
  { name: "Catalan", level: "Intermediate" },
];

export default function Home() {
  const [state, handleSubmit] = useForm("xykyqryr");
  const [showPopup, setShowPopup] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    if (state.succeeded) {
      setShowPopup(true);
      const timer = setTimeout(() => setShowPopup(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <main className="theme-underworld relative min-h-screen w-full selection:bg-[var(--blood-bright)] selection:text-[var(--bone)]">
      <CustomCursor dotColor="var(--ember)" ringColor="var(--ember)" idleRingColor="var(--myth-line-strong)" />
      <EmberField />
      <FuseProgress />
      <MythNavRail />

      {/* Success toast */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-4 z-[90] flex items-center gap-4 border border-[var(--gold)]/50 bg-[var(--void-panel)] px-5 py-4 shadow-2xl sm:right-8"
          >
            <CheckCircle className="h-5 w-5 shrink-0 text-[var(--ember)]" />
            <div>
              <p className="font-codex text-sm text-[var(--bone)]">Message sent</p>
              <p className="font-codex text-xs italic text-[var(--ash)]">I&apos;ll reply shortly.</p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="ml-2 text-[var(--ash-faint)] hover:text-[var(--bone)]"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        {/* THRESHOLD — hero */}
        <section
          id="threshold"
          ref={heroRef}
          className="relative flex min-h-screen w-full flex-col justify-center overflow-hidden px-6 sm:px-12 lg:pl-36 lg:pr-20"
        >
          <FireLayer />

          <motion.div
            style={{ y: heroY, opacity: heroOpacity }}
            className="relative z-10 mx-auto w-full max-w-4xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="font-codex text-lg italic text-[var(--gold-bright)] sm:text-xl"
            >
              Systems &amp; Infrastructure Engineer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
              className="underworld-glow-text mt-3 font-inscribed text-[15vw] font-bold leading-[0.95] tracking-tight text-[var(--bone)] sm:text-7xl lg:text-8xl"
            >
              Miguel Esteves
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="mt-7 max-w-xl font-codex text-lg leading-relaxed text-[var(--ash)] sm:text-xl"
            >
              Systems-oriented engineer across Python, SQL, and Linux —
              concurrent systems, REST APIs, and security automation, backed
              by 10+ years navigating Linux environments and a defensive,
              secure-by-design habit from security research work. Multilingual and remote-native.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.55 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {FOCUS_ROLES.map((r) => (
                <span
                  key={r}
                  className="border border-[var(--myth-line-strong)] px-3 py-1.5 font-codex text-sm text-[var(--ash)]"
                >
                  {r}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#rite"
                data-cursor-hover
                className="group inline-flex items-center gap-2 border border-[var(--ember)] px-6 py-3 font-codex text-base text-[var(--ember)] transition-colors hover:bg-[var(--ember)] hover:text-[var(--void)]"
              >
                Get in touch
              </a>
              <a
                href="#record"
                data-cursor-hover
                className="group inline-flex items-center gap-2 px-6 py-3 font-codex text-base italic text-[var(--ash)] transition-colors hover:text-[var(--bone)]"
              >
                Descend
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* THE RECORD — professional experience */}
        <section id="record" className="w-full px-6 py-28 sm:px-12 lg:pl-36 lg:pr-20">
          <div className="mx-auto w-full max-w-3xl">
            <Meander className="mb-12 h-4 w-full max-w-[240px] opacity-70" />
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="font-inscribed text-3xl font-semibold text-[var(--bone)] sm:text-4xl"
            >
              The Record
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-4 mb-14 max-w-lg font-codex text-lg italic text-[var(--ash)]"
            >
              Professional experience, most recent first.
            </motion.p>

            <div className="space-y-14">
              {EXPERIENCE.map((job, i) => (
                <motion.div
                  key={job.org}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10% 0px" }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.06 }}
                  className="border-l-2 border-[var(--myth-line-strong)] pl-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-inscribed text-xl font-semibold text-[var(--bone)] sm:text-2xl">
                      {job.role}
                    </h3>
                    <span className="font-codex text-sm italic text-[var(--gold-bright)]">
                      {job.dates}
                    </span>
                  </div>
                  <p className="mt-1 font-codex text-base text-[var(--gold-bright)]">
                    {job.org}
                    <span className="text-[var(--ash-faint)]"> — {job.note}</span>
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="font-codex text-[15px] leading-relaxed text-[var(--ash)] sm:text-base"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* THE ARSENAL — competencies */}
        <section id="arsenal" className="w-full px-6 py-28 sm:px-12 lg:pl-36 lg:pr-20">
          <div className="mx-auto w-full max-w-3xl">
            <Meander className="mb-12 h-4 w-full max-w-[240px] opacity-70" />
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="font-inscribed text-3xl font-semibold text-[var(--bone)] sm:text-4xl"
            >
              The Arsenal
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-4 mb-14 max-w-lg font-codex text-lg italic text-[var(--ash)]"
            >
              Core competencies, layered from language to security.
            </motion.p>

            <div className="divide-y divide-[var(--myth-line)]">
              {ARSENAL.map((layer, i) => (
                <motion.div
                  key={layer.tier}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10% 0px" }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.04 }}
                  className="group py-6 first:pt-0"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-inscribed text-sm text-[var(--gold)]">{layer.tier}</span>
                    <h3 className="font-inscribed text-lg font-medium text-[var(--bone)] sm:text-xl">
                      {layer.name}
                    </h3>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2 pl-0 sm:pl-9">
                    {layer.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-[var(--myth-line-strong)] px-2.5 py-1 font-codex text-[13px] text-[var(--ash)] transition-colors group-hover:border-[var(--gold)] group-hover:text-[var(--bone)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* THE FORGE — technical projects */}
        <section id="forge" className="w-full px-6 py-28 sm:px-12 lg:pl-36 lg:pr-20">
          <div className="mx-auto w-full max-w-5xl">
            <Meander className="mb-12 h-4 w-full max-w-[240px] opacity-70" />
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="font-inscribed text-3xl font-semibold text-[var(--bone)] sm:text-4xl"
            >
              The Forge
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-4 max-w-lg font-codex text-lg italic text-[var(--ash)]"
            >
              Technical projects, built and shipped.
            </motion.p>

            <div className="mt-16 grid gap-8 sm:grid-cols-2">
              {PROJECTS.map((p, i) => (
                <motion.div
                  key={p.numeral}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10% 0px" }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.07 }}
                >
                  <TiltCard className="h-full">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="ash-grain relative flex h-full flex-col justify-between overflow-hidden border border-[var(--myth-line)] bg-[var(--void-panel)]/70 p-7 transition-colors duration-300 hover:border-[var(--myth-line-strong)]"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <span className="font-inscribed text-sm tracking-[0.2em] text-[var(--gold)]">
                            {p.numeral}
                          </span>
                          <ArrowUpRight className="h-5 w-5 text-[var(--ash-faint)] transition-colors group-hover:text-[var(--ember)]" />
                        </div>
                        <h3 className="mt-3 font-inscribed text-2xl font-semibold text-[var(--bone)]">
                          {p.name}
                        </h3>
                        <p className="mt-1 font-codex text-sm italic text-[var(--gold-bright)]">
                          {p.role}
                        </p>
                        <p className="mt-4 font-codex text-[15px] leading-relaxed text-[var(--ash)]">
                          {p.description}
                        </p>
                      </div>
                    </a>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION & LANGUAGES */}
        <section id="education" className="w-full px-6 py-20 sm:px-12 lg:pl-36 lg:pr-20">
          <div className="mx-auto w-full max-w-3xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="grid gap-12 sm:grid-cols-2"
            >
              <div>
                <h3 className="font-inscribed text-sm tracking-[0.2em] text-[var(--gold)]">
                  Education
                </h3>
                <div className="mt-4 space-y-4 font-codex text-[15px] leading-relaxed text-[var(--ash)]">
                  <div>
                    <p className="text-[var(--bone)]">Southern New Hampshire University</p>
                    <p className="italic text-[var(--ash-faint)]">Computer Science coursework (2 years)</p>
                  </div>
                  <div>
                    <p className="text-[var(--bone)]">University of Helsinki — Python MOOC</p>
                    <p className="italic text-[var(--ash-faint)]">
                      In progress — pursuing certification from an accredited university program
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-inscribed text-sm tracking-[0.2em] text-[var(--gold)]">
                  Languages
                </h3>
                <ul className="mt-4 space-y-2 font-codex text-[15px] text-[var(--ash)]">
                  {LANGUAGES.map((l) => (
                    <li key={l.name} className="flex items-baseline justify-between gap-4 border-b border-[var(--myth-line)] pb-2">
                      <span className="text-[var(--bone)]">{l.name}</span>
                      <span className="italic text-[var(--ash-faint)]">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        {/* THE RITE — contact */}
        <section id="rite" className="w-full px-6 py-28 sm:px-12 lg:pl-36 lg:pr-20">
          <div className="mx-auto w-full max-w-2xl">
            <Meander className="mb-12 h-4 w-full max-w-[240px] opacity-70" />
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="font-inscribed text-3xl font-semibold text-[var(--bone)] sm:text-4xl"
            >
              The Rite
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mt-4 mb-12 font-codex text-lg italic text-[var(--ash)]"
            >
              Open to remote roles and contract work across time zones.
            </motion.p>

            <motion.form
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10% 0px" }}
              variants={fadeUp}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="mb-2 block font-codex text-sm italic text-[var(--ash)]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  data-cursor-hover
                  className="w-full border border-[var(--myth-line-strong)] bg-transparent px-4 py-3 font-codex text-[var(--bone)] outline-none transition-colors placeholder:text-[var(--ash-faint)] focus:border-[var(--ember)]"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-codex text-sm italic text-[var(--ash)]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  data-cursor-hover
                  className="w-full border border-[var(--myth-line-strong)] bg-transparent px-4 py-3 font-codex text-[var(--bone)] outline-none transition-colors placeholder:text-[var(--ash-faint)] focus:border-[var(--ember)]"
                  placeholder="jane@company.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-[var(--blood-bright)]" />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-codex text-sm italic text-[var(--ash)]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  data-cursor-hover
                  className="w-full resize-none border border-[var(--myth-line-strong)] bg-transparent px-4 py-3 font-codex text-[var(--bone)] outline-none transition-colors placeholder:text-[var(--ash-faint)] focus:border-[var(--ember)]"
                  placeholder="What's the role?"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-[var(--blood-bright)]" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                data-cursor-hover
                className="inline-flex w-full items-center justify-center gap-2 border border-[var(--ember)] bg-[var(--ember)] px-6 py-4 font-codex text-base text-[var(--void)] transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-auto"
              >
                {state.submitting ? "Sending…" : "Send message"}
                {!state.submitting && <Send className="h-4 w-4" />}
              </button>
            </motion.form>

            <div className="mt-16 flex gap-5 border-t border-[var(--myth-line)] pt-8">
              <a href="https://www.linkedin.com/in/miguel-esteves-129879314" target="_blank" rel="noopener noreferrer" data-cursor-hover aria-label="LinkedIn" className="text-[var(--ash-faint)] transition-colors hover:text-[var(--gold-bright)]">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/Variosity" target="_blank" rel="noopener noreferrer" data-cursor-hover aria-label="GitHub" className="text-[var(--ash-faint)] transition-colors hover:text-[var(--bone)]">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://x.com/migueljandro" target="_blank" rel="noopener noreferrer" data-cursor-hover aria-label="Twitter/X" className="text-[var(--ash-faint)] transition-colors hover:text-[var(--gold-bright)]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:alejandriosity@gmail.com" data-cursor-hover aria-label="Email" className="text-[var(--ash-faint)] transition-colors hover:text-[var(--ember)]">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <footer className="w-full border-t border-[var(--myth-line)] px-6 py-10 sm:px-12 lg:pl-36 lg:pr-20">
          <p className="font-codex text-sm italic text-[var(--ash-faint)]">
            Miguel Esteves — Winter Garden, FL. 2026.
          </p>
        </footer>
      </div>
    </main>
  );
}
