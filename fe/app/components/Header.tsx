export default function Header() {
  return (
    <header className="w-full bg-[#111] border-b border-white/5 shadow-xl">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <h1 className="text-2xl font-bold tracking-wide">
          <span className="text-red-500">PHIM</span>HAY
        </h1>

        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Tìm kiếm phim..."
            className="px-4 py-2 rounded-lg bg-[#1a1a1d] border border-white/10 w-80 
                       text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>
    </header>
  );
}
