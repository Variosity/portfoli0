"use client";

import { motion, Variants } from "framer-motion";
import {
  Code2,
  Shield,
  Zap,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Send,
  Sparkles,
  Brain,
  Lock,
  Globe,
  Cpu,
  Languages,
} from "lucide-react";
import { useState } from "react";

const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" // easeOut feels more natural for entry than easeIn
    }
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  // FIXED: Removed 'transition-all' and 'hover:scale'. 
  // We now use 'transition-colors' for bg/border, and Framer's 'whileHover' for the scale.
  // This stops the CSS from fighting the entry animation.
  const baseCard = "bg-zinc-900/20 backdrop-blur-sm rounded-2xl border border-transparent hover:bg-zinc-900/40 transition-colors duration-300";

  return (
    <main className="min-h-screen bg-zinc-950 text-white w-full overflow-x-hidden selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_60%)]" />
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
            <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600">
              Alejandro
            </span>{" "}
            <span className="text-white">Fernandez</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl text-zinc-300 font-medium"
          >
            AI Solutions Architect | Full-Stack Engineer | Cybersecurity
            Specialist
          </motion.p>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
          >
            Bridging the gap between complex systems and human needs. <br /> Based in Central FL.
          </motion.p>

          <motion.a
            variants={fadeInUp}
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
          >
            Get Your Custom Solution
            <Send className="w-5 h-5" />
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
              className="w-1 h-2 bg-blue-500 rounded-full mt-2"
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
              About <span className="text-blue-500">Me</span>
            </motion.h2>

            <motion.div
              variants={fadeInUp}
              // Added whileHover here to handle scale smoothly
              whileHover={{ scale: 1.01 }}
              className={`${baseCard} hover:border-blue-500/30 p-8 sm:p-12 text-lg sm:text-xl leading-relaxed text-zinc-300 text-center font-light`}
            >
              <p>
                I am a Multilingual Technologist and Solutions Architect. My
                background spans Full-Stack Development, InfoSec, and AI
                integration. I don't just build websites—I engineer digital
                assets that drive revenue and security. As a polymath fluent in
                English, Spanish, and Italian, I view code as another language
                to be mastered. I specialize in deploying high-performance web
                applications integrated with modern AI agents.
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
            The <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">Titan</span> Skill Set
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-6"
          >
            {/* Core Skills - Hover: Blue */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-blue-500/50 p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm`}
            >
              <div className="flex justify-center mb-6">
                <Code2 className="w-10 h-10 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-blue-400 text-center">Core</h3>
              <ul className="space-y-3 text-zinc-300 text-center">
                <li>• Next.js</li>
                <li>• React</li>
                <li>• Tailwind</li>
                <li>• Python</li>
              </ul>
            </motion.div>

            {/* AI & Automation - Hover: Indigo */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-indigo-500/50 p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm`}
            >
              <div className="flex justify-center mb-6">
                <Brain className="w-10 h-10 text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-indigo-400 text-center">
                AI & Automation
              </h3>
              <ul className="space-y-3 text-zinc-300 text-center">
                <li>• Vercel AI SDK</li>
                <li>• ComfyUI</li>
                <li>• LLM Integration</li>
                <li>• Stable Diffusion</li>
              </ul>
            </motion.div>

            {/* Systems & Security - Hover: Red */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-red-500/50 p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm`}
            >
              <div className="flex justify-center mb-6">
                <Shield className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-red-400 text-center">
                Systems & Security
              </h3>
              <ul className="space-y-3 text-zinc-300 text-center">
                <li>• Kali Linux</li>
                <li>• Bash</li>
                <li>• OpSec</li>
                <li>• Bug Bounty Hunting</li>
                <li className="text-sm text-zinc-500">
                  (Recon/Nuclei)
                </li>
              </ul>
            </motion.div>

            {/* Languages - Hover: Green */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-green-500/50 p-8 w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] max-w-sm`}
            >
              <div className="flex justify-center mb-6">
                <Languages className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-green-400 text-center">
                Languages
              </h3>
              <ul className="space-y-3 text-zinc-300 text-center">
                <li>• English (Native)</li>
                <li>• Spanish (Native)</li>
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
            What I <span className="text-blue-500">Offer</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8"
          >
            {/* Service 1 - Hover: Blue */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-blue-500/50 p-10 group w-full md:w-[calc(33.333%-22px)] max-w-md flex flex-col items-center`}
            >
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-all duration-500">
                <Sparkles className="w-7 h-7 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400 text-center">
                AI-Integrated Web Development
              </h3>
              <p className="text-zinc-400 leading-relaxed text-base text-center">
                Fast, SEO-optimized Next.js sites with Chatbots. Modern,
                high-performance architecture that drives engagement and
                conversions.
              </p>
            </motion.div>

            {/* Service 2 - Hover: Red */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-red-500/50 p-10 group w-full md:w-[calc(33.333%-22px)] max-w-md flex flex-col items-center`}
            >
              <div className="w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-all duration-500">
                <Lock className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-red-400 text-center">
                Cybersecurity Audits
              </h3>
              <p className="text-zinc-400 leading-relaxed text-base text-center">
                Fixing vulnerabilities, securing networks. Comprehensive security
                assessments to protect your digital infrastructure.
              </p>
            </motion.div>

            {/* Service 3 - Hover: Indigo */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-indigo-500/50 p-10 group w-full md:w-[calc(33.333%-22px)] max-w-md flex flex-col items-center`}
            >
              <div className="w-14 h-14 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 transition-all duration-500">
                <Zap className="w-7 h-7 text-indigo-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-indigo-400 text-center">
                Custom Automation
              </h3>
              <p className="text-zinc-400 leading-relaxed text-base text-center">
                Business process automation using AI. Streamline operations and
                boost efficiency with intelligent automation solutions.
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
            Featured <span className="text-blue-500">Projects</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-8"
          >
            {/* Project 1 - Hover: Blue */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-blue-500/50 p-8 group w-full md:w-[calc(33.333%-22px)] max-w-md`}
            >
              <div className="w-full h-56 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-xl mb-6 flex items-center justify-center group-hover:from-blue-600/20 group-hover:to-indigo-600/20 transition-all duration-500">
                <Globe className="w-20 h-20 text-blue-500/50 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-400 text-center">
                Real Estate & Staging Platform
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed text-center">
                Modern, high-speed architecture for real estate professionals.
                Optimized for performance and user experience.
              </p>
            </motion.div>

            {/* Project 2 - Hover: Indigo */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-indigo-500/50 p-8 group w-full md:w-[calc(33.333%-22px)] max-w-md`}
            >
              <div className="w-full h-56 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-xl mb-6 flex items-center justify-center group-hover:from-indigo-600/20 group-hover:to-purple-600/20 transition-all duration-500">
                <Cpu className="w-20 h-20 text-indigo-500/50 group-hover:text-indigo-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-indigo-400 text-center">
                Local Business AI Overhaul
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed text-center">
                Before/After transformation. Complete digital modernization with
                AI-powered solutions.
              </p>
            </motion.div>

            {/* Project 3 - Hover: Purple */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              className={`${baseCard} hover:border-purple-500/50 p-8 group w-full md:w-[calc(33.333%-22px)] max-w-md`}
            >
              <div className="w-full h-56 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl mb-6 flex items-center justify-center group-hover:from-purple-600/20 group-hover:to-pink-600/20 transition-all duration-500">
                <Brain className="w-20 h-20 text-purple-500/50 group-hover:text-purple-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-400 text-center">
                Stoic AI Agent
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed text-center">
                Philosophy chatbot using RAG. Intelligent conversational AI for
                philosophical discourse.
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
            Get In <span className="text-blue-500">Touch</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className={`${baseCard} hover:border-blue-500/30 p-8 sm:p-12`}
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
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  placeholder="Your name"
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
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-zinc-400 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50 transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 flex items-center justify-center gap-2 mt-8 mb-4"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>

            {/* Social Links */}
            <div style={{ marginTop: '3rem', paddingTop: '1rem' }}>
              <div className="flex justify-center gap-6">
                <a
                  href="https://linkedin.com"
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
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-zinc-900/40 rounded-xl flex items-center justify-center border border-zinc-800 hover:border-blue-400/50 hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-1"
                  aria-label="Twitter/X"
                >
                  <Twitter className="w-6 h-6 text-zinc-400 hover:text-blue-400 transition-colors" />
                </a>
                <a
                  href="mailto: alejandriosity@gmail.com"
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
            Designed & Engineered by{" "}
            <span className="text-blue-500 font-semibold">
              Alejandro Fernandez
            </span>
            . 2025.
          </p>
        </div>
      </footer>
    </main>
  );
}