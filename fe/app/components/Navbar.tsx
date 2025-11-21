"use client";

import Link from "next/link";

export default function Navbar() {
  const menu = [
    { label: "Trang chủ", href: "/" },
    { label: "Phim Mới", href: "/danhmuc/phim-moi" },
    { label: "Phim Chiếu Rạp", href: "/danhmuc/phim-chieu-rap" },
    { label: "Phim Lẻ", href: "/danhmuc/phim-le" },
    { label: "Phim Bộ", href: "/danhmuc/phim-bo" },
    { label: "Thể loại", href: "/the-loai" }, // có thể làm dropdown sau
  ];

  return (
    <nav className="w-full bg-[#141416] shadow-md border-b border-white/5">
      <div className="container mx-auto px-4 py-3 flex space-x-6 overflow-x-auto scrollbar-hide">
        {menu.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="text-sm hover:text-red-500 transition whitespace-nowrap"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
