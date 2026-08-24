"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code, ExternalLink, ArrowRight } from "lucide-react";

import { Project } from "./ProjectData";
import TechBadge from "./TechBadge";

type Props = {
  project: Project;
  onOpen?: (project: Project) => void;
};

export default function ProjectCard({
  project,
  onOpen,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -12,
      }}
      transition={{
        duration: 0.3,
      }}
      className="group overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_45px_rgba(34,211,238,0.25)]"
    >
      {/* IMAGE */}

      <div className="relative h-64 overflow-hidden">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

        {/* Status */}

        <div className="absolute left-5 top-5">

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

        {/* Featured */}

        {project.featured && (

          <div className="absolute right-5 top-5 rounded-full bg-cyan-400 px-4 py-2 text-sm font-bold text-black">

            ⭐ Featured

          </div>

        )}

      </div>

      {/* CONTENT */}

      <div className="space-y-6 p-7">

        <div>

          <h3 className="text-2xl font-bold">

            {project.title}

          </h3>

          <p className="mt-4 leading-8 text-gray-400">

            {project.description}

          </p>

        </div>

        {/* Tech */}

        <div className="flex flex-wrap gap-3">

          {project.technologies.map((tech) => (

            <TechBadge
              key={tech}
              tech={tech}
            />

          ))}

        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4 pt-3">

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-cyan-500/30 px-5 py-3 transition hover:bg-cyan-500/20"
          >
            <Code size={18} />

            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            <ExternalLink size={18} />

            Live Demo
          </a>

          <button
            onClick={() => onOpen?.(project)}
            className="flex items-center gap-2 text-cyan-400 transition hover:gap-4"
          >
            Details

            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </motion.div>
  );
}