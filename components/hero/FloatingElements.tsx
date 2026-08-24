"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

function seededRandom(seed: number) {
  const value = Math.sin(seed) * 10000;
  return value - Math.floor(value);
}

export default function FloatingElements() {
  const particles = useMemo(
    () =>
      Array.from({ length: 25 }, (_, index) => ({
        width: seededRandom(index * 7 + 1) * 12 + 4,
        height: seededRandom(index * 7 + 2) * 12 + 4,
        left: seededRandom(index * 7 + 3) * 100,
        top: seededRandom(index * 7 + 4) * 100,
        duration: seededRandom(index * 7 + 5) * 8 + 5,
        delay: seededRandom(index * 7 + 6) * 5,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-cyan-400/20 blur-sm"
          style={{
            width: `${particle.width.toFixed(4)}px`,
            height: `${particle.height.toFixed(4)}px`,
            left: `${particle.left.toFixed(4)}%`,
            top: `${particle.top.toFixed(4)}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}