import { MOVIES } from "@/app/lib/movies";
import Link from "next/link";

export default function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Lấy tất cả phim cùng thể loại
  const movies = MOVIES.filter((m) => m.category === slug);

  return (
    <div className="container mx-auto px-4 py-6 flex">
      <div className="flex-1">

        <h1 className="text-xl font-bold text-white mb-4 uppercase">
          Thể loại: {slug}
        </h1>

        {movies.length === 0 ? (
          <p className="text-gray-400">Không tìm thấy phim nào.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {movies.map((movie) => (
              <Link
                key={movie.slug}
                href={`/phim/${movie.slug}`}
                className="group bg-[#101018] border border-white/5 rounded-lg overflow-hidden hover:border-red-500 transition-all"
              >
                <div className="relative aspect-[3/4]">
                  <img
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  <span className="absolute top-2 left-2 bg-red-600 text-xs px-2 py-1 rounded">
                    {movie.status}
                  </span>
                </div>
                <div className="p-2">
                  <p className="text-xs text-gray-400 line-clamp-1">
                    {movie.originalTitle}
                  </p>
                  <p className="text-sm font-semibold text-white group-hover:text-red-400 line-clamp-2">
                    {movie.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
