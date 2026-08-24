"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  GraduationCap,
  Brain,
  Sparkles,
} from "lucide-react";

export default function AboutIntro() {
  return (
    <div className="grid items-center gap-20 lg:grid-cols-2">

      {/* LEFT */}

      <motion.div
        initial={{
          opacity: 0,
          x: -80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
        className="flex justify-center"
      >
        <div className="relative">

          {/* Glow */}

          <div className="absolute inset-0 rounded-[40px] bg-cyan-500/20 blur-[100px]" />

          {/* Border */}

          <div className="relative rounded-[40px] border border-cyan-500/20 bg-white/5 p-3 backdrop-blur-xl">

            <Image
              src="/profile.png"
              alt="Sunil Acharya"
              width={450}
              height={550}
              priority
              className="rounded-[32px] object-cover"
            />

          </div>

        </div>
      </motion.div>

      {/* RIGHT */}

      <motion.div
        initial={{
          opacity: 0,
          x: 80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
      >

        <p className="mb-4 uppercase tracking-[0.4em] text-cyan-400 font-semibold">
          About Me
        </p>

        <h2 className="text-5xl font-black leading-tight">

          Passionate About

          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">

            Artificial Intelligence

          </span>

        </h2>

        <p className="mt-8 text-lg leading-9 text-gray-300">

          Hello! I'm

          <span className="font-bold text-white">
            {" "}Sunil Acharya
          </span>

          , a Computer Engineering student from Nepal who enjoys
          transforming ideas into intelligent software.

        </p>

        <p className="mt-6 text-lg leading-9 text-gray-300">

          My interests include Artificial Intelligence,
          Machine Learning, Data Science,
          Full Stack Development,
          and solving practical problems through technology.

          Every project I build teaches me something new,
          and I believe consistent learning is the key
          to becoming a great engineer.

        </p>

        {/* Cards */}

        <div className="mt-10 grid gap-5">

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5 backdrop-blur-xl">

            <div className="flex items-center gap-4">

              <MapPin className="text-cyan-400" />

              <div>

                <h3 className="font-semibold">

                  Location

                </h3>

                <p className="text-gray-400">

                  Nepal 🇳🇵

                </p>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5 backdrop-blur-xl">

            <div className="flex items-center gap-4">

              <GraduationCap className="text-cyan-400" />

              <div>

                <h3 className="font-semibold">

                  Education

                </h3>

                <p className="text-gray-400">

                  Bachelor's in Computer Engineering

                </p>

              </div>

            </div>

          </div>

          <div className="rounded-2xl border border-cyan-500/20 bg-white/5 p-5 backdrop-blur-xl">

            <div className="flex items-center gap-4">

              <Brain className="text-cyan-400" />

              <div>

                <h3 className="font-semibold">

                  Current Focus

                </h3>

                <p className="text-gray-400">

                  AI Engineering • Machine Learning • Data Science

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Badge */}

        <motion.div

          whileHover={{
            scale: 1.05,
          }}

          className="mt-10 inline-flex items-center gap-3 rounded-full border border-green-500/30 bg-green-500/10 px-6 py-4"

        >

          <Sparkles className="text-green-400" />

          <span className="font-semibold text-green-300">

            Open to Learning, Collaboration & Opportunities

          </span>

        </motion.div>

      </motion.div>

    </div>
  );
}