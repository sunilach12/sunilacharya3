"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiTensorflow,
  SiMysql,
  SiNumpy,
} from "react-icons/si";

const icons = [
  { icon: <FaPython />, color: "text-yellow-400", angle: 0 },
  { icon: <FaReact />, color: "text-cyan-400", angle: 45 },
  { icon: <SiTensorflow />, color: "text-orange-500", angle: 90 },
  { icon: <FaNodeJs />, color: "text-green-500", angle: 135 },
  { icon: <FaDocker />, color: "text-blue-500", angle: 180 },
  { icon: <FaGitAlt />, color: "text-red-500", angle: 225 },
  { icon: <SiMysql />, color: "text-blue-400", angle: 270 },
  { icon: <SiNumpy />, color: "text-cyan-300", angle: 315 },
];

export default function TechOrbit() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute w-[420px] h-[420px]"
    >
      {icons.map((item, index) => (
        <div
          key={index}
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `rotate(${item.angle}deg) translateY(-190px)`,
            transformOrigin: "center",
          }}
        >
          <motion.div
            whileHover={{
              scale: 1.4,
            }}
            className={`text-4xl ${item.color}`}
          >
            {item.icon}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}