import { FaChevronDown } from "react-icons/fa";
export default function About() {
  return (
    <div className="about-container">
      <div className="aboutContainer">
        <div
          className="aboutAnimation"
          style={{ left: "25%", top: "15%" }}
        ></div>
        <div
          className="aboutAnimation"
          style={{ right: "20%", bottom: "10%" }}
        ></div>

        <div className="about-content">
          <header className="about-header">
            <img
              src="./assets/me.png"
              alt="Foto de Perfil"
              className="profileImg"
            />
            <h1>Emerson Mesquita</h1>
            <p className="bio">
              Desenvolvedor Front-End especializado em criar interfaces fluidas
              e responsivas. Com 5 anos de experiência em desenvolvimento web,
              foco em soluções modernas utilizando React e TypeScript.
            </p>
          </header>

          <div className="about-arrow">
            <FaChevronDown className="about-icon" />
          </div>

          <div className="infoGrid">
            <div className="infoCard">
              <h2>Habilidades</h2>
              <div className="skills">
                {[
                  "TypeScript",
                  "React",
                  "Node.js",
                  "AWS",
                  "UI/UX",
                  "Docker",
                  "Git",
                  "Agile",
                ].map((skill, index) => (
                  <span key={index} className="skill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="infoCard">
              <h2>Cursos realizados</h2>
              <p>
                Curso Desenvolvimento Web - Programador Br
                <br />
                <span>50 horas</span>
              </p>
              <p>
                Full Stack JavaScript - Onebitcode
                <br />
                <span>200 horas</span>
              </p>
              <p>
                Desenvolvedor Web Full Stack - Digital College
                <br />
                <span>192 horas</span>
              </p>
            </div>

            <div className="infoCard">
              <h2>Educação</h2>
              <p>
                Análise e Desenvolvimento de Sistemas
                <br />
                Universidade Estacio de Sá (2022 - Presente)
              </p>
            </div>
          </div>

          <div className="contactLinks">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:contato@portfolio.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
