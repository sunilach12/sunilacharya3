"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 12, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
      }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
    >
      <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
        Scroll
      </span>

      <ChevronDown
        size={32}
        className="mt-2 text-cyan-400"
      />
    </motion.div>
  );
}