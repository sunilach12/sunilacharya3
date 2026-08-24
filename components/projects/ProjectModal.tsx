"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Code } from "lucide-react";
import { Project } from "./ProjectData";
import TechBadge from "./TechBadge";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Background */}

          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed left-1/2 top-1/2 z-50 w-[95%] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900"
          >
            {/* Close */}

            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-10 rounded-full bg-white/10 p-2 hover:bg-white/20"
            >
              <X />
            </button>

            {/* Image */}

            <div className="relative h-80">

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />

            </div>

            <div className="space-y-6 p-8">

              <h2 className="text-4xl font-bold">
                {project.title}
              </h2>

              <p className="leading-8 text-gray-300">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <TechBadge
                    key={tech}
                    tech={tech}
                  />
                ))}
              </div>

              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl border border-cyan-500/20 px-6 py-3 hover:bg-cyan-500/10"
                >
                  <Code size={18} />
                  Source Code
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-black"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

              </div>

            </div>

          </motion.div>

        </>
      )}
    </AnimatePresence>
  );
}