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
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {index > 0 && <span className="text-slate-600">/</span>}
          {index === items.length - 1 ? (
            <span className="text-slate-700 font-medium">{item.label}</span>
          ) : (
            <Link
              to={item.path}
              className="text-slate-900 hover:text-sky-600 transition-colors font-medium"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
