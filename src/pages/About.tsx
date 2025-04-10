import { FaChevronDown, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Carousel from "../components/Carousel";

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

          <Carousel interval={3000} />

          <div className="contactLinks">
            <a
              href="https://github.com/EmersonSinezio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github">
                <FaGithub />
              </i>
            </a>
            <a
              href="https://linkedin.com/in/emerson-sineziio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin">
                <FaLinkedinIn />
              </i>
            </a>
            <a href="mailto:emerson.sineziio@gmail.com">
              <i className="fas fa-envelope">
                <IoIosMail />
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
