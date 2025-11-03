export default function ContactForm() {
  return (
    <section id="contact" className="bg-white">
      <div className="px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold">Kontakta oss</h2>
          <p className="mt-4 text-gray-600">
            Kort text/CTA. Byt ut mot er egen.
          </p>
          <div className="mt-8 space-y-4 text-sm">
            <p><strong>Telefon:</strong> 000-000 00 00</p>
            <p><strong>E-post:</strong> info@ertforetag.se</p>
            <p><strong>Adress:</strong> Gatuväg 1, 123 45 Stad</p>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-lg border p-6 grid grid-cols-1 gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Förnamn</label>
              <input className="mt-1 w-full rounded border px-3 py-2" placeholder="Förnamn" />
            </div>
            <div>
              <label className="block text-sm font-medium">Efternamn</label>
              <input className="mt-1 w-full rounded border px-3 py-2" placeholder="Efternamn" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium">E-post</label>
            <input type="email" className="mt-1 w-full rounded border px-3 py-2" placeholder="namn@exempel.se" />
          </div>

          <div>
            <label className="block text-sm font-medium">Meddelande</label>
            <textarea className="mt-1 w-full rounded border px-3 py-2 h-28" placeholder="Beskriv ditt projekt…" />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-gray-500">Vi återkommer inom 24 timmar.</p>
            <button className="rounded bg-emerald-600 px-5 py-2 text-white hover:bg-emerald-700">
              Skicka
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
