export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block h-8 w-8 bg-emerald-600 rounded-sm" />
            <span className="font-semibold">SH YttreMiljö</span>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Kort företagsbeskrivning. Byt ut mot egen text.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Tjänster</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#services" className="hover:text-white">Renovering</a></li>
            <li><a href="#services" className="hover:text-white">Trädgård</a></li>
            <li><a href="#services" className="hover:text-white">Plattsättning</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Projekt</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#projects" className="hover:text-white">Referenser</a></li>
            <li><a href="#!" className="hover:text-white">Bildgalleri</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Kontakt</h3>
          <ul className="space-y-2 text-sm">
            <li>info@ertforetag.se</li>
            <li>000-000 00 00</li>
            <li>Gatuväg 1, 123 45 Stad</li>
          </ul>
          </div>
        </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-gray-400 flex items-center justify-between">
          <p>© {new Date().getFullYear()} SH YttreMiljö. Alla rättigheter förbehållna.</p>
          <p>Bygg & Trädgård</p>
        </div>
      </div>
    </footer>
  );
}
