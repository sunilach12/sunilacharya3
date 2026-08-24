"use client";

import { Bot, User } from "lucide-react";
import Typewriter from "./Typewriter";

type Props = {
  bot: boolean;
  text: string;
};

export default function ChatBubble({
  bot,
  text,
}: Props) {
  return (
    <div
      className={`flex ${
        bot ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`flex max-w-[85%] gap-3 ${
          bot ? "" : "flex-row-reverse"
        }`}
      >
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full ${
            bot
              ? "bg-cyan-500 text-black"
              : "bg-slate-700"
          }`}
        >
          {bot ? (
            <Bot size={20} />
          ) : (
            <User size={20} />
          )}
        </div>

        <div
          className={`rounded-2xl px-4 py-3 ${
            bot
              ? "bg-slate-800"
              : "bg-cyan-500 text-black"
          }`}
        >
          {bot ? (
            <Typewriter text={text} />
          ) : (
            text
          )}
        </div>
      </div>
    </div>
  );
}