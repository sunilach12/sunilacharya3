"use client";

import { motion } from "framer-motion";

export const categories = [
  "All",
  "AI",
  "Web",
  "Python",
  "Data Science",
];

type Props = {
  selected: string;
  onChange: (category: string) => void;
};

export default function ProjectFilters({
  selected,
  onChange,
}: Props) {
  return (
    <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
      {categories.map((category) => (
        <motion.button
          key={category}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onChange(category)}
          className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
            selected === category
              ? "bg-cyan-400 text-black shadow-[0_0_25px_rgba(34,211,238,0.5)]"
              : "border border-cyan-500/20 bg-white/5 text-gray-300 hover:border-cyan-400 hover:bg-cyan-500/10"
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
}