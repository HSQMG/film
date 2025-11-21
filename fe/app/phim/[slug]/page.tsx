import Image from "next/image";

interface MovieDetailProps {
  params: { slug: string };
}

// Fake data – lát tôi sẽ map API cho bạn
const movieData = {
  title: "GÓA PHỤ ĐEN",
  originalTitle: "Black Widow (2021)",
  status: "HD Vietsub",
  imdb: "7.2",
  duration: "133 phút",
  country: "Mỹ",
  genres: ["Chiếu Rạp", "Hành động", "Phiêu Lưu", "Viễn Tưởng"],
  poster:
    "https://1.bp.blogspot.com/-fL7o9nefEPc/YOk_YIB6QRI/AAAAAAAAJn8/hahCLlgRq4AFc8O4YeKhpb5zncixXAF0wCLcBGAsYHQ/s320/images.jpg",
  description:
    "Góa Phụ Đen – Black Widow 2021: Natasha Romanoff hay còn gọi là Góa phụ đen phải đối mặt với những phần đen tối trong quá khứ...",
  actors: [
    "Scarlett Johansson",
    "Florence Pugh",
    "David Harbour",
    "Ever Anderson",
  ],
};

export default function MovieDetail({ params }: MovieDetailProps) {
  const { slug } = params;

  return (
    <div className="container mx-auto px-4 py-6 text-white">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-400 mb-4">
        <span className="text-red-400">Phim Hay</span> ›{" "}
        <span className="text-red-400">Mỹ</span> ›{" "}
        <span className="text-white">{movieData.title}</span>
      </div>

      {/* Poster + Info */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Poster */}
        <div className="w-full md:w-1/3 relative group">
          <Image
            src={movieData.poster}
            width={400}
            height={600}
            alt={movieData.title}
            className="rounded-lg shadow-lg"
          />

          {/* Nút xem phim */}
          <a
            href="#"
            className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition rounded-lg"
          >
            <div className="bg-red-500 text-white px-5 py-2 rounded font-semibold">
              ▶ Xem Phim
            </div>
          </a>
        </div>

        {/* Info */}
        <div className="w-full md:w-2/3 space-y-3">
          <h1 className="text-2xl font-bold text-yellow-300">
            {movieData.title}
          </h1>
          <h2 className="text-gray-300">{movieData.originalTitle}</h2>

          <ul className="space-y-2 text-sm">
            <li>
              <strong>Trạng thái:</strong>{" "}
              <span className="text-green-400">{movieData.status}</span>
            </li>
            <li>
              <strong>IMDb:</strong>{" "}
              <span className="text-yellow-400">{movieData.imdb}</span>
            </li>
            <li>
              <strong>Thời lượng:</strong> {movieData.duration}
            </li>
            <li>
              <strong>Quốc gia:</strong> {movieData.country}
            </li>
            <li>
              <strong>Thể loại:</strong>{" "}
              {movieData.genres.map((g) => (
                <span key={g} className="text-blue-400 mr-1">
                  {g},
                </span>
              ))}
            </li>
            <li>
              <strong>Diễn viên:</strong>{" "}
              {movieData.actors.map((a) => (
                <span key={a} className="text-gray-300 mr-1">
                  {a},
                </span>
              ))}
            </li>
          </ul>
        </div>
      </div>

      {/* Nội dung phim */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-yellow-300 mb-3">
          Nội dung phim
        </h2>
        <p className="text-gray-300 leading-relaxed">{movieData.description}</p>
      </div>

      {/* Phim liên quan */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-3">CÓ THỂ BẠN MUỐN XEM</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] rounded-lg p-2 hover:-translate-y-1 transition cursor-pointer"
            >
              <Image
                src={movieData.poster}
                width={300}
                height={450}
                alt="Related"
                className="rounded"
              />
              <p className="mt-2 text-sm">Đại Thánh Vô Song</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
