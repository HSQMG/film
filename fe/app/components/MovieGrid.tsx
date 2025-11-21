import MovieCard from "./MovieCard";

const movies = Array.from({ length: 12 }).map(() => ({
  title: "VŨNG LẦY PHẦN 1",
  original: "The Mire Season 1",
  image:
    "https://static.vieon.vn/vieplay-image/poster_v4/2021/04/27/gw09z3vn_660x946-cuocchienthuongluu3-docquyen.jpg",
  status: "5/5",
  tag: "Vietsub",
}));

export default function MovieGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((m, i) => (
        <MovieCard key={i} {...m} />
      ))}
    </div>
  );
}
