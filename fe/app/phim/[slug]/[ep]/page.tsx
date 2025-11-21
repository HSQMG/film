import Link from "next/link";

export default function WatchMovie({
  params,
}: {
  params: { slug: string; ep: string };
}) {
  const { slug, ep } = params;

  const movie = {
    title: "GÓA PHỤ ĐEN",
    iframe: "https://www.youtube.com/embed/r958O404e4U",
    totalEp: 10,
  };

  return (
    <div className="min-h-screen bg-[#1b1e22] text-gray-200 pb-20">
      <div className="container mx-auto px-4 py-6">
        
        {/* BREADCRUMB */}
        <div className="text-sm text-gray-400 mb-4">
          <Link href="/" className="hover:text-white">Phim hay</Link> »
          <Link href={`/phim/${slug}`} className="hover:text-white"> {movie.title}</Link> »
          <span className="text-white">Tập {ep}</span>
        </div>

        {/* PLAYER */}
        <div className="bg-[#23272b] p-5 rounded-lg shadow-lg">
          <div className="aspect-video rounded overflow-hidden shadow">
            <iframe
              src={movie.iframe}
              className="w-full h-full rounded"
              allowFullScreen
            ></iframe>
          </div>

          <h1 className="text-xl mt-4 font-bold text-yellow-300">
            {movie.title} - Tập {ep}
          </h1>

          {/* TẬP PHIM */}
          <div className="mt-5">
            <h3 className="text-lg font-bold mb-3">Danh sách tập</h3>
            <div className="grid grid-cols-6 sm:grid-cols-10 gap-2">
              {Array.from({ length: movie.totalEp }, (_, i) => i + 1).map(
                (num) => (
                  <Link
                    key={num}
                    href={`/phim/${slug}/${num}`}
                    className={`text-center py-2 rounded bg-gray-700 hover:bg-yellow-400 hover:text-black transition ${
                      num.toString() === ep ? "bg-yellow-500 text-black" : ""
                    }`}
                  >
                    {num}
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
