"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaDatabase,
  FaBrain,
} from "react-icons/fa";

const icons = [
  {
    Icon: FaPython,
    top: "5%",
    left: "45%",
    color: "#FFD43B",
    delay: 0,
  },
  {
    Icon: FaReact,
    top: "35%",
    right: "0%",
    color: "#61DBFB",
    delay: 1,
  },
  {
    Icon: FaDatabase,
    bottom: "10%",
    left: "10%",
    color: "#38BDF8",
    delay: 2,
  },
  {
    Icon: FaBrain,
    bottom: "20%",
    right: "15%",
    color: "#A855F7",
    delay: 3,
  },
];

export default function FloatingIcons() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {icons.map(({ Icon, delay, ...position }, index) => (
        <motion.div
          key={index}
          animate={{
            y: [-12, 12, -12],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay,
          }}
          style={position}
          className="absolute text-5xl"
        >
          <Icon color={position.color as string} />
        </motion.div>
      ))}
    </div>
  );
}