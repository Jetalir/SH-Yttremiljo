type Project = {
  title: string;
  caption?: string;
};

const ProjectCard = ({ title, caption }: Project) => (
  <figure className="rounded-lg overflow-hidden border bg-white hover:shadow-md transition">
    <div className="aspect-[16/10] bg-gray-100" />
    <figcaption className="p-4 text-center">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      {caption && <p className="text-sm text-slate-600 mt-1">{caption}</p>}
      <button className="mt-3 text-sm text-emerald-700 hover:underline">Read more</button>
    </figcaption>
  </figure>
);

export default function Projects() {
  // Placeholder list; replace with real items later
  const list: Project[] = [
    { title: "Attic renovation" },
    { title: "Deck & patio" },
    { title: "Laminate flooring" },
    { title: "Garden overhaul" },
    { title: "Fence & gate" },
    { title: "Extension" },
  ];

  return (
    <section id="projects" className="bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-16">
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Våra tjänster</h2>
          <div className="w-16 h-[2px] bg-emerald-500 mx-auto mt-3" />
        </header>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p, i) => (
            <ProjectCard key={i} title={p.title} caption={p.caption} />
          ))}
        </div>
      </div>
    </section>
  );
}
