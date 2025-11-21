
export type Movie = {
  slug: string;
  title: string;
  originalTitle: string;
  poster: string;
  status: string; 
  year: number;
  country: string;
  category: "phim-le" | "phim-bo" | "chieu-rap";
  imdb?: number;
  duration?: string;
  description: string;
  youtubeId?: string; 
  totalEpisodes?: number;
  views?: {
    day: number;
    week: number;
    month: number;
    all: number;
  };
};

export const MOVIES: Movie[] = [
  {
    slug: "goa-phu-den",
    title: "Góa Phụ Đen",
    originalTitle: "Black Widow (2021)",
    poster:
      "https://lumiere-a.akamaihd.net/v1/images/p_blackwidow_disneyplus_21043-1_63f71aa0.jpeg",
    status: "HD Vietsub",
    year: 2021,
    country: "Mỹ",
    category: "chieu-rap",
    imdb: 7.2,
    duration: "133 phút",
    description:
      "Natasha Romanoff phải đối mặt với phần quá khứ đen tối khi một âm mưu nguy hiểm liên quan đến quá khứ của cô trỗi dậy.",
    youtubeId: "Fp9pNPdNwjI",
    totalEpisodes: 1,
    views: { day: 1200, week: 5400, month: 21000, all: 89000 },
  },
  {
    slug: "avengers-infinity-war",
    title: "Avengers: Infinity War",
    originalTitle: "Avengers: Infinity War",
    poster:
      "https://upload.wikimedia.org/wikipedia/vi/e/e8/Avengers-Infinity_War-Official-Poster.jpg",
    status: "HD Vietsub",
    year: 2018,
    country: "Mỹ",
    category: "chieu-rap",
    imdb: 8.4,
    duration: "149 phút",
    description:
      "Biệt đội Avengers cùng các đồng minh phải hy sinh tất cả để ngăn chặn Thanos.",
    youtubeId: "6ZfuNTqbHE8",
    totalEpisodes: 1,
    views: { day: 800, week: 3000, month: 15000, all: 120000 },
  },
  {
    slug: "loki-2021",
    title: "Loki",
    originalTitle: "Loki (2021)",
    poster:
      "https://image.bongngocdn.com/upload/poster-loki-marvel-2021.jpg",
    status: "Tập 15 Vietsub",
    year: 2021,
    country: "Mỹ",
    category: "phim-bo",
    imdb: 8.2,
    duration: "Tập ~50 phút",
    description:
      "Sau sự kiện Avengers: Endgame, Loki bị đưa đến TVA – nơi giám sát dòng thời gian.",
    youtubeId: "nW948Va-l10",
    totalEpisodes: 15,
    views: { day: 2000, week: 9000, month: 40000, all: 200000 },
  },
];

export function getMovieBySlug(slug: string): Movie | undefined {
  return MOVIES.find((m) => m.slug === slug);
}

export function getTopViews(type: "day" | "week" | "month" | "all"): Movie[] {
  return [...MOVIES]
    .filter((m) => m.views)
    .sort((a, b) => (b.views![type] ?? 0) - (a.views![type] ?? 0));
}

export function getRelatedMovies(slug: string): Movie[] {
  const movie = getMovieBySlug(slug);
  if (!movie) return MOVIES.slice(0, 4);
  return MOVIES.filter(
    (m) => m.slug !== slug && (m.category === movie.category || m.country === movie.country)
  ).slice(0, 6);
}
