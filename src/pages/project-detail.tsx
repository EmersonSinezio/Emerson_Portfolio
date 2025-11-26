import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { getProject } from "@/lib/data";

export default function ProjectDetail() {
  const [, params] = useRoute("/project/:id");
  const projectId = params?.id || "";
  const project = getProject(projectId);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} - Emerson Mesquita Portfolio`;
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Projeto não encontrado</h1>
          <Link href="/">
            <Button data-testid="button-back-home">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para o Início
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link href="/">
            <Button variant="ghost" className="mb-8" data-testid="button-back">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Projetos
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <Badge className="mb-4 font-mono" data-testid="badge-category">
                {project.category.toUpperCase()}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-project-title">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground mb-6" data-testid="text-project-description">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {project.demoUrl && (
                  <Button asChild data-testid="button-demo">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" asChild data-testid="button-github">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Ver Código
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <div
              className={`aspect-video mb-12 rounded-lg overflow-hidden ${project.gif ? "cursor-pointer" : ""}`}
              onMouseEnter={() => project.gif && setIsHovering(true)}
              onMouseLeave={() => project.gif && setIsHovering(false)}
            >
              <img
                src={isHovering && project.gif ? project.gif : project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-opacity duration-300"
                data-testid="img-project-hero"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2 space-y-8">
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Sobre este Projeto</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.longDescription}
                  </p>
                </Card>

                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">Como Rodar Localmente</h2>
                  <ol className="space-y-3">
                    {project.howToRun.map((step, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-mono">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground font-mono text-sm pt-0.5">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </Card>

                {project.screenshots.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-semibold mb-4">Capturas de Tela</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.screenshots.map((screenshot, index) => (
                        <div
                          key={index}
                          className="aspect-video rounded-lg overflow-hidden bg-muted"
                        >
                          <img
                            src={screenshot}
                            alt={`Screenshot ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            data-testid={`img-screenshot-${index}`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Tecnologias</h3>
                  <div className="flex flex-col gap-2">
                    {project.techStack.map((tech) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        <span className="font-mono text-muted-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-mono text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
