"use client";

import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaCertificate,
  FaGithub,
  FaLaptopCode,
  FaRobot,
  FaAward,
} from "react-icons/fa";

const achievements = [
  {
    icon: <FaProjectDiagram />,
    title: "Projects Built",
    value: "20+",
    description:
      "Developed web applications, Python projects, data analysis projects, and AI experiments.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <FaCertificate />,
    title: "Certificates",
    value: "10+",
    description:
      "Completed online courses covering Python, SQL, Machine Learning, and Web Development.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaGithub />,
    title: "GitHub Journey",
    value: "Growing",
    description:
      "Continuously publishing projects, improving code quality, and building a stronger open-source portfolio.",
    color: "from-green-500 to-cyan-500",
  },
  {
    icon: <FaLaptopCode />,
    title: "Technologies",
    value: "15+",
    description:
      "Experience with Python, Next.js, React, Tailwind CSS, SQL, Git, NumPy, Pandas, and more.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FaRobot />,
    title: "AI Learning",
    value: "Every Day",
    description:
      "Actively learning Machine Learning, Deep Learning, AI Engineering, and modern AI tools.",
    color: "from-indigo-500 to-cyan-500",
  },
  {
    icon: <FaAward />,
    title: "Future Goals",
    value: "∞",
    description:
      "Participate in hackathons, contribute to open source, and build AI products that solve real-world problems.",
    color: "from-yellow-500 to-orange-500",
  },
];

export default function Achievements() {
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
          Achievements
        </p>

        <h2 className="text-5xl font-black">
          What I Have
          <span className="text-cyan-400"> Accomplished</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          Every project, certificate, and new skill is another step
          toward becoming a professional AI Engineer.
        </p>

      </motion.div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

        {achievements.map((item, index) => (

          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]"
          >

            {/* Glow */}

            <div
              className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-3xl`}
            />

            {/* Icon */}

            <div
              className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-4xl text-white shadow-lg transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}
            >
              {item.icon}
            </div>

            {/* Value */}

            <h3 className="text-4xl font-black text-cyan-400">
              {item.value}
            </h3>

            {/* Title */}

            <h4 className="mt-3 text-2xl font-bold">
              {item.title}
            </h4>

            {/* Description */}

            <p className="mt-5 leading-8 text-gray-400">
              {item.description}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}