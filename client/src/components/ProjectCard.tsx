// src/components/ProjectCard.tsx
import React from "react";
import { Link } from "react-router-dom";

export type Project = {
  title: string;
  caption?: string;
  imageSrc?: string;   // optional, in case you add real images later
  href?: string;       // optional link target for gallery
  slug?: string;       // category slug for routing
};

const ProjectCard: React.FC<Project> = ({ title, caption, imageSrc, href, slug }) => {
  const linkTo = href || (slug ? `/gallery/${slug}` : "#");

  return (
    <Link to={linkTo}>
      <figure className="relative group overflow-hidden cursor-pointer h-64 md:h-80 shadow-md hover:shadow-lg transition-shadow">
        <img
          src={imageSrc || "/SHbg.jpeg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Gradient overlay - always visible on mobile, hidden on desktop until hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />

        {/* Title - always visible on mobile, slides up on desktop hover */}
        <figcaption className="absolute bottom-0 left-0 right-0 p-3 md:p-4 transition-all duration-300
                             md:translate-y-full md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-95
                             md:bg-white/85 md:backdrop-blur-sm md:m-4 md:rounded-lg">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-base md:text-lg text-white md:text-slate-900">{title}</h3>
              {caption && <p className="text-sm text-white/90 md:text-slate-600 mt-1 hidden md:block">{caption}</p>}
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-white md:text-slate-700 whitespace-nowrap">
              <span>Visa projekt</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
};

export default ProjectCard;
