// app/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-white/5 bg-gradient-to-b from-[#111827] to-[#050509]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo + title */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-red-600 flex items-center justify-center font-bold text-sm">
            🎬
          </div>
          <div>
            <p className="text-lg font-semibold tracking-wide">
              Phim<span className="text-red-500">Hay</span>
            </p>
            <p className="text-xs text-gray-400 hidden sm:block">
              Xem phim online miễn phí
            </p>
          </div>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-lg hidden sm:flex">
          <input
            className="w-full rounded-full bg-[#0b0b10] border border-white/10 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/70"
            placeholder="Tìm kiếm phim, diễn viên, đạo diễn..."
          />
        </div>

        {/* Bookmarks (fake) */}
        <button className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-xs border border-white/10">
          <span className="text-yellow-400">★</span>
          <span>Bookmarks</span>
          <span className="text-gray-400 text-[11px]">(0)</span>
        </button>
      </div>

      {/* Search on mobile */}
      <div className="px-4 pb-3 sm:hidden">
        <input
          className="w-full rounded-full bg-[#0b0b10] border border-white/10 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/70"
          placeholder="Tìm kiếm phim..."
        />
      </div>
    </header>
  );
}
