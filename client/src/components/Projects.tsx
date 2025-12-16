import ProjectCard, { type Project } from "./ProjectCard";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Projects() {
  // Project categories with slugs for routing
  const list: Project[] = [
    { title: "Plattläggning", imageSrc: "/images/plattlaggning/plattlaggning.jpeg", slug: "plattlaggning" },
    { title: "Trädäck", imageSrc: "/images/tradack/tradack.jpeg", slug: "tradack" },
    { title: "Mur", imageSrc: "/images/mur/mur.jpeg", slug: "mur" },
    { title: "Rabatt", imageSrc: "/images/rabatt/rabatt.jpeg", slug: "rabatt" },
    { title: "Staket", imageSrc: "/images/staket/staket.jpeg", slug: "staket" },
    { title: "Uteplats", imageSrc: "/images/uteplats/uteplats.jpeg", slug: "uteplats" },
    { title: "Gräsplantering", imageSrc: "/images/grasplantering/grasplantering.jpeg", slug: "grasplantering" },
    { title: "Växthus", imageSrc: "/images/vaxthus/vaxthus.jpeg", slug: "vaxthus" },
  ];

  return (
    <section id="projects" className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-16">
        <AnimateOnScroll>
          <header className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Våra projekt</h2>
            <div className="w-16 h-[2px] bg-sky-400 mx-auto mt-3" />
          </header>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map((p, i) => (
              <ProjectCard key={i} title={p.title} imageSrc={p.imageSrc} slug={p.slug} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}