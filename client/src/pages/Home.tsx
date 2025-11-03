import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Services />
        <Projects />
        <ContactForm />
      </main>
    </>
  );
}
