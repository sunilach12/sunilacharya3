"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code, ExternalLink, Sparkles } from "lucide-react";

import { Project } from "./ProjectData";
import TechBadge from "./TechBadge";

type Props = {
  project: Project;
};

export default function FeaturedProject({ project }: Props) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-[40px] border border-cyan-500/20 bg-white/5 backdrop-blur-xl"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative grid gap-10 lg:grid-cols-2">

        {/* IMAGE */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="relative h-[320px] overflow-hidden lg:h-full"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition duration-700 hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

          <div className="absolute left-6 top-6 rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-black shadow-lg">
            ⭐ Featured Project
          </div>
        </motion.div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center p-8 lg:p-12">

          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-300">
            <Sparkles size={18} />
            Portfolio Highlight
          </div>

          <h2 className="text-4xl font-black lg:text-5xl">
            {project.title}
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-300">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <TechBadge
                key={tech}
                tech={tech}
              />
            ))}
          </div>

          {/* Status */}
          <div className="mt-8">
            <span
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                project.status === "Completed"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : "bg-yellow-500/20 text-yellow-300"
              }`}
            >
              {project.status}
            </span>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-cyan-400 px-7 py-4 font-semibold text-black transition hover:bg-cyan-300"
            >
              <div className="flex items-center gap-2">
                <ExternalLink size={18} />
                Live Demo
              </div>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-cyan-500/30 px-7 py-4 transition hover:bg-cyan-500/10"
            >
              <div className="flex items-center gap-2">
                <Code size={18} />
                GitHub
              </div>
            </a>

          </div>

        </div>
      </div>
    </motion.section>
  );
}