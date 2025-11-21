"use client";

import { useState } from "react";

const topViewData = {
  day: [
    {
      title: "Chị Mười Ba: Ba Ngày Sinh Tử",
      image:
        "https://ghienphim.org/uploads/GPax0JpZbqvIVyfkmDwhRCKATNtLloFQ.jpeg?v=1624801798",
      views: "3.2K lượt xem",
      tag: "Trailer",
    },
    {
      title: "Black Widow",
      image:
        "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_disneyplus_21043-1_63f71aa0.jpeg",
      views: "5.8K lượt xem",
      tag: "HD",
    },
  ],

  week: [
    {
      title: "Avengers: Endgame",
      image:
        "https://upload.wikimedia.org/wikipedia/vi/9/9a/Avengers_Endgame_bia_teaser.jpg",
      views: "12.4K lượt xem",
      tag: "Full HD",
    },
  ],

  month: [
    {
      title: "Loki - Season 2",
      image:
        "https://image.bongngocdn.com/upload/poster-loki-season-2-marvel.jpg",
      views: "20.3K lượt xem",
      tag: "Vietsub",
    },
  ],

  all: [
    {
      title: "The Witcher",
      image:
        "https://upload.wikimedia.org/wikipedia/vi/1/1c/The_Witcher_Season_1.png",
      views: "45.1K lượt xem",
      tag: "Full",
    },
  ],
};

export default function Sidebar() {
  const [tab, setTab] = useState<"day" | "week" | "month" | "all">("day");

  return (
    <aside className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-4 w-full">
      {/* Title */}
      <h2 className="text-xl font-semibold mb-4 border-l-4 border-red-600 pl-3">
        🔥 Top Views
      </h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        {["day", "week", "month", "all"].map((key) => (
          <button
            key={key}
            onClick={() => setTab(key as any)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium capitalize transition ${
              tab === key
                ? "bg-red-600 text-white"
                : "bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
            }`}
          >
            {key}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="space-y-4">
        {topViewData[tab].map((item, index) => (
          <a
            key={index}
            href="#"
            className="flex gap-3 group p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
          >
            {/* Thumbnail */}
            <div className="relative w-24 h-32 flex-shrink-0 overflow-hidden rounded-lg shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />

              <span className="absolute bottom-1 left-1 bg-red-600 text-white text-[11px] px-1.5 py-0.5 rounded">
                {item.tag}
              </span>
            </div>

            {/* Info */}
            <div className="flex flex-col justify-between py-1">
              <p className="font-medium line-clamp-2 group-hover:text-red-600 transition">
                {item.title}
              </p>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                👁 {item.views}
              </p>
            </div>
          </a>
        ))}
      </div>
    </aside>
  );
}
