import { useParams, Navigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { getCategoryBySlug } from "../data/projectsData";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Breadcrumb from "../components/Breadcrumb";

export default function GalleryPage() {
  const { category } = useParams<{ category: string }>();

  // Get category data
  const categoryData = category ? getCategoryBySlug(category) : undefined;

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  // If category not found, redirect to home
  if (!categoryData) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary py-10 md:py-12">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mt-8 md:mt-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">{categoryData.title}</h1>
              <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-6">
                {categoryData.description}
              </p>
              <div className="flex justify-center">
                <Breadcrumb
                  items={[
                    { label: "Hem", path: "/#projects" },
                    { label: categoryData.title, path: `/gallery/${category}` }
                  ]}
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-16">
        <AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryData.projects.map((project) => (
              <Link
                key={project.id}
                to={`/gallery/${category}/${project.id}`}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-64 md:h-80"
              >
                {/* Project Image */}
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-white/90 mb-3 line-clamp-2">{project.description}</p>

                  {/* View button */}
                  <div className="flex items-center gap-2 mt-3 text-sm font-medium text-primary">
                    <span>Se projekt</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </AnimateOnScroll>

        {/* Empty state */}
        {categoryData.projects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-slate-600 text-lg">Inga projekt att visa ännu. Kom tillbaka snart!</p>
          </div>
        )}
      </div>
    </div>
  );
}
