import Typewriter from "../components/typewriter";
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
          <Link to="/about" className="custom-button">
            <FaFileDownload className="icon" />
            <span className="button-underline"></span>
            <span className="button-text">Download CV</span>
          </Link>
          <Link className="custom-button" to="/projects">
            <span className="button-underline"></span>
            <span className="button-text">Visitar Projetos</span>
            <FaArrowRight className="icon" />
          </Link>
        </div>
        <div className="contact-icons">
          <a href="">
            <FaGithub className="icon" />
          </a>
          <a href="">
            <FaLinkedinIn className="icon" />
          </a>
          <a href="">
            <IoIosMail className="icon" />
          </a>
          <a href="">
            <FaWhatsapp className="icon" />
          </a>
        </div>
      </div>
      <div className="home_right">
        <div className="home_right_background"></div>
        <img src="./assets/Home.png" />
      </div>
    </div>
  );
}

export default Home;
