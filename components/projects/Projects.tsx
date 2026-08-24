"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import FeaturedProject from "./FeaturedProject";
import ProjectFilters from "./ProjectFilters";
import ProjectGrid from "./ProjectGrid";
import ProjectModal from "./ProjectModal";
import { projects, Project } from "./ProjectData";

export default function Projects() {
  const [selected, setSelected] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featuredProject = projects.find((p) => p.featured);

  const filteredProjects = useMemo(() => {
    if (selected === "All") {
      return projects.filter((p) => !p.featured);
    }

    return projects.filter(
      (p) =>
        !p.featured &&
        p.category === selected
    );
  }, [selected]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-32"
    >
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute bottom-20 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-4 uppercase tracking-[0.35em] text-cyan-400">
            My Work
          </p>

          <h2 className="text-5xl font-black">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            A collection of projects showcasing AI, web development,
            Python, and data science.
          </p>
        </motion.div>

        {featuredProject && (
          <div className="mb-24">
            <FeaturedProject project={featuredProject} />
          </div>
        )}

        <ProjectFilters
          selected={selected}
          onChange={setSelected}
        />

        <ProjectGrid
          projects={filteredProjects}
          onOpen={setSelectedProject}
        />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}