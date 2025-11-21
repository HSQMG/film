// app/xem-phim/[slug]/[episode]/page.tsx
import Header from "../../../components/Header";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import Footer from "../../../components/Footer";
import Link from "next/link";
import { getMovieBySlug, getRelatedMovies } from "../../../lib/movies";

type WatchPageProps = {
  params: { slug: string; episode: string };
};

export default function WatchPage({ params }: WatchPageProps) {
  const movie = getMovieBySlug(params.slug);
  const related = getRelatedMovies(params.slug);
  const ep = Number(params.episode) || 1;

  if (!movie) {
    return (
      <>
        <Header />
        <Navbar />
        <main className="container mx-auto px-4 py-6">
          <p>Không tìm thấy phim.</p>
        </main>
        <Footer />
      </>
    );
  }

  const total = movie.totalEpisodes ?? 1;
  const episodes = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <>
      <Header />
      <Navbar />

      <main className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          {/* Breadcrumb */}
          <div className="mb-4 text-xs text-gray-400">
            <Link href="/" className="text-gray-500 hover:text-red-400">
              Phim hay
            </Link>
            <span className="mx-1">»</span>
            <Link
              href={`/phim/${movie.slug}`}
              className="text-gray-300 hover:text-red-400"
            >
              {movie.title}
            </Link>
            <span className="mx-1">»</span>
            <span className="text-gray-100">Tập {ep}</span>
          </div>

          {/* Player */}
          <section className="mb-4">
            <div className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-black">
              {movie.youtubeId ? (
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${movie.youtubeId}`}
                  title={movie.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="w-full aspect-video flex items-center justify-center text-gray-400 text-sm">
                  Chưa có link video. Thêm youtubeId trong lib/movies.ts
                </div>
              )}
            </div>

            {/* Thanh công cụ (Autonext, Light, View...) */}
            <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px]">
              <button className="px-3 py-1 rounded-full bg-white/5 border border-white/10 flex items-center gap-1">
                🔁 Autonext: <span className="text-green-400">On</span>
              </button>
              <button className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                ⬜ Expand
              </button>
              <button className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                💡 Light Off
              </button>
              <button className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                ⚠ Report
              </button>
              <div className="ml-auto text-gray-400">
                👁 <span>1K</span> lượt xem (demo)
              </div>
            </div>
          </section>

          {/* Tiêu đề tập */}
          <div className="mb-4">
            <h1 className="text-lg font-semibold text-gray-100">
              {movie.title} - Tập {ep}
            </h1>
            <p className="text-sm text-gray-400">{movie.originalTitle}</p>
          </div>

          {/* Danh sách tập */}
          <section className="mb-6">
            <h2 className="text-sm font-semibold mb-2">Danh sách tập</h2>
            <div className="bg-[#101018] border border-white/10 rounded-lg p-3">
              <div className="flex flex-wrap gap-2">
                {episodes.map((i) => (
                  <Link
                    key={i}
                    href={`/xem-phim/${movie.slug}/${i}`}
                    className={`w-9 h-9 flex items-center justify-center rounded text-xs border transition ${
                      i === ep
                        ? "bg-red-600 border-red-500 text-white"
                        : "bg-[#050509] border-white/10 text-gray-300 hover:border-red-500 hover:text-red-400"
                    }`}
                  >
                    {i}
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* Có thể bạn muốn xem */}
          <section className="related-movies">
            <h3 className="text-base font-semibold mb-3">
              CÓ THỂ BẠN MUỐN XEM
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {related.map((m) => (
                <Link
                  key={m.slug}
                  href={`/phim/${m.slug}`}
                  className="group bg-[#101018] border border-white/5 rounded-md overflow-hidden hover:border-red-500/70 hover:-translate-y-1 transition-all"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={m.poster}
                      alt={m.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                    <span className="absolute top-2 left-2 bg-red-600 text-[11px] px-2 py-0.5 rounded">
                      {m.status}
                    </span>
                  </div>
                  <div className="p-2">
                    <p className="text-xs text-gray-400 line-clamp-1">
                      {m.originalTitle}
                    </p>
                    <p className="text-sm font-semibold line-clamp-2 group-hover:text-red-400 mt-1">
                      {m.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* SIDEBAR */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <Sidebar />
        </div>
      </main>

      <Footer />
    </>
  );
}
