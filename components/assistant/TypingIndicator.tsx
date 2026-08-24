"use client";

import { Loader2 } from "lucide-react";

export default function TypingIndicator() {
  return (
    <div className="flex items-center gap-3">

      <div className="rounded-2xl bg-slate-800 px-4 py-3">

        <div className="flex items-center gap-2">

          <Loader2
            size={18}
            className="animate-spin text-cyan-400"
          />

          <span className="text-sm text-gray-300">
            Sunil AI is thinking...
          </span>

        </div>

      </div>

    </div>
  );
}