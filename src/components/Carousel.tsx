import { useState, useEffect, useCallback } from "react";
import { FaChevronCircleRight, FaChevronCircleLeft } from "react-icons/fa";

// Tipos para o conteúdo dos slides
type SkillContent = {
  type: "skills";
  title: string;
  items: string[];
};

type CourseItem = {
  name: string;
  hours: string;
  institution: string;
};

type CourseContent = {
  type: "courses";
  title: string;
  items: CourseItem[];
};

type AboutContent = {
  type: "about-me";
  title: string;
};

type SlideContentType = SkillContent | CourseContent | AboutContent;

// Props do componente
interface CarouselProps {
  interval?: number;
}

// Conteúdo dos slides com tipagem explícita
const slidesContent: SlideContentType[] = [
  {
    type: "skills",
    title: "Habilidades",
    items: [
      "TypeScript",
      "React",
      "Node.js",
      "MongoDB",
      "HTML",
      "Css",
      "JavaScript",
      "TypeScript",
      "Sass",
      "Tailwind",
      "Git",
    ],
  },
  {
    type: "courses",
    title: "Educação",
    items: [
      {
        name: "Análise e Desenvolvimento de Sistemas",
        institution: "Universidade Estacio de Sá",
        hours: "",
      },
      {
        name: "Curso Desenvolvimento Web",
        hours: "50 horas",
        institution: "Programador Br",
      },
      {
        name: "Full Stack JavaScript",
        hours: "200 horas",
        institution: "Onebitcode",
      },
      {
        name: "Desenvolvedor Web Full Stack",
        institution: "Digital College",
        hours: "192 horas",
      },
    ],
  },
  {
    type: "about-me",
    title: "Sobre Mim",
  },
];

// Props do componente SlideContent
interface SlideContentProps {
  content: SlideContentType;
}

const SlideContent = ({ content }: SlideContentProps) => {
  switch (content.type) {
    case "skills":
      return (
        <div className="infoCard ">
          <h2>{content.title}</h2>
          <div className="skills">
            {content.items.map((skill, index) => (
              <span key={index} className="skill">
                {skill}
              </span>
            ))}
          </div>
        </div>
      );

    case "courses":
      return (
        <div className="infoCard courses">
          <h2>{content.title}</h2>
          <div className="courses-container">
            {content.items.map((course, index) => (
              <div className="course">
                <p key={index} id="course">
                  {course.name}
                </p>
                <span>{course.institution}</span>
                <span>{course.hours}</span>
              </div>
            ))}
          </div>
        </div>
      );

    case "about-me":
      return (
        <div className="infoCard about-me">
          <h2>{content.title}</h2>
          <div className="about-info">
            Desenvolvedor Full Stack apaixonado por tecnologia, com 3 anos de
            aprendizado em construção de soluções web. Iniciei minha jornada
            durante a pandemia através do curso <strong>Programador Br</strong>,
            onde descobri minha vocação para transformar linhas de código em
            experiências funcionais. Desde então, venho me dedicando ao estudo
            contínuo de tecnologias modernas e boas práticas de desenvolvimento.
          </div>
        </div>
      );

    default:
      return null;
  }
};

const Carousel = ({ interval = 5000 }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) =>
      prev === slidesContent.length - 1 ? 0 : prev + 1
    );
  }, []);

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? slidesContent.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide, interval]);

  return (
    <div
      className="carousel-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slidesContent.map((content, index) => (
          <div key={index} className="carousel-item">
            <div className="carousel-image">
              <SlideContent content={content} />
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-controls">
        <FaChevronCircleLeft
          className="carousel-button"
          onClick={prevSlide}
          size={32}
        />
        <FaChevronCircleRight
          className="carousel-button"
          onClick={nextSlide}
          size={32}
        />
      </div>

      <div className="carousel-indicators">
        {slidesContent.map((_, index) => (
          <button
            key={index}
            className={`carousel-indicator ${
              index === activeIndex ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
