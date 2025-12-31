"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  Shield,
  Zap,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Send,
  Lock,
  Globe,
  Cpu,
  Languages,
  Terminal,
  Server,
  CheckCircle,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const popupVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 20, scale: 0.95 }
};

export default function Home() {
  // --- FORM LOGIC ---
  // REPLACE "YOUR_FORM_ID" WITH THE ID YOU GOT FROM FORMSPREE
  const [state, handleSubmit] = useForm("xykyqryr");
  
  const [showPopup, setShowPopup] = useState(false);

  // Trigger popup when form is successfully sent
  useEffect(() => {
    if (state.succeeded) {
      setShowPopup(true);
      // Auto-hide after 5 seconds
      const timer = setTimeout(() => setShowPopup(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const baseCard = "bg-zinc-900/20 backdrop-blur-sm rounded-2xl border border-transparent hover:bg-zinc-900/40 transition-colors duration-300";

  return (
    <main className="min-h-screen bg-zinc-950 text-white w-full overflow-x-hidden selection:bg-red-500/30">
      
      {/* --- NOTIFICATION POPUP --- */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={popupVariants}
            className="fixed bottom-8 right-4 sm:right-8 z-50 bg-zinc-900 border border-green-500/50 text-white px-6 py-4 rounded-xl shadow-2xl shadow-green-900/20 flex items-center gap-4"
          >
            <div className="bg-green-500/20 p-2 rounded-full">
              <CheckCircle className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h4 className="font-bold text-green-400">Transmission Secure</h4>
              <p className="text-sm text-zinc-400">I will respond to your briefing shortly.</p>
            </div>
            <button onClick={() => setShowPopup(false)} className="ml-4 text-zinc-500 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05),transparent_60%)]" />
        </div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-5"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-red-600 to-orange-600">
              Alejandro
            </span>{" "}
            <span className="text-white">Fernandez</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-medium"
          >
            Web Infrastructure Security <span className="text-zinc-600">|</span> Vulnerability Remediation
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            I identify and patch critical security leaks in high-value business assets before the bad guys find them.
            <br />
            Operating Globally. Based in Central FL.
          </motion.p>

          <motion.a
            variants={fadeInUp}
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-full hover:from-red-500 hover:to-orange-500 shadow-lg shadow-red-500/20 hover:shadow-red-500/40"
          >
            Secure Your Assets
            <Shield className="w-5 h-5" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border border-zinc-700 flex justify-center opacity-60"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-red-500 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="px-4 sm:px-6 lg:px-8 w-full flex justify-center"
        style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      >
        <div className="max-w-4xl w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="w-full"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl font-bold mb-12 text-center"
            >
              The <span className="text-red-500">Operative</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
              className={`${baseCard} hover:border-red-500/30 p-8 sm:p-12 text-lg sm:text-xl leading-relaxed text-zinc-300 text-center font-light`}
            >
              <p>
                I don't just build websites; I fortify them. With a background in <strong>Kali Linux</strong>, 
                <strong> OpSec</strong>, and <strong>Full-Stack Architecture</strong>, I specialize in finding 
                broken doors in your digital infrastructure and locking them tight. 
                <br /><br />
                As a polyglot fluent in English, Spanish, and Italian, I bridge the gap between technical complexity 
                and business reality. Whether it's patching a WordPress vulnerability or deploying an AI-driven defense 
                protocol, I execute with military precision.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Grid */}
      <section
        id="skills"
        className="px-4 sm:px-6 lg:px-8 bg-zinc-950 w-full flex justify-center"
        style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      >
        <div className="max-w-7xl w-full">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          >
            Tactical <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-600">Arsenal</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-6"
          >
            {/* Systems & Security - PRIORITY 1 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-red-500/50 p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm`}
            >
              <div className="flex justify-center mb-6">
                <Terminal className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-red-400 text-center">
                Offensive Security
              </h3>
              <ul className="space-y-3 text-zinc-300 text-center">
                <li>• Kali Linux Env</li>
                <li>• Vuln Assessment</li>
                <li>• OpSec Protocols</li>
                <li>• Directory Patching</li>
                <li className="text-sm text-zinc-500">
                  (Penetration Testing)
                </li>
              </ul>
            </motion.div>

            {/* Core Skills - PRIORITY 2 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-blue-500/50 p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm`}
            >
              <div className="flex justify-center mb-6">
                <Server className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-400 text-center">Infrastructure</h3>
              <ul className="space-y-3 text-zinc-300 text-center">
                <li>• Next.js / React</li>
                <li>• Python Automation</li>
                <li>• Linux SysAdmin</li>
                <li>• Cloud Security</li>
              </ul>
            </motion.div>

            {/* AI & Automation - PRIORITY 3 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-indigo-500/50 p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm`}
            >
              <div className="flex justify-center mb-6">
                <Zap className="w-10 h-10 text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-indigo-400 text-center">
                AI Warfare
              </h3>
              <ul className="space-y-3 text-zinc-300 text-center">
                <li>• ComfyUI Workflows</li>
                <li>• LLM Integration</li>
                <li>• Stable Diffusion</li>
                <li>• Process Automation</li>
              </ul>
            </motion.div>

            {/* Languages - PRIORITY 4 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-green-500/50 p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm`}
            >
              <div className="flex justify-center mb-6">
                <Languages className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-400 text-center">
                Linguistics
              </h3>
              <ul className="space-y-3 text-zinc-300 text-center">
                <li>• English (Native)</li>
                <li>• Spanish (Native)</li>
                <li>• Italian (Fluent)</li>
                <li>• Roman Dialects</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="px-4 sm:px-6 lg:px-8 w-full flex justify-center"
        style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      >
        <div className="max-w-7xl w-full">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          >
            Deployment <span className="text-red-500">Protocols</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8"
          >
            {/* Service 1 - Security Audit */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-red-500/50 p-10 group w-full md:w-[calc(33.333%-22px)] max-w-md flex flex-col items-center`}
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-all duration-500">
                <Lock className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-400 text-center">
                Vulnerability Remediation
              </h3>
              <p className="text-zinc-400 leading-relaxed text-base text-center">
                I scan your site for exposed directories, broken SSL, and SQL injection points. Then I patch them immediately.
              </p>
            </motion.div>

             {/* Service 2 - AI Web */}
             <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-blue-500/50 p-10 group w-full md:w-[calc(33.333%-22px)] max-w-md flex flex-col items-center`}
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all duration-500">
                <Globe className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400 text-center">
                Secure Architecture
              </h3>
              <p className="text-zinc-400 leading-relaxed text-base text-center">
                Building Next.js applications that are fast, SEO-optimized, and hardened against common web attacks from day one.
              </p>
            </motion.div>

            {/* Service 3 - Automation */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-indigo-500/50 p-10 group w-full md:w-[calc(33.333%-22px)] max-w-md flex flex-col items-center`}
            >
              <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-all duration-500">
                <Cpu className="w-7 h-7 text-indigo-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400 text-center">
                Automated Defense
              </h3>
              <p className="text-zinc-400 leading-relaxed text-base text-center">
                Deploying custom AI agents to monitor systems or automate complex business workflows to increase efficiency.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section - Framed as Security/Tech wins */}
      <section
        id="projects"
        className="px-4 sm:px-6 lg:px-8 bg-zinc-950 w-full flex justify-center"
        style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      >
        <div className="max-w-7xl w-full">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          >
            Mission <span className="text-red-500">Log</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8"
          >
            {/* Project 1 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-blue-500/50 p-8 group w-full md:w-[calc(33.333%-22px)] max-w-md`}
            >
              <div className="w-full h-56 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-xl mb-6 flex items-center justify-center group-hover:from-blue-600/20 group-hover:to-indigo-600/20 transition-all duration-500">
                <Globe className="w-20 h-20 text-blue-500/50 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-400 text-center">
                Real Estate Portfolio Hardening
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed text-center">
                Secured and optimized a staging platform network. Improved load times by 40% and patched exposed CMS entry points.
              </p>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-indigo-500/50 p-8 group w-full md:w-[calc(33.333%-22px)] max-w-md`}
            >
              <div className="w-full h-56 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-xl mb-6 flex items-center justify-center group-hover:from-indigo-600/20 group-hover:to-purple-600/20 transition-all duration-500">
                <Cpu className="w-20 h-20 text-indigo-500/50 group-hover:text-indigo-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-indigo-400 text-center">
                Local Business Digital Rescue
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed text-center">
                Complete overhaul of legacy infrastructure. Implemented secure forms and AI-driven customer lead capture.
              </p>
            </motion.div>

            {/* Project 3 */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-red-500/50 p-8 group w-full md:w-[calc(33.333%-22px)] max-w-md`}
            >
              <div className="w-full h-56 bg-gradient-to-br from-red-600/10 to-orange-600/10 rounded-xl mb-6 flex items-center justify-center group-hover:from-red-600/20 group-hover:to-orange-600/20 transition-all duration-500">
                <Shield className="w-20 h-20 text-red-500/50 group-hover:text-red-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-400 text-center">
                Bug Bounty & Recon
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed text-center">
                Active researcher on HackerOne. Specializing in identifying IDOR vulnerabilities and logic flaws in web apps.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-4 sm:px-6 lg:px-8 w-full flex justify-center"
        style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      >
        <div className="max-w-4xl w-full">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-16 text-center"
          >
            Initiate <span className="text-red-500">Protocol</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className={`${baseCard} hover:border-red-500/30 p-8 sm:p-12`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-400 mb-3"
                >
                  Name / Organization
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                  placeholder="Identify yourself"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-400 mb-3"
                >
                  Comms Channel
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                  placeholder="secure@email.com"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-400 mb-3"
                >
                  Mission Briefing
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all resize-none"
                  placeholder="Describe the vulnerability or project scope..."
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full px-6 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-red-500 hover:to-orange-500 transition-all duration-300 shadow-lg shadow-red-500/20 hover:shadow-red-500/40 flex items-center justify-center gap-2 mt-8 mb-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Establishing Connection..." : "Transmit Data"}
                {!state.submitting && <Send className="w-5 h-5" />}
              </button>
            </form>

            {/* Social Links */}
            <div style={{ marginTop: '3rem', paddingTop: '1rem' }}>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.linkedin.com/in/miguel-esteves-129879314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-zinc-900/40 rounded-xl flex items-center justify-center border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-1"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6 text-zinc-400 hover:text-blue-500 transition-colors" />
                </a>
                <a
                  href="https://github.com/variosity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-zinc-900/40 rounded-xl flex items-center justify-center border border-zinc-800 hover:border-white/50 hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-1"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-zinc-400 hover:text-white transition-colors" />
                </a>
                <a
                  href="https://x.com/migueljandro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-zinc-900/40 rounded-xl flex items-center justify-center border border-zinc-800 hover:border-blue-400/50 hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Twitter/X"
                >
                  <Twitter className="w-6 h-6 text-zinc-400 hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="mailto:alejandriosity@gmail.com"
                  className="w-14 h-14 bg-zinc-900/40 rounded-xl flex items-center justify-center border border-zinc-800 hover:border-red-500/50 hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Email"
                >
                  <Mail className="w-6 h-6 text-zinc-400 hover:text-red-500 transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-zinc-950 w-full flex justify-center border-t border-zinc-900/50" style={{ marginTop: '2rem' }}>
        <div className="max-w-7xl w-full text-center text-zinc-500 text-sm">
          <p>
            Secured & Engineered by{" "}
            <span className="text-red-500 font-semibold">
              Alejandro Fernandez
            </span>
            . 2025.
          </p>
        </div>
      </footer>
    </main>
  );
}
