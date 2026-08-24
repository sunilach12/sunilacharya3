"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#020617]"
        >
          <div className="text-center">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{
                scale: [0.5, 1.1, 1],
                rotate: [0, 360],
              }}
              transition={{
                duration: 1.5,
              }}
              className="mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border-2 border-cyan-400 bg-cyan-500/10 shadow-[0_0_60px_rgba(34,211,238,0.4)]"
            >
              <h1 className="text-4xl font-black text-cyan-400">
                SA
              </h1>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-4xl font-black text-white"
            >
              Sunil Acharya
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-4 text-cyan-400"
            >
              Loading Portfolio...
            </motion.p>

            {/* Progress Bar */}
            <div className="mx-auto mt-10 h-2 w-72 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                }}
                className="h-full rounded-full bg-cyan-400"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}