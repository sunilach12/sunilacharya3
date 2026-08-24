"use client";

import { Typewriter } from "react-simple-typewriter";

export default function TypingText() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold text-cyan-400 h-14">
      <Typewriter
        words={[
          "AI Engineer",
          "Machine Learning Engineer",
          "Data Scientist",
          "Python Developer",
          "Full Stack Developer",
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={40}
        delaySpeed={1800}
      />
    </h2>
  );
}