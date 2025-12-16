import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { getProjectById, getCategoryBySlug } from "../data/projectsData";
import AnimateOnScroll from "../components/AnimateOnScroll";
import Breadcrumb from "../components/Breadcrumb";

export default function ProjectDetailPage() {
  const { category, projectId } = useParams<{ category: string; projectId: string }>();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Get project data
  const project = category && projectId ? getProjectById(category, projectId) : undefined;
  const categoryData = category ? getCategoryBySlug(category) : undefined;

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category, projectId]);

  // If project not found, redirect to category or home
  if (!project || !categoryData) {
    return <Navigate to={category ? `/gallery/${category}` : "/"} replace />;
  }

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-primary py-10 md:py-12">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6">
          <AnimateOnScroll>
            <div className="text-center mt-8 md:mt-10">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">{project.title}</h1>
              <p className="text-lg md:text-xl text-slate-700 max-w-2xl mx-auto mb-6">{project.description}</p>
              <div className="flex justify-center">
                <Breadcrumb
                  items={[
                    { label: "Hem", path: "/#projects" },
                    { label: categoryData.title, path: `/gallery/${category}` },
                    { label: project.title, path: `/gallery/${category}/${projectId}` }
                  ]}
                />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Photo Gallery Grid */}
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-16">
        <AnimateOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-64 cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-slate-300 transition-colors z-10"
            aria-label="Stäng"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          {project.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 text-white hover:text-slate-300 transition-colors"
              aria-label="Föregående bild"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div className="max-w-7xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.images[currentImageIndex].url}
              alt={project.images[currentImageIndex].alt}
              className="max-w-full max-h-full object-contain"
            />
            <p className="text-white text-center mt-4">
              {currentImageIndex + 1} / {project.images.length}
            </p>
          </div>

          {/* Next button */}
          {project.images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 text-white hover:text-slate-300 transition-colors"
              aria-label="Nästa bild"
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
