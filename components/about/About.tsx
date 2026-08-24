"use client";

import { motion } from "framer-motion";

import AboutIntro from "./AboutIntro";
import Timeline from "./Timeline";
import Education from "./Education";
import Achievements from "./Achievements";
import Goals from "./Goals";
import Milestones from "./Milestions";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-36 px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <AboutIntro />
        </motion.div>

        <Timeline />

        <Education />

        <Achievements />

        <Goals />

        <Milestones />

      </div>
    </section>
  );
}