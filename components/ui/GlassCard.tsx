"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        rounded-3xl
        border border-cyan-400/20
        bg-white/5
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(34,211,238,0.15)]
        hover:border-cyan-400/60
        hover:shadow-[0_0_60px_rgba(34,211,238,0.35)]
        transition-all
        duration-500
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}