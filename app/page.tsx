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
              <h4 className="font-bold text-green-400">Message Sent</h4>
              <p className="text-sm text-zinc-400">I'll be in touch with you shortly.</p>
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
              Miguel
            </span>{" "}
            <span className="text-white">Esteves</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-medium"
          >
            Full-Stack Software Engineer <span className="text-zinc-600">|</span> Systems & Security
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            I build scalable, high-performance web applications and backend infrastructure with a secure-by-design mindset.
            <br />
            <br />
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
            Contact
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
              The <span className="text-red-500">Engineer</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.01 }}
              className={`${baseCard} hover:border-red-500/30 p-8 sm:p-12 text-lg sm:text-xl leading-relaxed text-zinc-300 text-center font-light`}
            >
              <p>
                I don't just write code; I engineer resilient infrastructure. With a deep background in <strong>Systems Programming</strong>, 
                <strong> Application Security</strong>, and <strong>Full-Stack Architecture</strong>, I specialize in building highly scalable platforms that are secure by design. 
                <br /><br />
                As a polyglot fluent in English, Spanish, and Italian, I bridge the gap between technical complexity 
                and business reality. Whether I am architecting a Golang microservice, deploying to Vercel and Supabase, 
                or writing custom compilers in C, I execute with precision and a relentless drive to ship production-ready systems.
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
            Technical <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-orange-600">Arsenal</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-6"
          >
            {/* Backend & Systems */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-red-500/50 p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm`}
            >
              <div className="flex justify-center mb-6">
                <Server className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-red-400 text-center">
                Backend & Systems
              </h3>
              <ul className="space-y-3 text-zinc-300 text-center">
                <li>• Golang & C</li>
                <li>• Node.js / TypeScript</li>
                <li>• PostgreSQL & SQL</li>
                <li>• REST API Architecture</li>
              </ul>
            </motion.div>

            {/* Cloud & Infrastructure */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-blue-500/50 p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm`}
            >
              <div className="flex justify-center mb-6">
                <Globe className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-400 text-center">Cloud & DevOps</h3>
              <ul className="space-y-3 text-zinc-300 text-center">
                <li>• Docker / Compose</li>
                <li>• GitHub Actions (CI/CD)</li>
                <li>• Vercel & Supabase</li>
                <li>• Arch Linux SysAdmin</li>
              </ul>
            </motion.div>

            {/* Security & Automation */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-indigo-500/50 p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm`}
            >
              <div className="flex justify-center mb-6">
                <Shield className="w-10 h-10 text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-indigo-400 text-center">
                Security & AI
              </h3>
              <ul className="space-y-3 text-zinc-300 text-center">
                <li>• OWASP Top 10</li>
                <li>• Secure Authentication</li>
                <li>• Python Automation</li>
                <li>• LLM Integration</li>
              </ul>
            </motion.div>

            {/* Frontend & Linguistics */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-green-500/50 p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm`}
            >
              <div className="flex justify-center mb-6">
                <Terminal className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-400 text-center">
                Frontend & Lingual
              </h3>
              <ul className="space-y-3 text-zinc-300 text-center">
                <li>• React / Next.js</li>
                <li>• Tailwind CSS</li>
                <li>• English & Spanish</li>
                <li>• Italian (Fluent)</li>
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
            Engineering <span className="text-red-500">Focus</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8"
          >
            {/* Service 1 - Backend */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-red-500/50 p-10 group w-full md:w-[calc(33.333%-22px)] max-w-md flex flex-col items-center`}
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-all duration-500">
                <Server className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-400 text-center">
                Backend Infrastructure
              </h3>
              <p className="text-zinc-400 leading-relaxed text-base text-center">
                Architecting high-performance, containerized microservices and REST APIs using Golang, Node.js, and PostgreSQL.
              </p>
            </motion.div>

             {/* Service 2 - Full-Stack */}
             <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-blue-500/50 p-10 group w-full md:w-[calc(33.333%-22px)] max-w-md flex flex-col items-center`}
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all duration-500">
                <Globe className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400 text-center">
                Full-Stack Architecture
              </h3>
              <p className="text-zinc-400 leading-relaxed text-base text-center">
                Building scalable web platforms leveraging Next.js, Vercel, and Supabase, engineered for speed and SEO.
              </p>
            </motion.div>

            {/* Service 3 - Security */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-indigo-500/50 p-10 group w-full md:w-[calc(33.333%-22px)] max-w-md flex flex-col items-center`}
            >
              <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-all duration-500">
                <Shield className="w-7 h-7 text-indigo-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400 text-center">
                Secure By Design
              </h3>
              <p className="text-zinc-400 leading-relaxed text-base text-center">
                Integrating Application Security directly into the deployment pipeline, preventing logic flaws and SQL injection vulnerabilities.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
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
            Deployed <span className="text-red-500">Architecture</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8"
          >
            {/* Project 1: Achlys */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-blue-500/50 p-8 group w-full md:w-[calc(33.333%-22px)] max-w-md`}
            >
              <div className="w-full h-56 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-xl mb-6 flex items-center justify-center group-hover:from-blue-600/20 group-hover:to-indigo-600/20 transition-all duration-500">
                <Terminal className="w-20 h-20 text-blue-500/50 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-400 text-center">
                Achlys Programming Language
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed text-center">
                Designed a custom systems programming language. Built the parser, interpreter, and compiler architecture to manage systems-level operations.
              </p>
            </motion.div>

            {/* Project 2: HackLingo */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-indigo-500/50 p-8 group w-full md:w-[calc(33.333%-22px)] max-w-md`}
            >
              <div className="w-full h-56 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-xl mb-6 flex items-center justify-center group-hover:from-indigo-600/20 group-hover:to-purple-600/20 transition-all duration-500">
                <Globe className="w-20 h-20 text-indigo-500/50 group-hover:text-indigo-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-indigo-400 text-center">
                Hacklingo Platform
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed text-center">
                Architected a full-stack, AI-assisted learning platform. Engineered secure authentication pipelines and scalable user-facing API integrations.
              </p>
            </motion.div>

            {/* Project 3: Go API */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-red-500/50 p-8 group w-full md:w-[calc(33.333%-22px)] max-w-md`}
            >
              <div className="w-full h-56 bg-gradient-to-br from-red-600/10 to-orange-600/10 rounded-xl mb-6 flex items-center justify-center group-hover:from-red-600/20 group-hover:to-orange-600/20 transition-all duration-500">
                <Server className="w-20 h-20 text-red-500/50 group-hover:text-red-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-red-400 text-center">
                Secure Golang Microservice
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed text-center">
                Containerized REST API built with Go, PostgreSQL, and Docker. Features automated CI/CD pipelines via GitHub Actions and secure SQL parametrization.
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
            Get In <span className="text-red-500">Touch</span>
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
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-400 mb-3"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all"
                  placeholder="john@example.com"
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
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all resize-none"
                  placeholder="How can I help you build?"
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
                {state.submitting ? "Sending..." : "Send Message"}
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
                  href="https://github.com/Variosity"
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
              Miguel Esteves
            </span>
            . 2026.
          </p>
        </div>
      </footer>
    </main>
  );
}
