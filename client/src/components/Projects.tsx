import ProjectCard, { type Project } from "./ProjectCard";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Projects() {
  // Placeholder list; replace with real items later
  const list: Project[] = [
    { title: "Plattläggning", imageSrc: "/plattlaggning.jpeg" },
    { title: "Trädäck", imageSrc: "/tradack.jpeg" },
    { title: "Mur", imageSrc: "/mur.jpeg" },
    { title: "Rabatt", imageSrc: "/rabatt.jpeg" },
    { title: "Staket", imageSrc: "/staket.jpeg" },
    { title: "Grillplats", imageSrc: "/grillplats.jpeg" },
    { title: "Gräsplantering", imageSrc: "/grasplantering.jpeg" },
    { title: "Växthus", imageSrc: "/vaxthus.jpeg" },
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
              <ProjectCard key={i} title={p.title} imageSrc={p.imageSrc} />
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
