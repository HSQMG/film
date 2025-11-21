import Link from "next/link";

export default function Navbar() {
  const menu = [
    { label: "Trang chủ", link: "/" },
    { label: "Phim Chiếu Rạp", link: "/the-loai/chieu-rap" },
    { label: "Phim Lẻ", link: "/the-loai/phim-le" },
    { label: "Phim Bộ", link: "/the-loai/phim-bo" },
    { label: "Hoạt Hình", link: "/the-loai/hoat-hinh" },
    { label: "Kinh Dị", link: "/the-loai/kinh-di" },
    { label: "Hành Động", link: "/the-loai/hanh-dong" },
  ];

  return (
    <nav className="bg-[#1b1c1e] border-b border-white/10">
      <div className="container mx-auto px-4 py-3 flex space-x-6 overflow-x-auto">
        {menu.map((item) => (
          <Link
            key={item.label}
            href={item.link}
            className="text-sm hover:text-red-500 whitespace-nowrap"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
