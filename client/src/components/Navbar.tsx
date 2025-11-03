import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <span className="inline-block h-8 w-8 rounded bg-emerald-600" />
          <span className="font-semibold tracking-wide text-slate-900">SH YttreMiljö</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="hover:text-emerald-700">Services</a>
          <a href="#projects" className="hover:text-emerald-700">Projects</a>
          <a href="#contact" className="hover:text-emerald-700">Contact</a>
          <a href="#contact" className="rounded bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
            Get a quote
          </a>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-gray-100"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle navigation"
        >
          <div className="space-y-1.5">
            <div className="h-0.5 w-5 bg-slate-900" />
            <div className="h-0.5 w-5 bg-slate-900" />
            <div className="h-0.5 w-5 bg-slate-900" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t">
          <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-3 space-y-2 text-sm">
            <a href="#services" onClick={() => setOpen(false)} className="block py-2">Services</a>
            <a href="#projects" onClick={() => setOpen(false)} className="block py-2">Projects</a>
            <a href="#contact" onClick={() => setOpen(false)} className="block py-2">Contact</a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center rounded bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
            >
              Get a quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
