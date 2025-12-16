import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative md:grid md:grid-cols-[2fr_3fr]">
      {/* Left side - Text content */}
      <div className="bg-primary">
        <div className="pl-20 md:pl-40 lg:pl-60 xl:pl-80 pr-8 md:pr-16 min-h-screen flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
              Trädgård & Utemiljö
            </h1>

            <div className="mt-8 md:mt-10 pl-4 md:pl-5 border-l-[2px] border-sky-400 max-w-[520px] opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Vi gör din drömträdgård verklighet. Plattläggning, trädäck, uteplatser,
                murar, rabatter och gräsmattor – vi fixar allt. Med många års erfarenhet
                inom markarbete, plantering, trädfällning och byggnation gör vi om din
                utemiljö till en plats du älskar. Kvalitet i varje steg, från start till mål.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Background image */}
      <div className="relative hidden md:block">
        <div
          className="fixed top-0 right-0 w-[60vw] h-screen -z-10 bg-cover bg-center"
          style={{
            backgroundImage: "url(/SHbg.jpeg)",
            backgroundColor: "rgba(239, 230, 218, 0.5)",
            backgroundBlendMode: "overlay"
          }}
        />
      </div>
    </section>
  );
};

export default Hero;