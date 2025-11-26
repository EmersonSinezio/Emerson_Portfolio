import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { TimelineSection } from "@/components/timeline-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Emerson Mesquita - Desenvolvedor Fullstack Java | Portfólio";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Portfólio de Emerson Mesquita, um Desenvolvedor Fullstack Java especializado em Spring Boot, microsserviços, React e tecnologias web modernas. Veja meus projetos e experiência."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Portfólio de Emerson Mesquita, um Desenvolvedor Fullstack Java especializado em Spring Boot, microsserviços, React e tecnologias web modernas. Veja meus projetos e experiência.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <TimelineSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
