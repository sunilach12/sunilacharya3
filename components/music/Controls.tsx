"use client";

import {
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Repeat,
  Shuffle,
  Heart,
} from "lucide-react";

type Props = {
  playing: boolean;
  onPlayPause: () => void;
  onNext: () => void;
  onPrevious: () => void;
  shuffle: boolean;
  repeat: boolean;
  liked: boolean;
  onShuffle: () => void;
  onRepeat: () => void;
  onLike: () => void;
};

export default function Controls({
  playing,
  onPlayPause,
  onNext,
  onPrevious,
  shuffle,
  repeat,
  liked,
  onShuffle,
  onRepeat,
  onLike,
}: Props) {
  return (
    <div className="mt-8 flex items-center justify-center gap-5">

      <button
        onClick={onShuffle}
        className={`transition ${
          shuffle ? "text-cyan-400" : "text-gray-500"
        } hover:text-cyan-400`}
      >
        <Shuffle size={22} />
      </button>

      <button
        onClick={onPrevious}
        className="rounded-full bg-slate-800 p-3 hover:bg-slate-700"
      >
        <SkipBack size={24} />
      </button>

      <button
        onClick={onPlayPause}
        className="rounded-full bg-cyan-500 p-5 text-black shadow-lg transition hover:scale-110"
      >
        {playing ? <Pause size={28} /> : <Play size={28} />}
      </button>

      <button
        onClick={onNext}
        className="rounded-full bg-slate-800 p-3 hover:bg-slate-700"
      >
        <SkipForward size={24} />
      </button>

      <button
        onClick={onRepeat}
        className={`transition ${
          repeat ? "text-cyan-400" : "text-gray-500"
        } hover:text-cyan-400`}
      >
        <Repeat size={22} />
      </button>

      <button
        onClick={onLike}
        className={`transition ${
          liked ? "text-red-500" : "text-gray-500"
        } hover:text-red-500`}
      >
        <Heart
          size={22}
          fill={liked ? "currentColor" : "none"}
        />
      </button>

    </div>
  );
}