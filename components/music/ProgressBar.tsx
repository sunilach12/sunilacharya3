"use client";

type Props = {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
};

function formatTime(seconds: number) {
  if (!isFinite(seconds)) return "0:00";

  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);

  return `${min}:${sec.toString().padStart(2, "0")}`;
}

export default function ProgressBar({
  currentTime,
  duration,
  onSeek,
}: Props) {
  return (
    <div className="mt-8">

      <input
        type="range"
        min={0}
        max={duration || 0}
        step={0.1}
        value={currentTime}
        onChange={(e) => onSeek(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-700 accent-cyan-400"
      />

      <div className="mt-2 flex justify-between text-sm text-gray-400">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

    </div>
  );
}