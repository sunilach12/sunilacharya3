"use client";

import { Search, X } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="mx-auto mb-10 max-w-2xl">

      <div className="relative">

        <Search
          size={22}
          className="absolute left-5 top-1/2 -translate-y-1/2 text-cyan-400"
        />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search songs, artists or albums..."
          className="w-full rounded-full border border-cyan-500/20 bg-slate-900 py-4 pl-14 pr-14 text-white outline-none transition-all duration-300 placeholder:text-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
        />

        {value && (
          <button
            onClick={() => onChange("")}
            className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-red-400"
          >
            <X size={20} />
          </button>
        )}

      </div>

    </div>
  );
}