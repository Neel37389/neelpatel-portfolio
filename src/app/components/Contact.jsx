"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className=" relative min-h-screen flex items-center justify-center px-8"
    >
      <div className="max-w-2xl w-full space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-(--foreground)]"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-(--muted)] leading-relaxed"
        >
          I'm currently looking for junior frontend or web developer roles. If
          you have an opportunity or just want to connect, feel free to reach
          out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex gap-4"
        >
          <a
            href="mailto:neelp060@gmail.com"
            className="px-6 py-2 rounded-full bg-(--accent)] text-white text-sm font-medium hover:opacity-80 transition-opacity"
          >
            Email Me
          </a>
          <a
            href="https://github.com/Neel37389"
            target="_blank"
            className="px-6 py-2 rounded-full border border-(--muted)] text-(--muted)] text-sm font-medium hover:border-white hover:text-white transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/neelpatel-dev/"
            target="_blank"
            className="px-6 py-2 rounded-full border border-(--muted)] text-(--muted)] text-sm font-medium hover:border-white hover:text-white transition-colors"
          >
            LinkeDin
          </a>
        </motion.div>
      </div>

      <footer className="absolute bottom-4 text-sm text-(--muted)]">
        © 2026 Neel Patel
      </footer>
    </section>
  );
}
