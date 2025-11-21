
import MovieGrid from "@/app/components/MovieGrid";
import Sidebar from "@/app/components/Sidebar";
import Breadcrumb from "@/app/components/Breadcrumb";
export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = decodeURIComponent(params.slug);

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Phim hay", href: "/" },
          { label: category, active: true },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">

        {/* LEFT Content */}
        <div className="md:col-span-3">
          {/* Category Title */}
          <h1 className="text-2xl font-semibold border-l-4 border-red-600 pl-3 mb-4">
            Phim {category}
          </h1>

          {/* Movie Grid */}
          <MovieGrid />
        </div>

        {/* RIGHT Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
}
