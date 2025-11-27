import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold font-mono mb-4 text-primary">
              {"<EM />"}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Desenvolvedor Full Stack Java especializado em microsserviços, Spring Boot
              e tecnologias web modernas.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              Links Rápidos
            </h3>
            <nav className="flex flex-col gap-2">
              <a
                href="#about"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-about"
              >
                Sobre
              </a>
              <a
                href="#projects"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-projects"
              >
                Projetos
              </a>
              <a
                href="#timeline"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-experience"
              >
                Experiência
              </a>
              <a
                href="#contact"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-footer-contact"
              >
                Contato
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 uppercase tracking-wide">
              Conectar
            </h3>
            <div className="flex items-center gap-2 mb-4">
              <Button
                size="icon"
                variant="outline"
                asChild
                data-testid="link-footer-github"
              >
                <a
                  href="https://github.com/EmersonSinezio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                asChild
                data-testid="link-footer-linkedin"
              >
                <a
                  href="https://www.linkedin.com/in/emerson-sineziio"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                asChild
                data-testid="link-footer-email"
              >
                <a
                  href="mailto:emerson.sineziio@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
            <Button
              variant="outline"
              size="sm"
              asChild
              data-testid="button-footer-cv"
              className="w-full"
            >
              <a href="/curriculo_emerson_ats.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download Curriculo
              </a>
            </Button>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Emerson Mesquita. Construído com React, TypeScript e Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
