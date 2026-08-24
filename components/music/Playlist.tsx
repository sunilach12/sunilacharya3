"use client";

import Image from "next/image";
import { Play, Pause, Music2 } from "lucide-react";

import { Song } from "./songs";

type Props = {
  songs: Song[];
  currentIndex: number;
  playing: boolean;
  onSelect: (index: number) => void;
};

export default function Playlist({
  songs,
  currentIndex,
  playing,
  onSelect,
}: Props) {
  if (songs.length === 0) {
    return (
      <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-10 text-center">
        <Music2
          size={50}
          className="mx-auto mb-4 text-cyan-400"
        />

        <h2 className="text-xl font-bold text-white">
          No Songs Found
        </h2>

        <p className="mt-2 text-gray-400">
          Try another search.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-6">

      <div className="mb-6 flex items-center gap-3">

        <Music2
          size={28}
          className="text-cyan-400"
        />

        <h2 className="text-2xl font-bold text-white">
          Playlist
        </h2>

      </div>

      <div className="space-y-4">

        {songs.map((song, index) => {

          const active =
            index === currentIndex;

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
                width={70}
                height={70}
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

                <p className="text-xs text-gray-500">
                  {song.album}
                </p>

              </div>

              <span className="mr-4 text-sm text-gray-400">
                {song.duration}
              </span>

              <div>

                {active && playing ? (
                  <Pause
                    size={24}
                    className="text-cyan-400"
                  />
                ) : (
                  <Play
                    size={24}
                    className="text-gray-400"
                  />
                )}

              </div>

            </button>
          );
        })}

      </div>

    </div>
  );
}