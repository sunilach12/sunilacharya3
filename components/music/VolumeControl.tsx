"use client";

import {
  Volume2,
  VolumeX,
} from "lucide-react";

type Props = {
  volume: number;
  muted: boolean;
  onVolumeChange: (value: number) => void;
  onMute: () => void;
};

export default function VolumeControl({
  volume,
  muted,
  onVolumeChange,
  onMute,
}: Props) {
  return (
    <div className="mt-8 flex items-center gap-4">

      <button
        onClick={onMute}
        className="text-cyan-400 transition hover:scale-110"
      >
        {muted ? (
          <VolumeX size={24} />
        ) : (
          <Volume2 size={24} />
        )}
      </button>

      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={muted ? 0 : volume}
        onChange={(e) =>
          onVolumeChange(Number(e.target.value))
        }
        className="h-2 flex-1 cursor-pointer appearance-none rounded-full bg-slate-700 accent-cyan-400"
      />

      <span className="w-12 text-right text-sm text-gray-400">
        {Math.round((muted ? 0 : volume) * 100)}%
      </span>

    </div>
  );
}