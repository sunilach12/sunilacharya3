"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaDatabase,
  FaBrain,
  FaRobot,
  FaCode,
  FaRocket,
  FaFlagCheckered,
} from "react-icons/fa";

const roadmap = [
  {
    icon: <FaPython />,
    title: "Master Python",
    year: "Completed",
    description:
      "Build a strong programming foundation and write clean, maintainable code.",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <FaDatabase />,
    title: "Data Science",
    year: "In Progress",
    description:
      "Develop expertise in NumPy, Pandas, SQL, visualization, and data analysis.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <FaBrain />,
    title: "Machine Learning",
    year: "Current Focus",
    description:
      "Learn supervised and unsupervised learning by building practical projects.",
    color: "from-green-500 to-cyan-500",
  },
  {
    icon: <FaRobot />,
    title: "Deep Learning & Generative AI",
    year: "Next Step",
    description:
      "Explore neural networks, transformers, LLMs, and modern AI technologies.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaCode />,
    title: "AI Engineering",
    year: "Goal",
    description:
      "Design and deploy scalable AI applications with modern software engineering practices.",
    color: "from-indigo-500 to-cyan-500",
  },
  {
    icon: <FaFlagCheckered />,
    title: "Hackathons",
    year: "Future",
    description:
      "Participate in national and international hackathons while building innovative solutions.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FaRocket />,
    title: "AI Startup",
    year: "Dream",
    description:
      "Launch an AI company focused on solving real-world problems through intelligent products.",
    color: "from-cyan-500 to-violet-500",
  },
];

export default function Goals() {
  return (
    <section className="py-24">

      {/* Heading */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <p className="mb-3 uppercase tracking-[0.35em] text-cyan-400">
          Career Roadmap
        </p>

        <h2 className="text-5xl font-black">
          My
          <span className="text-cyan-400"> AI Journey</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          Every step brings me closer to becoming a professional
          AI Engineer capable of building intelligent products that
          create real-world impact.
        </p>

      </motion.div>

      {/* Timeline */}

      <div className="relative mx-auto max-w-5xl">

        <div className="absolute left-6 top-0 h-full w-[3px] rounded-full bg-cyan-500/30 md:left-1/2 md:-translate-x-1/2" />

        {roadmap.map((goal, index) => (

          <motion.div
            key={goal.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
            className={`relative mb-16 flex ${
              index % 2 === 0
                ? "md:flex-row"
                : "md:flex-row-reverse"
            } items-center`}
          >

            {/* Card */}

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="ml-20 w-full md:ml-0 md:w-5/12 rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all"
            >

              <div
                className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${goal.color} text-4xl text-white`}
              >
                {goal.icon}
              </div>

              <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                {goal.year}
              </span>

              <h3 className="mt-5 text-3xl font-bold">
                {goal.title}
              </h3>

              <p className="mt-5 leading-8 text-gray-400">
                {goal.description}
              </p>

            </motion.div>

            {/* Dot */}

            <div className="absolute left-6 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-900 bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.8)] md:left-1/2" />

          </motion.div>

        ))}

      </div>

    </section>
  );
}