import MovieCard from "./MovieCard";

export default function Section({ title, movies }: any) {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold mb-4 px-2 border-l-4 border-red-600">
        {title}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {movies.map((mv: any, idx: number) => (
          <MovieCard key={idx} {...mv} />
        ))}
      </div>
    </div>
  );
}
