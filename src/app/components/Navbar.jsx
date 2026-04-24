"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 w-full z-50">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 bg-(--background)]"
      >
        <span className="font-bold text-xl text-(--foreground)]">NP</span>
        <div className="hidden md:flex gap-8">
          {["hero", "about", "project", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-sm capitalize text-[var(--muted)] hover:text-[var(--foreground)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {section}
            </a>
          ))}
        </div>
        <button
          className="md:hidden flex flex-col gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </motion.nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden flex flex-col items-center gap-6 py-6 border-b border-white/10 backdrop-blur-md bg-black/80"
        >
          {["hero", "about", "project", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => setIsOpen(false)}
              className="text-sm capitalize text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-300"
            >
              {section}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
}
