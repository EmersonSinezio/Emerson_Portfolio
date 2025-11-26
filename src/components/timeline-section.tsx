import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap } from "lucide-react";
import type { TimelineEntry } from "@shared/schema";
import { timeline } from "@/lib/data";

function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const isLeft = index % 2 === 0;
  const Icon = entry.type === "experience" ? Briefcase : GraduationCap;

  const formatDate = (date: string) => {
    const d = new Date(date);
    return d.toLocaleDateString("pt-BR", { year: "numeric", month: "short" });
  };

  return (
    <div ref={ref} className="relative">
      <div className={`lg:grid lg:grid-cols-2 lg:gap-8 ${!isLeft ? 'lg:grid-flow-dense' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mb-8 lg:mb-16 ${!isLeft ? 'lg:col-start-2' : ''}`}
        >
          <Card className="p-6 hover-elevate transition-all" data-testid={`card-timeline-${entry.id}`}>
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <Badge
                  variant="secondary"
                  className="mb-2 font-mono text-xs"
                  data-testid={`badge-timeline-type-${entry.id}`}
                >
                  {entry.type === "experience" ? "Experiência Profissional" : "Educação"}
                </Badge>
                <h3 className="text-xl font-semibold mb-1" data-testid={`text-timeline-title-${entry.id}`}>
                  {entry.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-1" data-testid={`text-timeline-org-${entry.id}`}>
                  {entry.organization}
                  {entry.location && <span className="mx-2">•</span>}
                  {entry.location}
                </p>
                <p className="text-sm font-mono text-muted-foreground" data-testid={`text-timeline-date-${entry.id}`}>
                  {formatDate(entry.startDate)} - {entry.endDate ? formatDate(entry.endDate) : "Atualmente"}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-4 leading-relaxed">
              {entry.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {entry.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="font-mono text-xs"
                  data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        </motion.div>

        <div className={`hidden lg:flex items-center justify-center ${!isLeft ? 'lg:col-start-1' : ''}`}>
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg relative z-10"
          />
        </div>
      </div>
    </div>
  );
}

export function TimelineSection() {
  return (
    <section id="timeline" className="py-16 md:py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Experiência e Educação
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Minha jornada profissional e formação acadêmica
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />

          {timeline.map((entry, index) => (
            <TimelineItem key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
