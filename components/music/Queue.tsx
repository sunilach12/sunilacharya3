"use client";

import Image from "next/image";
import { PlayCircle } from "lucide-react";
import { Song } from "./songs";

type Props = {
  songs: Song[];
  currentIndex: number;
  onSelect: (index: number) => void;
};

export default function Queue({
  songs,
  currentIndex,
  onSelect,
}: Props) {
  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-6 shadow-xl">

      <h2 className="mb-6 text-2xl font-bold text-cyan-400">
        🎵 Up Next
      </h2>

      <div className="space-y-4">

        {songs.map((song, index) => {

          const active = index === currentIndex;

          return (
            <button
              key={song.id}
              onClick={() => onSelect(index)}
              className={`flex w-full items-center gap-4 rounded-2xl p-3 transition-all duration-300

              ${
                active
                  ? "border border-cyan-400 bg-cyan-500/20"
                  : "hover:bg-slate-800"
              }`}
            >

              <Image
                src={song.cover}
                alt={song.title}
                width={60}
                height={60}
                className="rounded-xl object-cover"
              />

              <div className="flex-1 text-left">

                <h3
                  className={`font-semibold ${
                    active
                      ? "text-cyan-300"
                      : "text-white"
                  }`}
                >
                  {song.title}
                </h3>

                <p className="text-sm text-gray-400">
                  {song.artist}
                </p>

              </div>

              {active && (
                <PlayCircle
                  size={28}
                  className="text-cyan-400"
                />
              )}

            </button>
          );

        })}

      </div>

    </div>
  );
}