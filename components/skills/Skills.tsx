"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";

const skills = [
  { name: "Python", level: 10, color: "bg-yellow-400" },
  { name: "Machine Learning", level: 0, color: "bg-green-500" },
  { name: "Artificial Intelligence", level: 0, color: "bg-purple-500" },
  { name: "Data Science", level: 0, color: "bg-blue-500" },
  { name: "SQL / MySQL", level: 0, color: "bg-cyan-500" },
  { name: "React.js", level: 0, color: "bg-sky-500" },
  { name: "Next.js", level: 0, color: "bg-gray-300" },
  { name: "JavaScript", level: 10, color: "bg-yellow-500" },
  { name: "TypeScript", level: 10, color: "bg-blue-600" },
  { name: "HTML5", level: 50, color: "bg-orange-500" },
  { name: "CSS3 / Tailwind CSS", level: 18, color: "bg-cyan-400" },
  { name: "Git & GitHub", level: 85, color: "bg-red-500" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <p className="text-cyan-400 font-semibold tracking-widest">
            MY SKILLS
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Technologies I Use
          </h2>

          <p className="mt-6 text-gray-400 max-w-3xl mx-auto">
            I continuously improve my programming, AI,
            machine learning and web development skills by
            building real-world projects and learning modern
            technologies.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mt-16">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >

              <GlassCard className="p-6">

                <div className="flex justify-between mb-3">

                  <span className="font-semibold text-lg">
                    {skill.name}
                  </span>

                  <span className="text-cyan-400">
                    {skill.level}%
                  </span>

                </div>

                <div className="h-3 rounded-full bg-white/10 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${skill.level}%`,
                    }}
                    transition={{
                      duration: 1.2,
                      delay: 0.2,
                    }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full ${skill.color}`}
                  />

                </div>

              </GlassCard>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}