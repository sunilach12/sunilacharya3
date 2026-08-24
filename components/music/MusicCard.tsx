"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { Song } from "./songs";

type Props = {
  song: Song;
  isActive?: boolean;
  onSelectSong: () => void;
};

export default function MusicCard({
  song,
  isActive = false,
  onSelectSong,
}: Props) {
  return (
    <button
      type="button"
      onClick={onSelectSong}
      className={`group flex w-full items-center justify-between rounded-2xl border p-4 transition hover:border-cyan-400 hover:bg-slate-700 ${
        isActive
          ? "border-cyan-400 bg-slate-700"
          : "border-cyan-500/10 bg-slate-800"
      }`}
    >

      <div className="flex items-center gap-4">

        <Image
          src={song.cover}
          alt={song.title}
          width={70}
          height={70}
          className="rounded-xl object-cover"
        />

        <div>

          <h3 className="font-semibold">
            {song.title}
          </h3>

          <p className="text-sm text-gray-400">
            {song.artist}
          </p>

          <p className="text-xs text-cyan-400">
            {song.album}
          </p>

        </div>

      </div>

      <div className="flex items-center gap-6">

        <span className="text-sm text-gray-400">
          {song.duration}
        </span>

        <span className="rounded-full bg-cyan-500 p-3 text-black transition group-hover:scale-110">
          <Play size={18} fill="currentColor" />
        </span>

      </div>

    </button>
  );
}