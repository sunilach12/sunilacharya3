"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Brain, Clock } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "20+",
    title: "Certificates",
  },
  {
    icon: Brain,
    value: "8+",
    title: "AI Courses",
  },
  {
    icon: BookOpen,
    value: "15+",
    title: "Learning Platforms",
  },
  {
    icon: Clock,
    value: "1000+",
    title: "Learning Hours",
  },
];

export default function CertificateStats() {
  return (
    <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
            viewport={{ once: true }}
            className="rounded-3xl border border-cyan-500/20 bg-slate-900/70 p-8 text-center backdrop-blur-lg"
          >
            <Icon
              size={40}
              className="mx-auto mb-4 text-cyan-400"
            />

            <h3 className="text-4xl font-black text-white">
              {item.value}
            </h3>

            <p className="mt-2 text-gray-400">
              {item.title}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}