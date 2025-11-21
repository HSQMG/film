// app/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-[#050509] mt-6">
      <div className="container mx-auto px-4 py-6 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© {new Date().getFullYear()} PhimHay. Xem phim online miễn phí.</p>
        <p className="text-[11px] text-gray-600">
          Liên hệ quảng cáo: contact@phimhay.vn
        </p>
      </div>
    </footer>
  );
}
