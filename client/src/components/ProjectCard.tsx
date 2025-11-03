// src/components/ProjectCard.tsx
import React from "react";

export type Project = {
  title: string;
  caption?: string;
  imageSrc?: string;   // optional, in case you add real images later
  href?: string;       // optional link target for "Read more"
};

const ProjectCard: React.FC<Project> = ({ title, caption, imageSrc, href }) => (
  <figure className="rounded-lg overflow-hidden border bg-white hover:shadow-md transition">
    {imageSrc ? (
      <img
        src={imageSrc}
        alt={title}
        className="aspect-[16/10] w-full object-cover bg-gray-100"
        loading="lazy"
      />
    ) : (
      <div className="aspect-[16/10] bg-gray-100" />
    )}

    <figcaption className="p-4 text-center">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      {caption && <p className="text-sm text-slate-600 mt-1">{caption}</p>}
      {href ? (
        <a href={href} className="mt-3 inline-block text-sm text-emerald-700 hover:underline">
          Read more
        </a>
      ) : (
        <button className="mt-3 text-sm text-emerald-700 hover:underline">Read more</button>
      )}
    </figcaption>
  </figure>
);

export default ProjectCard;
