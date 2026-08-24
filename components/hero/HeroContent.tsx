"use client";

import { motion } from "framer-motion";

import TypingText from "./TypingText";
import HeroButtons from "./HeroButtons";
import SocialIcons from "./SocialIcons";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="space-y-6"
    >
      <p className="text-cyan-400 font-semibold tracking-widest uppercase">
        👋 Welcome to my portfolio
      </p>

      <h1 className="text-5xl md:text-7xl font-black leading-tight">
        Hi, I'm
        <br />
        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          Sunil Acharya
        </span>
      </h1>

      <TypingText />

      <p className="max-w-xl text-lg text-gray-300 leading-8">
        AI Engineering student passionate about Machine Learning,
        Data Science, Full Stack Development, and building
        intelligent applications that solve real-world problems.
      </p>

      <HeroButtons />

      <SocialIcons />

      <HeroStats />
    </motion.div>
  );
}