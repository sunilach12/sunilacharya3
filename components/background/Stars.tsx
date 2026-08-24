"use client";

export default function Stars() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute top-[10%] left-[20%] h-1 w-1 rounded-full bg-white animate-pulse" />
      <div className="absolute top-[25%] left-[70%] h-2 w-2 rounded-full bg-cyan-300 animate-ping" />
      <div className="absolute top-[55%] left-[35%] h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
      <div className="absolute top-[80%] left-[80%] h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
      <div className="absolute top-[45%] left-[90%] h-1 w-1 rounded-full bg-white animate-pulse" />
    </div>
  );
}