"use client";

import { motion } from "framer-motion";
import {
  FaUniversity,
  FaLaptopCode,
  FaBrain,
  FaBookOpen,
} from "react-icons/fa";

const education = [
  {
    icon: <FaUniversity />,
    title: "Bachelor of Computer Engineering",
    school: "Tribhuvan University",
    duration: "2023 - Present",
    description:
      "Learning computer engineering fundamentals, software development, networking, operating systems, databases, and artificial intelligence.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <FaLaptopCode />,
    title: "Self Learning",
    school: "Online Platforms",
    duration: "2024 - Present",
    description:
      "Studying Python, NumPy, Pandas, SQL, Git, GitHub, Next.js, React, Tailwind CSS, and modern web development.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaBrain />,
    title: "Artificial Intelligence",
    school: "Independent Study",
    duration: "2025 - Present",
    description:
      "Currently learning Machine Learning, Deep Learning, Data Science, and AI Engineering through projects and books.",
    color: "from-emerald-500 to-cyan-500",
  },
];
export default function Education() {
  return (
    <section className="py-24">

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <p className="mb-3 uppercase tracking-[0.35em] text-cyan-400">
          Education
        </p>

        <h2 className="text-5xl font-black">
          Learning
          <span className="text-cyan-400"> Journey</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          Every course and every project brings me closer to becoming
          a professional AI Engineer.
        </p>

      </motion.div>

      <div className="grid gap-8 lg:grid-cols-3">

        {education.map((item, index) => (

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
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]"
          >

            {/* Background Glow */}

            <div
              className={`absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-3xl`}
            />

            {/* Icon */}

            <div
              className={`mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-4xl text-white shadow-lg`}
            >
              {item.icon}
            </div>

            <h3 className="text-2xl font-bold">

              {item.title}

            </h3>

            <p className="mt-2 text-cyan-400">

              {item.school}

            </p>

            <span className="mt-2 inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">

              {item.duration}

            </span>

            <p className="mt-6 leading-8 text-gray-400">

              {item.description}

            </p>

            <div className="mt-8 flex items-center gap-3 text-cyan-400">

              <FaBookOpen />

              <span>Continuous Learning</span>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}