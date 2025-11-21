import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { MOVIES } from "./lib/movies";

export default function Home() {
  const phimChieuRap = MOVIES.filter((m) => m.category === "chieu-rap");
  const phimBo = MOVIES.filter((m) => m.category === "phim-bo");
  const phimLe = MOVIES.filter(
    (m) => m.category === "phim-le" || m.category === "chieu-rap"
  );

  return (
    <>
      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">

        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-10">
          <div className="bg-[#1a1b1e] p-5 rounded-xl shadow-lg border border-white/10">
            <Section title="🎬 Phim Chiếu Rạp" movies={phimChieuRap} />
          </div>

          <div className="bg-[#1a1b1e] p-5 rounded-xl shadow-lg border border-white/10">
            <Section title="🎞️ Phim Bộ" movies={phimBo} />
          </div>

          <div className="bg-[#1a1b1e] p-5 rounded-xl shadow-lg border border-white/10">
            <Section title="🍿 Phim Lẻ" movies={phimLe} />
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="w-full lg:w-1/4 space-y-6">
          <Sidebar />
        </aside>
      </main>

      <Footer />
    </>
  );
}
