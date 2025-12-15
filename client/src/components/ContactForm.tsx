import AnimateOnScroll from "./AnimateOnScroll";

export default function ContactForm() {
  return (
    <section id="contact" className="bg-[#f8f8f8] py-16">
      <AnimateOnScroll>
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Kontakt</h2>
          <div className="w-16 h-[2px] bg-sky-400 mx-auto mt-3" />
          <p className="text-slate-600 mt-6">
            För alla frågor kan ni alltid kontakta oss via detta kontaktformulär.
          </p>
        </header>

        {/* Form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Ditt namn</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Ditt namn"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">E-post</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="namn@exempel.se"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Ämne</label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Ämne"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Meddelande</label>
            <textarea
              className="w-full px-4 py-3 border border-slate-300 rounded h-40 resize-none focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Beskriv ditt projekt…"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-slate-900 font-medium rounded hover:bg-primary-hover transition-colors"
            >
              Skicka meddelande
            </button>
          </div>
        </form>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
