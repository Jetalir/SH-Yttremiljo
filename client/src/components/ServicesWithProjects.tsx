import { Link } from "react-router-dom";
import { getAllCategories } from "../data/projectsData";
import AnimateOnScroll from "./AnimateOnScroll";

export default function ServicesWithProjects() {
  const categories = getAllCategories();

  return (
    <section id="services" className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-16">
        <AnimateOnScroll>
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Våra tjänster</h2>
            <div className="w-16 h-[2px] bg-sky-400 mx-auto mt-3" />
          </header>
        </AnimateOnScroll>

        <div className="space-y-20">
          {categories.map((category, categoryIndex) => (
            <AnimateOnScroll key={category.slug} delay={categoryIndex * 100}>
              <div className="space-y-8">
                {/* Category Header */}
                <div className="text-center max-w-3xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                    {category.title}
                  </h3>
                  <p className="text-lg text-slate-600">{category.description}</p>
                </div>

                {/* Project Previews */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.projects.slice(0, 3).map((project) => (
                    <Link
                      key={project.id}
                      to={`/gallery/${category.slug}/${project.id}`}
                      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-64"
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
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-lg font-bold text-white mb-1">{project.title}</h4>
                        <p className="text-sm text-white/90 line-clamp-2">{project.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* View All Link */}
                <div className="text-center mt-8">
                  <Link
                    to={`/gallery/${category.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-slate-900 font-medium rounded-lg hover:bg-primary-hover transition-colors shadow-sm hover:shadow-md"
                  >
                    Se alla projekt
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
