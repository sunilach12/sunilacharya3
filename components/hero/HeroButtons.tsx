"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-8">

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#contact"
        className="px-7 py-4 rounded-xl bg-cyan-500 text-black font-bold shadow-lg shadow-cyan-500/30"
      >
        Hire Me
      </motion.a>

      <motion.a
        whileHover={{
  scale: 1.08,
  y: -5,
}}
       whileTap={{ scale: 0.92 }}
        href="/resume.pdf"
        className="px-7 py-4 rounded-xl border border-cyan-500 text-cyan-400 font-semibold flex items-center gap-2"
      >
        <Download size={18} />
        Resume
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href="#contact"
        className="px-7 py-4 rounded-xl border border-white/20 text-white flex items-center gap-2"
      >
        <Mail size={18} />
        Contact
      </motion.a>

    </div>
  );
}