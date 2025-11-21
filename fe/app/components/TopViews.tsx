"use client";

import { useState } from "react";

const tabs = [
  { key: "day", label: "Day" },
  { key: "week", label: "Week" },
  { key: "month", label: "Month" },
  { key: "all", label: "All" },
];

const sample = [
  {
    title: "Chị Mười Ba: Ba Ngày Sinh Tử",
    views: "3.2K lượt xem",
    image:
      "https://ghienphim.org/uploads/GPax0JpZbqvIVyfkmDwhRCKATNtLloFQ.jpeg?v=1624801798",
  },
  {
    title: "Loki (2021)",
    views: "5.8K lượt xem",
    image:
      "https://image.bongngocdn.com/upload/poster-loki-marvel-2021.jpg",
  },
  {
    title: "Black Widow",
    views: "9.1K lượt xem",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_disneyplus_21043-1_63f71aa0.jpeg",
  },
];

export default function TopViews() {
  const [activeTab, setActiveTab] = useState("day");

  return (
    <div className="bg-[#111] p-5 rounded-xl shadow-lg border border-white/10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Top Views</h2>

        {/* Tabs */}
        <div className="flex space-x-3">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTab(t.key)}
              className={`px-3 py-1 text-sm rounded 
                ${
                  activeTab === t.key
                    ? "bg-red-600 text-white"
                    : "bg-[#1a1a1d] text-gray-300 hover:text-white"
                }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {sample.map((mv, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 cursor-pointer transition"
          >
            <img
              src={mv.image}
              className="w-16 h-20 object-cover rounded-md"
              alt={mv.title}
            />

            <div className="flex-1">
              <h3 className="text-sm font-medium text-white line-clamp-2">
                {mv.title}
              </h3>
              <p className="text-xs text-gray-400 mt-1">{mv.views}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
