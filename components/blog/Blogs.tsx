"use client";

import { motion } from "framer-motion";
import GlassCard from "@/components/ui/GlassCard";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    title: "My AI Engineering Journey",
    date: "July 2026",
    readTime: "5 min read",
    category: "AI",
    description:
      "How I started learning Artificial Intelligence, Machine Learning, and Data Science from scratch.",
  },
  {
    id: 2,
    title: "Building My Portfolio with Next.js",
    date: "July 2026",
    readTime: "6 min read",
    category: "Web Development",
    description:
      "Creating a modern portfolio using Next.js, Tailwind CSS, Framer Motion, and TypeScript.",
  },
  {
    id: 3,
    title: "Python for AI Beginners",
    date: "Coming Soon",
    readTime: "8 min read",
    category: "Python",
    description:
      "The Python topics every AI Engineer should master before moving to Machine Learning.",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 font-semibold tracking-widest">
            MY BLOGS
          </p>

          <h2 className="mt-4 text-5xl font-bold">
            Latest Articles
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400">
            I enjoy sharing my learning journey, programming
            experiences, AI discoveries, and software development
            knowledge through technical blogs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mt-16">

          {blogs.map((blog, index) => (

            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >

              <GlassCard className="overflow-hidden h-full">

                {/* Image Placeholder */}

                <div className="h-56 bg-gradient-to-br from-cyan-500 via-blue-600 to-purple-700 flex items-center justify-center text-7xl">
                  💻
                </div>

                <div className="p-8">
                  <motion.div data-ai-cursor></motion.div>

                  <span className="rounded-full bg-cyan-500/20 px-4 py-2 text-sm text-cyan-300">
                    {blog.category}
                  </span>

                  <h3 className="mt-6 text-2xl font-bold">
                    {blog.title}
                  </h3>

                  <p className="mt-5 text-gray-400 leading-7">
                    {blog.description}
                  </p>

                  <div className="mt-8 flex justify-between text-gray-400 text-sm">

                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {blog.date}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {blog.readTime}
                    </div>

                  </div>

                  <button
                    className="mt-8 flex items-center gap-2 font-semibold text-cyan-400 hover:gap-4 transition-all"
                  >
                    Read More
                    <ArrowRight size={18} />
                  </button>

                </div>

              </GlassCard>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}