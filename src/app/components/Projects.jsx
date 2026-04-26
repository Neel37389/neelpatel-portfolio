"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AI News Dashboard",
    description:
      "A full stack news aggregator with AI powered search, saved articles, and user authentication.",
    tags: [
      "Next.js",
      "Supabase",
      "Tailwind",
      "REST API",
      "Shadcn UI",
      "Jest",
      "Mews API",
      "OpenAI API",
    ],
    liveUrl: "https://ai-news-intelligence-dashboard.vercel.app",
    githubUrl:
      "https://github.com/Neel37389/ai-news-intelligence-dashboard.git",
  },
  {
    id: 2,
    title: "GitHub Analyzer",
    description:
      "An AI powered tool that scores and gives improvement points on all your GitHub repositories.",
    tags: ["React.js", "Tailwind", "OpenAI API", "GitHub API"],
    liveUrl: "https://ai-resume-builder-five-nu.vercel.app",
    githubUrl: "https://github.com/Neel37389/AI-Resume-Builder.git",
  },
];

export default function Projects() {
  return (
    <section
      id="project"
      className="min-h-screen flex items-center justify-center px-8"
    >
      <div className="max-w-4xl w-full space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-(--foreground)]"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:gird-cols-2 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-[#111111] border border-(--muted)] rounded-xl p-6 space-y-4 hover:border-(--accent)] transition-colors duration-300"
            >
              <h3 className="text-lg font-semibold text-(-foreground)">
                {project.title}
              </h3>
              <p className="text-sm text-(--muted)] leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full border border-(--accent)] text-(--accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  className="text-sm px-4 py-2 rounded-full border border-(--muted)] text-(--muted)]  hover:border-white hover:text-white hover:bg-(--muted) transition-colors"
                >
                  Live
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="text-sm px-4 py-2 rounded-full border border-(--muted)] text-(--muted)] hover:border-white hover:text-white hover:bg-(--muted) transition-colors"
                >
                  GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
