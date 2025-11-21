"use client";

export default function MovieCard({
  title,
  original,
  image,
  status,
  tag,
}: any) {
  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-lg overflow-hidden shadow-md">
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-300"
        />

        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-0.5 rounded">
          {status}
        </span>

        <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
          {tag}
        </span>

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>
      </div>

      <div className="mt-2">
        <p className="font-semibold line-clamp-1 group-hover:text-red-600 transition">
          {title}
        </p>
        <p className="text-sm text-gray-500 line-clamp-1">{original}</p>
      </div>
    </div>
  );
}
