"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TechOrbit from "./TechOrbit";

export default function HeroImage() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Outer Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-[120px]"
      />

      {/* Second Glow */}
      <motion.div
        animate={{
          scale: [1.1, 0.95, 1.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute h-[430px] w-[430px] rounded-full bg-blue-500/10 blur-[90px]"
      />

      {/* Rotating Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[370px] w-[370px] rounded-full border-2 border-dashed border-cyan-400/40"
      />

      {/* Second Ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute h-[410px] w-[410px] rounded-full border border-cyan-400/15"
      />

      {/* Profile Image */}
      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.05,
        }}
        className="
          relative
          h-[340px]
          w-[340px]
          overflow-hidden
          rounded-full
          border-4
          border-cyan-400
          shadow-[0_0_100px_rgba(34,211,238,0.45)]
        "
      >
        <Image
          src="/profile.png"
          alt="Sunil Acharya"
          fill
          priority
          className="object-cover"
        />
      </motion.div>

      {/* Orbiting Tech Icons */}
      <TechOrbit />

      {/* Floating Dots */}

      <motion.div
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="absolute left-0 top-20 h-5 w-5 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute right-0 bottom-24 h-4 w-4 rounded-full bg-blue-500 shadow-lg shadow-blue-500"
      />

      <motion.div
        animate={{
          x: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-8 right-24 h-3 w-3 rounded-full bg-white shadow-lg shadow-white"
      />

    </div>
  );
}