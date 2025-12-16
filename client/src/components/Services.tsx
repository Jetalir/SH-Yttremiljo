import { TreePine, Hammer, Ruler } from "lucide-react";
import AnimateOnScroll from "./AnimateOnScroll";

export default function Services() {
  const services = [
    {
      icon: <Ruler className="text-cyan-600 w-8 h-8" />,
      title: "Bygg & Renovering",
      description:
        "Från mindre snickerier till större byggprojekt. Vi tar hand om allt från renovering, ombyggnad och tillbyggnad till fasadarbeten – med fokus på kvalitet och kundnöjdhet.",
    },
    {
      icon: <Hammer className="text-pink-600 w-8 h-8" />,
      title: "Altaner & Uteplatser",
      description:
        "Bygg en uteplats att trivas på. Vi designar och bygger altaner, trädäck, staket och pergolor – med rätt materialval och noggrant utfört hantverk för lång livslängd och snygg finish.",
    },
    
    {
      icon: <TreePine className="text-green-600 w-8 h-8" />,
      title: "Trädgård & Markarbete",
      description:
        "Vi hjälper dig skapa en vacker och hållbar utemiljö. Allt från markplanering, dränering och stensättning till planteringar och gräsmattor. Vi lägger grunden till en trädgård som håller över tid.",
    },
  ];

  return (
    <section id="services" className="bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-6 py-16">
      <AnimateOnScroll>
        <header className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Våra tjänster</h2>
          <div className="w-16 h-[2px] bg-sky-400 mx-auto mt-3" />
        </header>
        </AnimateOnScroll>

        <AnimateOnScroll>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-start space-y-4 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center space-x-4">
                <div>{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        </AnimateOnScroll>
      </div>
      
    </section>
  );
}

