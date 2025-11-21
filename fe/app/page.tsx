import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

// Dữ liệu mẫu – bạn có thể thay bằng API hoặc DB sau này
const sampleMovies = [
  {
    title: "Góa Phụ Đen",
    original: "Black Widow",
    status: "HD Vietsub",
    image:
      "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_disneyplus_21043-1_63f71aa0.jpeg",
  },
  {
    title: "Avengers Infinity War",
    original: "Infinity War",
    status: "HD Vietsub",
    image:
      "https://upload.wikimedia.org/wikipedia/vi/e/e8/Avengers-Infinity_War-Official-Poster.jpg",
  },
  {
    title: "Loki (2021)",
    original: "Loki",
    status: "Tập 15 Vietsub",
    image:
      "https://image.bongngocdn.com/upload/poster-loki-marvel-2021.jpg",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />

      <main className="container mx-auto px-4 py-6 flex flex-col md:flex-row gap-6">

        {/* LEFT CONTENT */}
        <div className="flex-1">
          <Section title="Phim Chiếu Rạp" movies={sampleMovies} />
          <Section title="Phim Bộ" movies={sampleMovies} />
          <Section title="Phim Lẻ" movies={sampleMovies} />
          <Section title="Top Trending" movies={sampleMovies} />
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
