"use client";

export default function Aurora() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

      <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-3xl animate-pulse" />

      <div className="absolute top-1/3 left-1/2 h-[400px] w-[400px] rounded-full bg-blue-500/20 blur-3xl animate-pulse" />
    </div>
  );
}