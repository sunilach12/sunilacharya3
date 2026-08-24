"use client";

import { Mic } from "lucide-react";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

type Props = {
  onResult: (text: string) => void;
};

export default function VoiceInput({
  onResult,
}: Props) {
  const recognitionRef = useRef<any>(null);

  const [listening, setListening] =
    useState(false);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition =
      new SpeechRecognition();

    recognition.lang = "en-US";

    recognition.interimResults = false;

    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setListening(true);
    };

    recognition.onend = () => {
      setListening(false);
    };

    recognition.onresult = (event: any) => {
      const text =
        event.results[0][0].transcript;

      onResult(text);
    };

    recognitionRef.current =
      recognition;
  }, [onResult]);

  const startListening = () => {
    recognitionRef.current?.start();
  };

  return (
    <button
      onClick={startListening}
      className={`rounded-xl p-3 transition ${
        listening
          ? "bg-red-500"
          : "bg-slate-800 hover:bg-cyan-500"
      }`}
    >
      <Mic />
    </button>
  );
}