import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  FaJava, FaReact, FaDocker, FaGitAlt, FaNodeJs,
  FaDatabase, FaServer, FaCode, FaTools
} from "react-icons/fa";
import {
  SiSpringboot, SiSpring, SiTypescript, SiTailwindcss,
  SiPostgresql, SiExpress, SiPostman
} from "react-icons/si";


const skillCategories = [
  {
    title: "Backend Core",
    icon: FaServer,
    skills: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "Node.js"]
  },
  {
    title: "Frontend & UI",
    icon: FaCode,
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    title: "Database",
    icon: FaDatabase,
    skills: ["PostgreSQL", "MongoDB", "JDBC"]
  },
  {
    title: "DevOps & Tools",
    icon: FaTools,
    skills: ["Docker", "Git", "Postman", "Vercel"]
  }
];

const techIcons = [
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Spring Data JPA", icon: SiSpring },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Docker", icon: FaDocker },
  { name: "Git", icon: FaGitAlt },
  { name: "Postman", icon: SiPostman },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Avatar className="w-48 h-48 md:w-64 md:h-64 mb-6 border-4 border-primary/20 shadow-xl mx-auto" data-testid="img-avatar">
            <AvatarImage src="/assets/me.png" alt="Emerson Mesquita" />
            <AvatarFallback className="text-4xl font-bold">EM</AvatarFallback>
          </Avatar>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre Mim
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Transformando requisitos complexos em software funcional e elegante.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch mb-12">


          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <Card className="p-6 h-full flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4 text-primary">Bio Profissional</h3>
              <div className="flex-grow">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Desenvolvedor Full Stack com foco central em <strong>Java e Spring Boot</strong>.
                  Combino sólida compreensão de arquitetura backend e APIs REST com a capacidade de criar interfaces modernas.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Minha experiência inclui o desenvolvimento de aplicações Desktop com integração via <strong>JDBC e PostgreSQL</strong>,
                  além de vivência no ecossistema <strong>React e Node.js</strong>. Minha atuação prévia em infraestrutura
                  me garante uma visão sistêmica privilegiada para resolução de problemas.
                </p>
              </div>
            </Card>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="h-full"
          >
            <Card className="p-6 h-full flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                Stack Tecnológica
              </h3>


              <div className="space-y-6 flex-grow flex flex-col justify-center">
                {skillCategories.map((category, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                      <category.icon className="w-4 h-4 text-primary" />
                      <span>{category.title}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill}
                          className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-md text-xs font-medium border border-border/50 hover:bg-secondary transition-colors cursor-default"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-6 overflow-hidden shadow-md bg-muted/30 border-none">
            <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {techIcons.map((tech) => (
                  <li key={tech.name}>
                    <div className="flex flex-col items-center gap-2 group">
                      <tech.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </li>
                ))}
              </ul>
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                {techIcons.map((tech) => (
                  <li key={`${tech.name}-duplicate`}>
                    <div className="flex flex-col items-center gap-2 group">
                      <tech.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}