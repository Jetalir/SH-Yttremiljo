import React from "react";

type HeroProps = {
  /** If your navbar is fixed and you want the hero to start BELOW it, set this to the navbar height (px).
   *  If you want the hero (image + text) to sit UNDER the navbar (i.e., behind it), leave at 0. */
  offsetBelowNavbarPx?: number;
  /** Overlay opacity on the right side (0–100). 60 = 60% */
  rightOverlayOpacity?: number;
  /** Background image URL for the right side */
  imageUrl?: string;
};

const Hero: React.FC<HeroProps> = ({
  offsetBelowNavbarPx = 0,         // keep 0 to render UNDER the navbar
  rightOverlayOpacity = 50,        // tweak 0..100 for your taste
  imageUrl = "/SHbg.jpg",
}) => {
  // Tailwind can't interpolate dynamic opacity tokens, so we inline the rgba overlay via style.
  const overlayOpacity = Math.max(0, Math.min(100, rightOverlayOpacity)) / 100;

  return (
    <section
      // 40/60 split on md+, single column on mobile
      // Add top padding IF you want hero to start BELOW a fixed navbar.
      className={`relative md:grid md:grid-cols-[2fr_3fr] ${
        offsetBelowNavbarPx ? "" : ""
      }`}
      style={{ paddingTop: offsetBelowNavbarPx ? offsetBelowNavbarPx : 0 }}
    >
      {/* LEFT (40%) — solid beige background */}
      <div className="bg-[#efe6da]">
        <div className="mx-auto max-w-screen-xl w-full px-4 md:px-6 py-16 md:py-24 min-h-screen flex flex-col">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
              Byggnationer & utemiljöer
            </h1>

            <div className="mt-8 pl-4 md:pl-5 border-l-2 border-sky-400 max-w-[520px]">
              <p className="text-slate-700 leading-relaxed">
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

      {/* RIGHT (60%) — sticky image, sits BEHIND everything else so later sections cover it */}
      <div className="relative hidden md:block -z-10">
        {/* Sticks to top of viewport; full viewport height */}
        <div className="sticky top-0 h-screen">
          <div
            className="relative h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            {/* Same beige as a translucent overlay so the image is visible but toned */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ backgroundColor: `rgba(239, 230, 218, ${overlayOpacity})` }} // #efe6da @ chosen opacity
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
