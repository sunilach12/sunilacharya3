"use client";

import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Project } from "./ProjectData";

type Props = {
  projects: Project[];
  onOpen: (project: Project) => void;
};

export default function ProjectGrid({
  projects,
}: Props) {
  return (
    <motion.div
      layout
      className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
    >
      <AnimatePresence>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}