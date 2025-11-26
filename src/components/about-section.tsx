import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import type { Skill } from "@shared/schema";

const skills: Skill[] = [
  { name: "Java", proficiency: 95, category: "Backend" },
  { name: "Spring Boot", proficiency: 90, category: "Backend" },
  { name: "React", proficiency: 85, category: "Frontend" },
  { name: "Node.js", proficiency: 80, category: "Backend" },
  { name: "PostgreSQL", proficiency: 85, category: "Database" },
  { name: "TypeScript", proficiency: 80, category: "Frontend" },
  { name: "Docker", proficiency: 70, category: "DevOps" },
  { name: "Git", proficiency: 85, category: "DevOps" },
];

import { FaJava, FaReact, FaDocker, FaGitAlt, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiSpringboot, SiSpring, SiHibernate, SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb, SiExpress, SiPostman, SiVercel } from "react-icons/si";

const techIcons = [
  { name: "Java", icon: FaJava },
  { name: "Spring Boot", icon: SiSpringboot },
  { name: "Spring Data JPA", icon: SiSpring },
  { name: "Hibernate", icon: SiHibernate },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Express.js", icon: SiExpress },
  { name: "TypeScript", icon: SiTypescript },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Docker", icon: FaDocker },
  { name: "Git", icon: FaGitAlt },
  { name: "Postman", icon: SiPostman },
  { name: "Vercel", icon: SiVercel },
];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setWidth(skill.proficiency), delay);
    }
  }, [isInView, skill.proficiency, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{skill.name}</span>
        <span className="text-sm text-muted-foreground font-mono">{skill.proficiency}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Sobre Mim
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Apaixonado por criar soluções robustas e escaláveis
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center md:items-start"
          >
            <Avatar className="w-48 h-48 md:w-64 md:h-64 mb-6 border-4 border-primary/20" data-testid="img-avatar">
              <AvatarImage src="/public/assets/me.png" alt="Emerson Mesquita" />
              <AvatarFallback className="text-4xl font-bold">EM</AvatarFallback>
            </Avatar>

            <Card className="p-6 w-full">
              <h3 className="text-xl font-semibold mb-4">Sobre Mim</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Desenvolvedor Full Stack com foco central em <strong>Java e Spring Boot</strong>, com sólida compreensão de arquitetura backend, APIs REST e persistência de dados. Possuo experiência prática recente no desenvolvimento de aplicações Desktop com integração via <strong>JDBC e PostgreSQL</strong>, aplicando padrões de projeto como DAO e MVC.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Complemento meu perfil com vivência no ecossistema <strong>JavaScript (React, Node.js)</strong> e atuação profissional em suporte técnico e infraestrutura de TI, o que me conferiu visão sistêmica de resolução de problemas.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-6 mb-6">
              <h3 className="text-xl font-semibold mb-6">Competências Técnicas</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} delay={index * 100} />
                ))}
              </div>
            </Card>

            <Card className="p-6 overflow-hidden">
              <h3 className="text-xl font-semibold mb-6">Tecnologias</h3>
              <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                  {techIcons.map((tech) => (
                    <li key={tech.name}>
                      <div className="flex flex-col items-center gap-2">
                        <tech.icon className="w-12 h-12 text-muted-foreground hover:text-primary transition-colors" />
                        <span className="text-xs font-mono text-muted-foreground">{tech.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                  {techIcons.map((tech) => (
                    <li key={`${tech.name}-duplicate`}>
                      <div className="flex flex-col items-center gap-2">
                        <tech.icon className="w-12 h-12 text-muted-foreground hover:text-primary transition-colors" />
                        <span className="text-xs font-mono text-muted-foreground">{tech.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
