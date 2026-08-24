"use client";

import { motion } from "framer-motion";

const memories = [
  {
    title: "My First Programming Project",
    description: "The beginning of my software development journey.",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Hackathon Preparation",
    description: "Preparing for my future AI hackathon journey.",
    video: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
];

export default function Memories() {
  return (
    <section id="memories" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-cyan-400 font-semibold text-lg">
            MEMORIES
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            My Favorite Moments
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-gray-400">
            A collection of memorable moments, learning experiences, and inspiring videos.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {memories.map((memory) => (
            <motion.div
              key={memory.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
            >
              <div className="aspect-video overflow-hidden rounded-2xl">
                <iframe
                  className="h-full w-full"
                  src={memory.video}
                  title={memory.title}
                  allowFullScreen
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {memory.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {memory.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}