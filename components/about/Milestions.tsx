"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaCode,
  FaProjectDiagram,
  FaCertificate,
  FaGithub,
  FaBrain,
  FaRocket,
} from "react-icons/fa";

const milestones = [
  {
    icon: <FaCode />,
    number: 1200,
    suffix: "+",
    title: "Coding Hours",
    description: "Dedicated hours spent learning, coding, and building projects.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: <FaProjectDiagram />,
    number: 25,
    suffix: "+",
    title: "Projects",
    description: "Personal, academic, and AI-powered applications.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaCertificate />,
    number: 15,
    suffix: "+",
    title: "Certificates",
    description: "Courses completed across programming and AI.",
    color: "from-emerald-500 to-cyan-500",
  },
  {
    icon: <FaGithub />,
    number: 200,
    suffix: "+",
    title: "GitHub Commits",
    description: "Building projects and improving consistently.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FaBrain />,
    number: 10,
    suffix: "+",
    title: "AI Projects",
    description: "Machine Learning, Data Science and AI experiments.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <FaRocket />,
    number: 100,
    suffix: "%",
    title: "Motivation",
    description: "Always learning and always improving.",
    color: "from-cyan-500 to-violet-500",
  },
];

export default function Milestones() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section className="py-24" ref={ref}>
      {/* Heading */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20 text-center"
      >
        <p className="mb-3 uppercase tracking-[0.35em] text-cyan-400">
          Milestones
        </p>

        <h2 className="text-5xl font-black">
          Numbers That
          <span className="text-cyan-400"> Define My Journey</span>
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
          Every milestone represents continuous learning, consistency,
          and the passion to become a world-class AI Engineer.
        </p>
      </motion.div>

      {/* Cards */}

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {milestones.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.03,
              y: -10,
            }}
            className="group relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-white/5 p-8 backdrop-blur-xl hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] transition-all"
          >
            {/* Glow */}

            <div
              className={`absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-3xl`}
            />

            {/* Icon */}

            <div
              className={`mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color} text-4xl text-white transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}
            >
              {item.icon}
            </div>

            {/* Counter */}

            <h3 className="text-5xl font-black text-cyan-400">
              {inView ? (
                <CountUp
                  end={item.number}
                  duration={2.5}
                  suffix={item.suffix}
                />
              ) : (
                "0"
              )}
            </h3>

            {/* Title */}

            <h4 className="mt-4 text-2xl font-bold">
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