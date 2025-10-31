import Typewriter from "../components/Typewriter";
import {
  FaArrowRight,
  FaFileDownload,
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
function Home() {
  return (
    <div className="home_container">
      <div className="home_left">
        <h2>Hi, I'm Emerson</h2>
        <Typewriter />
        <p>
          Olá tudo bem? espero que sim! Esse é meu portifólio, onde apresento
          alguns dos meus projetos desenvolvidos e conhecimentos envolvendo
          cursos e projetos pessoais.
        </p>
        <div className="home_buttons">
          <a
            href="/CV.pdf"
            download={"EmersonMesquita.pdf"}
            className="custom-button"
          >
            <FaFileDownload className="icon" />
            <span className="button-underline"></span>
            <span className="button-text">Currículo</span>
          </a>
          <Link className="custom-button" to="/projects">
            <span className="button-underline"></span>
            <span className="button-text">Visitar Projetos</span>
            <FaArrowRight className="icon" />
          </Link>
        </div>
        <div className="contact-icons">
          <a href="https://github.com/EmersonSinezio">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/emerson-sineziio">
            <FaLinkedinIn className="icon" />
          </a>
          <a href="mailto:emerson.sineziio@gmail.com">
            <IoIosMail className="icon" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5585992846060">
            <FaWhatsapp className="icon" />
          </a>
        </div>
      </div>
      <div className="home_right">
        <div className="home_right_background"></div>
        <img src="./assets/Home.png" className="home_right_image" alt="" />
      </div>
    </div>
  );
}

export default Home;
