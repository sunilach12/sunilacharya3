"use client";

import { motion } from "framer-motion";
import {
  FaProjectDiagram,
  FaCertificate,
  FaCode,
  FaBrain,
} from "react-icons/fa";

const stats = [
  {
    number: "20+",
    title: "Projects",
    icon: <FaProjectDiagram />,
  },
  {
    number: "10+",
    title: "Certificates",
    icon: <FaCertificate />,
  },
  {
    number: "2+",
    title: "Years Learning",
    icon: <FaCode />,
  },
  {
    number: "∞",
    title: "Passion",
    icon: <FaBrain />,
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-5 mt-12 max-w-xl">

      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.15,
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            y: -8,
          }}
          className="
            group
            rounded-2xl
            border
            border-cyan-500/20
            bg-white/5
            backdrop-blur-xl
            p-6
            transition-all
            duration-300
            hover:border-cyan-400
            hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
          "
        >
          <div className="flex items-center justify-between">

            <h2 className="text-3xl font-black text-cyan-400">
              {item.number}
            </h2>

            <div className="text-2xl text-cyan-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-125">
              {item.icon}
            </div>

          </div>

          <p className="mt-3 text-gray-300 font-medium tracking-wide">
            {item.title}
          </p>
        </motion.div>
      ))}

    </div>
  );
}