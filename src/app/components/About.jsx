"use client";

import { motion } from "framer-motion";

const skills = [
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "REST APIs",
  "Git",
  "Jest",
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-8"
    >
      <div className="max-w-2xl w-full space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-(--foreground)]"
        >
          About
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-(--muted)] leading-relaxed"
        >
          I'm a frontend developer with 5 years of coding experience, a BS in
          Information Science and Technology from Temple University, and an
          Associate's degree in Computer Science from Bucks County Community
          College. I build modern, AI-powered web applications and I'm currently
          looking for a junior frontend or web developer role where I can keep
          growing and shipping real products.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-sm rounded-full border border-(--muted)] text-(--muted)]"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
