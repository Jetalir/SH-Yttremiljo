import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation to sections
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

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
    <footer className="bg-[#3d3428]">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

          {/* Company info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">SH YttreMiljö</h3>
            <p className="text-sm text-[#c4b5a0] leading-relaxed">
              Professionella bygg- och utemiljölösningar för privatpersoner och företag.
              Vi skapar hållbara och funktionella miljöer med kvalitet och hantverk.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Snabblänkar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" onClick={(e) => handleNavClick(e, "hero")} className="text-[#c4b5a0] hover:text-primary transition-colors">Hem</a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNavClick(e, "services")} className="text-[#c4b5a0] hover:text-primary transition-colors">Tjänster</a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleNavClick(e, "contact")} className="text-[#c4b5a0] hover:text-primary transition-colors">Kontakt</a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
            <ul className="space-y-2 text-sm text-[#c4b5a0]">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>sh-yttremiljo@hotmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>072-652 21 17</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Häljarp, Sverige</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#4a3f32]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#c4b5a0]">
            <p>© {new Date().getFullYear()} SH YttreMiljö. Alla rättigheter förbehållna.</p>
            <p>Byggnationer & Utemiljöer</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
