import { useState } from "react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setFormStatus("success");
        form.reset();
        // Reset success message after 5 seconds
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      setFormStatus("error");
    }
  };

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

        {/* Success Message */}
        {formStatus === "success" && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            Tack för ditt meddelande! Vi återkommer så snart som möjligt.
          </div>
        )}

        {/* Error Message */}
        {formStatus === "error" && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            Något gick fel. Vänligen försök igen eller kontakta oss direkt.
          </div>
        )}

        {/* Form */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          {/* Hidden input for Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Ditt namn</label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="Ditt namn"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">E-post</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
                placeholder="namn@exempel.se"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Ämne</label>
            <input
              type="text"
              name="subject"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Ämne"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Meddelande</label>
            <textarea
              name="message"
              required
              className="w-full px-4 py-3 border border-slate-300 rounded h-40 resize-none focus:outline-none focus:ring-2 focus:ring-sky-400"
              placeholder="Beskriv ditt projekt…"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="px-8 py-3 bg-primary text-slate-900 font-medium rounded hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus === "submitting" ? "Skickar..." : "Skicka meddelande"}
            </button>
          </div>
        </form>
      </div>
      </AnimateOnScroll>
    </section>
  );
}
