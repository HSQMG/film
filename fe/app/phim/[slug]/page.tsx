import Link from "next/link";

export default function MovieDetail({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const movie = {
    title: "GÓA PHỤ ĐEN",
    original: "Black Widow (2021)",
    imdb: "7.2",
    duration: "133 phút",
    country: "Mỹ",
    categories: ["Chiếu Rạp", "Hành động", "Phiêu Lưu", "Viễn Tưởng"],
    director: "Cate Shortland",
    actors: ["C.C. Smiff", "David Harbour", "Florence Pugh", "Michelle Lee"],
    poster:
      "https://1.bp.blogspot.com/-fL7o9nefEPc/YOk_YIB6QRI/AAAAAAAAJn8/hahCLlgRq4AFc8O4YeKhpb5zncixXAF0wCLcBGAsYHQ/s320/images.jpg",
    description: `Góa Phụ Đen – Black Widow 2021: Natasha Romanoff phải đối mặt...`,
  };

  return (
    <div className="min-h-screen bg-[#1b1e22] text-gray-200 pb-20">
      <div className="container mx-auto px-4 py-6">
        {/* BREADCRUMB */}
        <div className="text-sm text-gray-400 mb-5">
          <Link href="/" className="hover:text-white">Phim hay</Link> »
          <Link href="/danh-muc/my" className="hover:text-white"> Mỹ</Link> »
          <span className="text-white">{movie.title}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          {/* POSTER */}
          <div className="w-full md:w-1/3">
            <img
              src={movie.poster}
              className="rounded-lg shadow-lg w-full"
            />

            {/* Nút xem phim → tập 1 */}
            <Link
              href={`/phim/${slug}/1`}
              className="block mt-4 text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg shadow"
            >
              ▶ XEM PHIM
            </Link>
          </div>

          {/* INFO */}
          <div className="flex-1 bg-[#23272b] p-6 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-yellow-300">{movie.title}</h1>
            <h2 className="text-gray-400 mb-4">{movie.original}</h2>

            <ul className="space-y-2 text-sm">
              <li><b>Trạng thái:</b> HD • Vietsub</li>
              <li><b>Điểm IMDb:</b> ⭐ {movie.imdb}</li>
              <li><b>Thời lượng:</b> {movie.duration}</li>
              <li><b>Thể loại:</b> {movie.categories.join(", ")}</li>
              <li><b>Quốc gia:</b> {movie.country}</li>
              <li><b>Đạo diễn:</b> {movie.director}</li>
              <li><b>Diễn viên:</b> {movie.actors.join(", ")}</li>
            </ul>
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="mt-10 bg-[#23272b] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-yellow-300 mb-3">NỘI DUNG PHIM</h3>
          <p className="leading-7 text-gray-300">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}
