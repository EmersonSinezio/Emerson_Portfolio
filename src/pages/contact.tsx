import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-left">
        <h1>Entre em contato</h1>
        <form action="">
          <div className="name-container">
            <div>
              <label htmlFor="">Primeiro nome</label>
              <input type="text" placeholder="Primeiro nome" />
            </div>
            <div>
              <label htmlFor="">Sobrenome</label>
              <input type="text" placeholder="Sobrenome" />
            </div>
          </div>
          <label htmlFor="">Email</label>
          <input type="email" placeholder="Seu_email@dominio.com" />
          <label htmlFor="">Mensagem</label>
          <textarea name="" id="" placeholder="Digite sua mensagem"></textarea>
          <input type="submit" name="" id="" value={"Enviar"} />
        </form>
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
      <div className="contact-right">
        <img src="./assets/contact.svg" alt="contact icon" />
      </div>
    </div>
  );
}
