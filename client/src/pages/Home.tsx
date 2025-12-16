import Hero from "../components/Hero";
import ServicesWithProjects from "../components/ServicesWithProjects";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ServicesWithProjects />
        <ContactForm />
      </main>
    </>
  );
}
