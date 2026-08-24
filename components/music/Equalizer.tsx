"use client";

import { motion } from "framer-motion";

type Props = {
  playing: boolean;
};

const bars = [25, 40, 18, 55, 35, 48, 28, 60];

export default function Equalizer({ playing }: Props) {
  return (
    <div className="flex h-16 items-end justify-center gap-1">
      {bars.map((height, index) => (
        <motion.div
          key={index}
          className="w-2 rounded-full bg-cyan-400"
          animate={
            playing
              ? {
                  height: [
                    height,
                    height + 20,
                    height - 10,
                    height + 15,
                    height,
                  ],
                }
              : {
                  height: 8,
                }
          }
          transition={{
            repeat: Infinity,
            duration: 0.8,
            delay: index * 0.08,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}