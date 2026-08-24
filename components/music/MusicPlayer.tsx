"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { Song } from "./songs";

import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";
import Equalizer from "./Equalizer";

type Props = {
  song: Song;
  playing: boolean;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function MusicPlayer({
  song,
  playing,
  onTogglePlay,
  onNext,
  onPrevious,
}: Props) {

  const audioRef = useRef<HTMLAudioElement>(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);

  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(false);
  const [liked, setLiked] = useState(false);

  // Load new song
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.pause();

    audio.load();

    setCurrentTime(0);
    setDuration(0);

    if (playing) {
      audio.play().catch(console.error);
    }

  }, [song]);

  // Play / Pause
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (playing) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }

  }, [playing]);

  // Volume
  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = volume;
    audio.muted = muted;

  }, [volume, muted]);

  // Audio Events
  useEffect(() => {

    const audio = audioRef.current;

    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
    };

    const loaded = () => {
      setDuration(audio.duration || 0);
    };

    const ended = () => {
      if (repeat) {
        audio.currentTime = 0;
        audio.play();
      } else {
        onNext();
      }
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", loaded);
    audio.addEventListener("ended", ended);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", loaded);
      audio.removeEventListener("ended", ended);
    };

  }, [song, repeat, onNext]);

  function seek(time: number) {
    const audio = audioRef.current;

    if (!audio) return;

    audio.currentTime = time;
    setCurrentTime(time);
  }

  function changeVolume(value: number) {
    setVolume(value);
  }

  function toggleMute() {
    setMuted((prev) => !prev);
  }

  function toggleShuffle() {
    setShuffle((prev) => !prev);
  }

  function toggleRepeat() {
    setRepeat((prev) => !prev);
  }

  function toggleLike() {
    setLiked((prev) => !prev);
  }

  return (
    <div className="rounded-3xl border border-cyan-500/20 bg-slate-900 p-6 shadow-xl">
            <div className="relative mx-auto w-fit">

  {/* Glow Ring */}
  <div
    className={`relative rounded-full border-4 border-cyan-400 object-cover shadow-2xl

${
  playing
    ? "spin-record"
    : "spin-record pause-record"
}`}
  />

  {/* Animated Album */}
  <Image
    src={song.cover}
    alt={song.title}
    width={320}
    height={320}
    priority
    className={`relative rounded-full border-4 border-cyan-400 object-cover shadow-2xl transition-all duration-500

    ${
      playing
        ? "animate-spin"
        : ""
    }`}
    style={{
      animationDuration: "12s",
      animationTimingFunction: "linear",
      animationIterationCount: "infinite",
    }}
  />

  {/* Center Disc */}
  <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-slate-900 bg-cyan-400 shadow-lg" />

</div>

      <h2 className="mt-6 text-center text-3xl font-bold text-white">
        {song.title}
      </h2>

      <p className="mt-2 text-center text-gray-400">
        {song.artist}
      </p>

      <div className="mt-8">
        <Equalizer playing={playing} />
      </div>

      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        onSeek={seek}
      />

      <Controls
        playing={playing}
        onPlayPause={onTogglePlay}
        onNext={onNext}
        onPrevious={onPrevious}
        shuffle={shuffle}
        repeat={repeat}
        liked={liked}
        onShuffle={toggleShuffle}
        onRepeat={toggleRepeat}
        onLike={toggleLike}
      />

      <VolumeControl
        volume={volume}
        muted={muted}
        onVolumeChange={changeVolume}
        onMute={toggleMute}
      />

      <audio ref={audioRef} preload="metadata">
        <source src={song.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

    </div>
  );
}