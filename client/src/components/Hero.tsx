import React from "react";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative md:grid md:grid-cols-[2fr_3fr]">
      {/* Left side - Text content */}
      <div className="bg-primary">
        <div className="pl-20 md:pl-40 lg:pl-60 xl:pl-80 pr-8 md:pr-16 min-h-screen flex flex-col justify-center">
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-900 opacity-0 animate-[fadeInUp_1s_ease-out_forwards]">
              Byggnationer & utemiljöer
            </h1>

            <div className="mt-8 md:mt-10 pl-4 md:pl-5 border-l-[2px] border-sky-400 max-w-[520px] opacity-0 animate-[fadeInUp_1s_ease-out_0.3s_forwards]">
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Vi hjälper privatpersoner och företag att skapa hållbara, trivsamma och
                funktionella miljöer – ute som inne. Med noggrant hantverk, tydlig dialog och
                fasta tidsramar tar vi hand om allt från markarbete och trädgårdsanläggning till
                byggnation och renovering – utan att kompromissa med kvalitet och
                hantverksskicklighet. Med oss får du en professionell process och ett utmärkt
                resultat.
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