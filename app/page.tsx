"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Send, CheckCircle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

import CustomCursor from "./components/CustomCursor";
import SchematicField from "./components/SchematicField";
import NavRail from "./components/NavRail";
import BootHero from "./components/BootHero";
import Counter from "./components/Counter";
import RegistryRow, { Tag } from "./components/RegistryRow";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const STACK_LAYERS = [
  {
    tier: "01",
    name: "Interface",
    blurb: "The surface a user touches, when a project calls for one.",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    tier: "02",
    name: "API & Services",
    blurb: "Where most of my time goes — request handling, concurrency, business logic.",
    tags: ["Go", "Python", "FastAPI", "REST design", "Goroutines"],
  },
  {
    tier: "03",
    name: "Data",
    blurb: "Schema design and storage that holds up under real usage.",
    tags: ["PostgreSQL", "Redis", "Supabase"],
  },
  {
    tier: "04",
    name: "Infrastructure",
    blurb: "Getting it built, containerized, and shipped without surprises.",
    tags: ["Docker", "GitHub Actions", "Linux", "Vercel"],
  },
  {
    tier: "05",
    name: "Security",
    blurb: "Secure-by-design habits carried over from application security work.",
    tags: ["OWASP Top 10", "Auth & Access Control", "PortSwigger Academy"],
  },
];

const FLAGSHIP: { index: string; name: string; description: string; tags: Tag[]; href?: string }[] = [
  {
    index: "01",
    name: "HackLingo",
    description:
      "A gamified information security learning platform — RPG-style progression across Red, Blue, and Purple team paths, with subscriptions and a native app shell.",
    tags: [
      { label: "AI-accelerated", tone: "ai" },
      { label: "Full-stack", tone: "shipped" },
      { label: "Shipped", tone: "shipped" },
    ],
    href: "https://hacklingo.tech",
  },
  {
    index: "02",
    name: "Excelsus",
    description:
      "A personal brand and agency system built around Jarvis, an AI assistant integrating Groq and Gemini with a voice bridge and a cold-outreach pipeline.",
    tags: [
      { label: "AI integration", tone: "ai" },
      { label: "Automation", tone: "shipped" },
    ],
  },
];

const SYSTEMS_WORK: { index: string; name: string; description: string; tags: Tag[]; href?: string }[] = [
  {
    index: "03",
    name: "Achlys",
    description:
      "A custom systems programming language, OS, and runtime built from scratch — prototyped in Rust, brought to production in C, and bootstrapped in two weeks. Hand-built the parser, interpreter, and AST evaluation model.",
    tags: [
      { label: "Solo-written", tone: "solo" },
      { label: "C / Rust", tone: "solo" },
      { label: "Systems", tone: "solo" },
    ],
    href: "https://achlyssys.vercel.app",
  },
  {
    index: "04",
    name: "Concurrent Port Scanner",
    description:
      "A multi-threaded TCP port scanner in Go using goroutines and WaitGroups, with a configurable worker pool and timeout handling.",
    tags: [
      { label: "Solo-written", tone: "solo" },
      { label: "Go", tone: "solo" },
      { label: "Concurrency", tone: "solo" },
    ],
    href: "https://github.com/Variosity",
  },
  {
    index: "05",
    name: "AES Encrypt / Decrypt CLI",
    description: "A command-line tool for symmetric encryption and decryption, written to understand the primitives rather than wrap a library blindly.",
    tags: [
      { label: "Solo-written", tone: "solo" },
      { label: "Go", tone: "solo" },
      { label: "Cryptography", tone: "solo" },
    ],
    href: "https://github.com/Variosity",
  },
  {
    index: "06",
    name: "Secure REST API & HTTP Server",
    description: "A hand-rolled HTTP server and REST API layer, built to internalize request routing and middleware before reaching for a framework.",
    tags: [
      { label: "Solo-written", tone: "solo" },
      { label: "Go", tone: "solo" },
      { label: "Backend", tone: "solo" },
    ],
    href: "https://github.com/Variosity",
  },
  {
    index: "07",
    name: "AreteGuard",
    description: "An OWASP-based security auditing tool for scanning applications against common web vulnerability classes.",
    tags: [
      { label: "Solo-written", tone: "solo" },
      { label: "Security", tone: "solo" },
    ],
    href: "https://github.com/Variosity",
  },
];

