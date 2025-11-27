import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend">("all");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "all") return true;
    if (activeTab === "frontend") return project.category === "Front-end";
    if (activeTab === "backend") return project.category === "Back-end";
    return false;
  });

  return (
    <section id="projects" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Projetos Destaques
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Esta seção reúne trabalhos desenvolvidos ao longo de dois anos,
              incluindo projetos pessoais, estudos técnicos e recriações de
              sistemas com as versões atualizadas de minhas habilidades. O
              objetivo é apresentar não apenas códigos, mas a trajetória de
              aprendizado e aprimoramento constante.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={activeTab === "all" ? "default" : "outline"}
            onClick={() => setActiveTab("all")}
            className="min-w-[120px]"
          >
            Ver Todos
          </Button>
          <Button
            variant={activeTab === "frontend" ? "default" : "outline"}
            onClick={() => setActiveTab("frontend")}
            className="min-w-[120px]"
          >
            Ver Front End
          </Button>
          <Button
            variant={activeTab === "backend" ? "default" : "outline"}
            onClick={() => setActiveTab("backend")}
            className="min-w-[120px]"
          >
            Ver Back End
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col group">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button asChild variant="secondary">
                      <a href={project.demoUrl || project.githubUrl} target="_blank" rel="noopener noreferrer">
                        Ver Projeto <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <span className="text-primary text-sm font-mono font-medium mb-2 block">
                    {project.techStack.join(" · ")}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <Link href={`/project/${project.id}`}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors cursor-pointer">
                      Ver Detalhes
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
