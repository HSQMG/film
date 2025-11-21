import Link from "next/link";
import type { Movie } from "../lib/movies";

type SectionProps = {
  title: string;
  movies: Movie[];
};

export default function Section({ title, movies }: SectionProps) {
  return (
    <section className="mb-10">
      {/* TITLE */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white tracking-wide border-l-4 border-red-600 pl-3">
          {title}
        </h2>

        <Link
          href="/phim"
          className="text-sm text-red-400 hover:text-red-300 transition"
        >
          Xem thêm »
        </Link>
      </div>

      {/* MOVIE GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {movies.map((movie) => (
          <Link
            key={movie.slug}
            href={`/phim/${movie.slug}`}
            className="group bg-[#17181d] rounded-lg overflow-hidden border border-white/10 
                       hover:border-red-500/70 hover:shadow-lg hover:shadow-red-900/20 
                       transform hover:-translate-y-1 transition-all duration-300"
          >
            {/* POSTER */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* STATUS BADGE */}
              <div className="absolute top-2 left-2 bg-red-600 px-2 py-0.5 rounded text-[10px] font-semibold shadow-md">
                {movie.status}
              </div>
            </div>

            {/* TEXT */}
            <div className="p-3">
              <p className="text-xs text-gray-400 line-clamp-1">
                {movie.originalTitle}
              </p>

              <p className="text-sm font-semibold text-gray-200 line-clamp-2 mt-1
                             group-hover:text-red-400 transition">
                {movie.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
