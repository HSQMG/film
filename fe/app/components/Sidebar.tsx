"use client";

import { useState } from "react";
import Link from "next/link";
import { getTopViews, type Movie } from "../lib/movies";

const TABS: { key: "day" | "week" | "month" | "all"; label: string }[] = [
  { key: "day", label: "Day" },
  { key: "week", label: "Week" },
  { key: "month", label: "Month" },
  { key: "all", label: "All" },
];

export default function Sidebar() {
  const [active, setActive] = useState<"day" | "week" | "month" | "all">("day");
  const movies: Movie[] = getTopViews(active).slice(0, 7);

  return (
    <aside className="space-y-6 sticky top-4">
      <div className="bg-[#0d0d10] border border-white/10 rounded-xl shadow-lg overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#15151a]">
          <h3 className="text-sm font-semibold text-gray-100 tracking-wide">
            🔥 TOP VIEWS
          </h3>

          <div className="flex items-center gap-1 text-[11px]">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`px-2 py-1 rounded-lg transition-all ${
                  active === tab.key
                    ? "bg-red-600 text-white shadow-md"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Movie List */}
        <div className="p-3 space-y-4">
          {movies.map((movie, idx) => (
            <Link
              key={movie.slug}
              href={`/phim/${movie.slug}`}
              className="flex gap-3 group items-center p-2 rounded-lg bg-[#111118] hover:bg-[#1b1c22] transition-all border border-transparent hover:border-white/10"
            >
              {/* Thumbnail */}
              <div className="relative h-20 w-16 overflow-hidden rounded-md shadow-md">
                <img
                  src={movie.poster}
                  alt={movie.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition duration-300"
                />

                <span className="absolute -top-1 -left-1 text-[10px] bg-red-600 px-1.5 py-0.5 rounded-br-md text-white shadow">
                  #{idx + 1}
                </span>
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="text-xs text-gray-400 line-clamp-1 italic">
                  {movie.originalTitle}
                </p>

                <p className="text-sm font-semibold text-gray-100 group-hover:text-red-400 transition line-clamp-2 leading-tight">
                  {movie.title}
                </p>

                {movie.views && (
                  <p className="text-[11px] text-gray-500 mt-1">
                    👁 {movie.views[active].toLocaleString("vi-VN")} lượt xem
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
