"use client";

import { useMemo, useState } from "react";
import Queue from "./Queue";
import { songs } from "./songs";
import SearchBar from "./SearchBar";
import Playlist from "./Playlist";
import MusicPlayer from "./MusicPlayer";

export default function Music() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [search, setSearch] = useState("");

  const filteredSongs = useMemo(() => {
    if (!search.trim()) return songs;

    return songs.filter((song) => {
      const value = search.toLowerCase();

      return (
        song.title.toLowerCase().includes(value) ||
        song.artist.toLowerCase().includes(value) ||
        song.album.toLowerCase().includes(value)
      );
    });
  }, [search]);

  const currentSong =
    filteredSongs[currentIndex] || filteredSongs[0];

  function selectSong(index: number) {
    setCurrentIndex(index);
    setPlaying(true);
  }

  function togglePlay() {
    setPlaying((prev) => !prev);
  }

  function nextSong() {
    if (filteredSongs.length === 0) return;

    setCurrentIndex((prev) =>
      prev >= filteredSongs.length - 1 ? 0 : prev + 1
    );

    setPlaying(true);
  }

  function previousSong() {
    if (filteredSongs.length === 0) return;

    setCurrentIndex((prev) =>
      prev <= 0 ? filteredSongs.length - 1 : prev - 1
    );

    setPlaying(true);
  }

  return (
    <section
      id="music"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="uppercase tracking-[0.4em] text-cyan-400">
            Music
          </p>

          <h2 className="mt-4 text-5xl font-black text-white">
            My Playlist
          </h2>
        </div>

        <SearchBar
          value={search}
          onChange={setSearch}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <Playlist
              songs={filteredSongs}
              currentIndex={currentIndex}
              playing={playing}
              onSelect={selectSong}
            />

          </div>

          {currentSong && (
            <div className="space-y-8">

  <MusicPlayer
    song={currentSong}
    playing={playing}
    onTogglePlay={togglePlay}
    onNext={nextSong}
    onPrevious={previousSong}
  />

  <Queue
    songs={filteredSongs}
    currentIndex={currentIndex}
    onSelect={selectSong}
  />

</div>
          )}

        </div>

      </div>
    </section>
  );
}