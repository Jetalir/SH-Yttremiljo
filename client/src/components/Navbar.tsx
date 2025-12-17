import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation to sections
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setOpen(false);

    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-md"
          : "bg-white/20 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-15 flex items-center justify-between">
        {/* Logo */}
        <a href="/" onClick={(e) => handleNavClick(e, "hero")} className="flex items-center gap-3">
          <span className="text-2xl font-bold text-slate-900">SH YttreMiljö AB</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, "hero")}
            className="text-slate-900 hover:text-sky-600 transition-colors font-medium"
          >
            Hem
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, "services")}
            className="text-slate-900 hover:text-sky-600 transition-colors font-medium"
          >
            Tjänster
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "contact")}
            className="px-6 py-2.5 bg-primary text-slate-900 font-medium rounded hover:bg-primary-hover transition-colors"
          >
            Kontakt
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-lg hover:bg-black/5 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <div className="space-y-1.5">
            <div className={`h-0.5 w-6 bg-slate-900 transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <div className={`h-0.5 w-6 bg-slate-900 transition-opacity ${open ? "opacity-0" : ""}`} />
            <div className={`h-0.5 w-6 bg-slate-900 transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "hero")}
              className="block px-4 py-3 text-slate-900 hover:bg-slate-100 rounded transition-colors"
            >
              Hem
            </a>
            <a
              href="#services"
              onClick={(e) => handleNavClick(e, "services")}
              className="block px-4 py-3 text-slate-900 hover:bg-slate-100 rounded transition-colors"
            >
              Tjänster
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="block px-4 py-3 bg-primary text-slate-900 font-medium text-center rounded hover:bg-primary-hover transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
