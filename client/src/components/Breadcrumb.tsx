import { Link } from "react-router-dom";

type BreadcrumbItem = {
  label: string;
  path: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-sm md:text-base">
      {items.map((item, index) => {
        const isCurrentPage = index === items.length - 1;

        return (
          <div key={index} className="flex items-center gap-2">
            {index > 0 && <span className="text-slate-600">/</span>}
            <Link
              to={item.path}
              className={`font-medium transition-colors ${
                isCurrentPage
                  ? "text-slate-900 underline decoration-2 underline-offset-4 decoration-sky-500"
                  : "text-slate-900 hover:text-sky-600"
              }`}
            >
              {item.label}
            </Link>
          </div>
        );
      })}
    </nav>
  );
}
