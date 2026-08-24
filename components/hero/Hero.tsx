"use client";

import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import FloatingElements from "./FloatingElements";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center bg-gradient-to-b from-slate-950 via-slate-900 to-black"
    >
      {/* Floating Background */}
      <FloatingElements />

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[160px]" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-20 px-6 py-24 lg:grid-cols-2">

        <HeroContent />

        <HeroImage />

      </div>

      <ScrollIndicator />
    </section>
  );
}