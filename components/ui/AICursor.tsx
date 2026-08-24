"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function AICursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 35,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 35,
  });

  const [active, setActive] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 10);
      mouseY.set(e.clientY - 10);

      const target = e.target as HTMLElement;

      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setActive(!!interactive);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
        opacity: active ? 1 : 0,
      }}
      animate={{
        scale: active ? 1 : 0.5,
      }}
      transition={{
        duration: 0.15,
      }}
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
    >
      {/* Glow */}
      <div className="absolute -left-4 -top-4 w-12 h-12 rounded-full bg-cyan-400/30 blur-xl" />

      {/* Triangle */}
      <motion.div
        animate={{
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
          w-0
          h-0
          border-l-[10px]
          border-r-[10px]
          border-b-[18px]
          border-l-transparent
          border-r-transparent
          border-b-cyan-400
          drop-shadow-[0_0_20px_#22d3ee]
        "
      />
    </motion.div>
  );
}