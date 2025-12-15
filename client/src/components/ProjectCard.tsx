// src/components/ProjectCard.tsx
import React from "react";

export type Project = {
  title: string;
  caption?: string;
  imageSrc?: string;   // optional, in case you add real images later
  href?: string;       // optional link target for "Read more"
};

const ProjectCard: React.FC<Project> = ({ title, caption, imageSrc }) => (
  <figure className="relative group overflow-hidden cursor-pointer h-64 md:h-80 shadow-md hover:shadow-lg transition-shadow">
    <img
      src={imageSrc || "/SHbg.jpeg"}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    />

    {/* Title box that slides up from bottom on hover */}
    <figcaption className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-5 md:p-6 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between">
      <div>
        <h3 className="font-bold text-base md:text-lg text-slate-900">{title}</h3>
        {caption && <p className="text-sm text-slate-600 mt-1">{caption}</p>}
      </div>
      <div className="flex gap-3 ml-4">
        <button className="w-8 h-8 rounded-full bg-white border border-slate-300 flex items-center justify-center hover:bg-slate-50 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
        </button>
        <button className="w-8 h-8 rounded-full bg-white border border-slate-300 flex items-center justify-center hover:bg-slate-50 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
          </svg>
        </button>
      </div>
    </figcaption>
  </figure>
);

export default ProjectCard;
