"use client";

export default function Particles() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute top-10 left-10 h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
      <div className="absolute top-40 right-20 h-3 w-3 rounded-full bg-blue-400 animate-pulse" />
      <div className="absolute bottom-20 left-1/3 h-2 w-2 rounded-full bg-white animate-ping" />
      <div className="absolute bottom-32 right-1/4 h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
      <div className="absolute top-1/2 left-1/2 h-3 w-3 rounded-full bg-cyan-500 animate-ping" />
    </div>
  );
}