export default function Home() {
  const [state, handleSubmit] = useForm("xykyqryr");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowPopup(true);
      const timer = setTimeout(() => setShowPopup(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  return (
    <main className="relative min-h-screen w-full selection:bg-[var(--amber)] selection:text-[#0a0e17]">
      <CustomCursor />
      <SchematicField />
      <NavRail />

      {/* Success toast */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-4 z-[90] flex items-center gap-4 border border-[var(--cyan)]/50 bg-[var(--panel)] px-5 py-4 shadow-2xl sm:right-8"
          >
            <CheckCircle className="h-5 w-5 shrink-0 text-[var(--cyan)]" />
            <div>
              <p className="text-sm font-medium text-[var(--text)]">Message sent</p>
              <p className="font-mono text-xs text-[var(--text-dim)]">I&apos;ll reply shortly.</p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="ml-2 text-[var(--text-faint)] hover:text-[var(--text)]"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
        <BootHero />

        {/* SYSTEMS / ABOUT */}
        <section id="systems" className="w-full px-6 py-28 sm:px-12 lg:pl-36 lg:pr-20">
          <div className="mx-auto grid w-full max-w-4xl gap-12 lg:grid-cols-[1fr_auto] lg:items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
            >
              <h2 className="font-display text-3xl font-medium text-[var(--text)] sm:text-4xl">
                I build the parts users never see, and make sure they hold up.
              </h2>
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-[var(--text-dim)] sm:text-base">
                My background runs through application security and bug bounty
                methodology, which is why backend work, for me, starts from a
                defensive posture rather than getting bolted on afterward. I work
                primarily in Go and Python — concurrent services, database design,
                REST APIs — and I&apos;m equally comfortable reading documentation
                cold as I am shipping a full product end to end.
              </p>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[var(--text-dim)] sm:text-base">
                Remote-native and multilingual, I&apos;ve worked independently
                across time zones for most of my career, and I&apos;m comfortable
                owning a feature from architecture to deployment without someone
                looking over my shoulder.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="grid grid-cols-2 gap-x-10 gap-y-8 font-mono lg:grid-cols-1"
            >
              <div>
                <div className="text-3xl text-[var(--amber)]">
                  <Counter to={6} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-[var(--text-faint)]">
                  Languages spoken
                </div>
              </div>
              <div>
                <div className="text-3xl text-[var(--amber)]">
                  <Counter to={3} />
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-[var(--text-faint)]">
                  Products shipped end to end
                </div>
              </div>
              <div>
                <div className="text-3xl text-[var(--amber)]">
                  <Counter to={2} suffix=" wks" />
                </div>
                <div className="mt-1 text-xs uppercase tracking-wide text-[var(--text-faint)]">
                  To bootstrap Achlys
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STACK — layered diagram */}
        <section id="stack" className="w-full px-6 py-28 sm:px-12 lg:pl-36 lg:pr-20">
          <div className="mx-auto w-full max-w-4xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="mb-14 font-display text-3xl font-medium text-[var(--text)] sm:text-4xl"
            >
              The stack, top to bottom.
            </motion.h2>

            <div className="border border-[var(--line)]">
              {STACK_LAYERS.map((layer, i) => (
                <motion.div
                  key={layer.tier}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-10% 0px" }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.05 }}
                  data-cursor-hover
                  className="group relative border-b border-[var(--line)] px-6 py-6 transition-colors last:border-b-0 hover:bg-[var(--panel)] sm:px-8 sm:py-7"
                >
                  <span className="absolute left-0 top-0 h-full w-[3px] scale-y-0 bg-[var(--amber)] transition-transform duration-300 origin-top group-hover:scale-y-100" />
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-[var(--text-faint)]">
                        {layer.tier}
                      </span>
                      <h3 className="font-display text-lg font-medium text-[var(--text)] sm:text-xl">
                        {layer.name}
                      </h3>
                    </div>
                    <p className="max-w-md text-sm text-[var(--text-dim)] sm:text-right">
                      {layer.blurb}
                    </p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2 pl-0 sm:pl-9">
                    {layer.tags.map((t) => (
                      <span
                        key={t}
                        className="border border-[var(--line-strong)] px-2.5 py-1 font-mono text-[11px] text-[var(--text-dim)] transition-colors group-hover:border-[var(--amber-dim)] group-hover:text-[var(--text)]"
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

        {/* REGISTRY — projects */}
        <section id="registry" className="w-full px-6 py-28 sm:px-12 lg:pl-36 lg:pr-20">
          <div className="mx-auto w-full max-w-4xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="mb-4 font-display text-3xl font-medium text-[var(--text)] sm:text-4xl"
            >
              Project registry.
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-14 max-w-lg text-sm text-[var(--text-dim)]"
            >
              Tagged by how each one was built — full products shipped with AI
              tooling in the loop, and smaller systems work written by hand.
            </motion.p>

            <div className="mb-16">
              <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-faint)]">
                Flagship — shipped products
              </h3>
              {FLAGSHIP.map((p) => (
                <RegistryRow key={p.index} {...p} />
              ))}
            </div>

            <div className="mb-16">
              <h3 className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-faint)]">
                Systems work — hand-written, solo
              </h3>
              {SYSTEMS_WORK.map((p) => (
                <RegistryRow key={p.index} {...p} />
              ))}
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="border-t border-[var(--line)] pt-6"
            >
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-[var(--text-faint)]">
                Also on the bench
              </h3>
              <p className="text-sm leading-relaxed text-[var(--text-faint)]">
                <span className="text-[var(--text-dim)]">PyrTyd</span> — an
                experiment in giving AI assistants distinct personalities and
                voices, part of the Jarvis toolchain.{" "}
                <span className="text-[var(--text-dim)]">Halorust</span> — a
                rapid, AI-assisted game build made to explore the genre rather
                than to ship. Neither is core to how I work, but both are part
                of how I explore.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="w-full px-6 py-28 sm:px-12 lg:pl-36 lg:pr-20">
          <div className="mx-auto w-full max-w-2xl">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-15% 0px" }}
              variants={fadeUp}
              className="mb-4 font-display text-3xl font-medium text-[var(--text)] sm:text-4xl"
            >
              Let&apos;s build something.
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="mb-12 text-sm text-[var(--text-dim)]"
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
                <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-wide text-[var(--text-faint)]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  data-cursor-hover
                  className="w-full border border-[var(--line-strong)] bg-transparent px-4 py-3 text-[var(--text)] outline-none transition-colors placeholder:text-[var(--text-faint)] focus:border-[var(--amber)]"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-wide text-[var(--text-faint)]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  data-cursor-hover
                  className="w-full border border-[var(--line-strong)] bg-transparent px-4 py-3 text-[var(--text)] outline-none transition-colors placeholder:text-[var(--text-faint)] focus:border-[var(--amber)]"
                  placeholder="jane@company.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-[var(--danger)]" />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-wide text-[var(--text-faint)]">
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  data-cursor-hover
                  className="w-full resize-none border border-[var(--line-strong)] bg-transparent px-4 py-3 text-[var(--text)] outline-none transition-colors placeholder:text-[var(--text-faint)] focus:border-[var(--amber)]"
                  placeholder="What are you building?"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-[var(--danger)]" />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                data-cursor-hover
                className="inline-flex w-full items-center justify-center gap-2 border border-[var(--amber)] bg-[var(--amber)] px-6 py-4 font-medium text-[#0a0e17] transition-opacity hover:opacity-90 disabled:opacity-50 sm:w-auto"
              >
                {state.submitting ? "Sending…" : "Send message"}
                {!state.submitting && <Send className="h-4 w-4" />}
              </button>
            </motion.form>

            <div className="mt-16 flex gap-5 border-t border-[var(--line)] pt-8">
              <a href="https://www.linkedin.com/in/miguel-esteves-129879314" target="_blank" rel="noopener noreferrer" data-cursor-hover aria-label="LinkedIn" className="text-[var(--text-faint)] transition-colors hover:text-[var(--cyan)]">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://github.com/Variosity" target="_blank" rel="noopener noreferrer" data-cursor-hover aria-label="GitHub" className="text-[var(--text-faint)] transition-colors hover:text-[var(--text)]">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://x.com/migueljandro" target="_blank" rel="noopener noreferrer" data-cursor-hover aria-label="Twitter/X" className="text-[var(--text-faint)] transition-colors hover:text-[var(--cyan)]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:alejandriosity@gmail.com" data-cursor-hover aria-label="Email" className="text-[var(--text-faint)] transition-colors hover:text-[var(--amber)]">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        <footer className="w-full border-t border-[var(--line)] px-6 py-10 sm:px-12 lg:pl-36 lg:pr-20">
          <p className="font-mono text-xs text-[var(--text-faint)]">
            Miguel Esteves — engineered from Winter Garden, FL. 2026.
          </p>
        </footer>
      </div>
    </main>
  );
}
