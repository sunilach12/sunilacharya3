"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaBrain,
  FaRocket,
  FaLaptopCode,
  FaFlagCheckered,
} from "react-icons/fa";

const timeline = [
  {
    year: "2024",
    title: "Started Programming",
    description:
      "Started learning Python and built a strong programming foundation.",
    icon: <FaPython />,
  },
  {
    year: "2025",
    title: "Data Science Journey",
    description:
      "Learned NumPy, Pandas, SQL and data visualization while working on practical projects.",
    icon: <FaDatabase />,
  },
  {
    year: "2026",
    title: "Artificial Intelligence",
    description:
      "Focused on Machine Learning, Deep Learning and building AI-powered applications.",
    icon: <FaBrain />,
  },
  {
    year: "2026",
    title: "Portfolio & Open Source",
    description:
      "Built a modern portfolio and started contributing to real-world projects.",
    icon: <FaLaptopCode />,
  },
  {
    year: "Future",
    title: "Hackathons",
    description:
      "Participate in national and international hackathons while building impactful AI solutions.",
    icon: <FaFlagCheckered />,
  },
  {
    year: "Goal",
    title: "AI Engineer",
    description:
      "Become an AI Engineer, build intelligent products and launch my own AI startup.",
    icon: <FaRocket />,
  },
];

export default function Timeline() {
  return (
    <section>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <p className="mb-3 uppercase tracking-[0.35em] text-cyan-400">
          My Journey
        </p>

        <h2 className="text-5xl font-black">
          Learning
          <span className="text-cyan-400"> Timeline</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          Every step has helped me become a better developer and brought
          me closer to my goal of becoming an AI Engineer.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-5xl">

        {/* Vertical Line */}

        <div className="absolute left-6 top-0 h-full w-[3px] rounded-full bg-cyan-500/30 lg:left-1/2 lg:-translate-x-1/2" />

        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className={`relative mb-20 flex items-center ${
              index % 2 === 0
                ? "lg:flex-row"
                : "lg:flex-row-reverse"
            }`}
          >
            {/* Card */}

            <div className="ml-20 w-full lg:ml-0 lg:w-5/12">

              <motion.div
                whileHover={{
                  scale: 1.03,
                  y: -8,
                }}
                className="rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <div className="mb-5 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 text-2xl text-cyan-400">

                    {item.icon}

                  </div>

                  <div>

                    <span className="text-sm text-cyan-400">

                      {item.year}

                    </span>

                    <h3 className="text-2xl font-bold">

                      {item.title}

                    </h3>

                  </div>

                </div>

                <p className="leading-8 text-gray-400">

                  {item.description}

                </p>

              </motion.div>

            </div>

            {/* Timeline Dot */}

            <motion.div
              whileHover={{
                scale: 1.3,
              }}
              className="absolute left-6 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-900 bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.8)] lg:left-1/2"
            />
          </motion.div>
        ))}

      </div>

    </section>
  );
}