import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { toast, Zoom, ToastContainer } from "react-toastify";
import api from "../api/api";

export default function Contact() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const sendMessage = {
      name: `${formData.get("firstName")}_${formData.get("lastName")}`,
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const promise = api.post("/send", sendMessage);

    toast.promise(promise, {
      pending: {
        render: "Enviando mensagem...",
        position: "top-center",
        transition: Zoom,
        theme: "colored",
      },
      success: {
        render: "Mensagem enviada com sucesso!",
        position: "top-center",
        autoClose: 3000,
        transition: Zoom,
        theme: "colored",
        hideProgressBar: false,
        closeOnClick: false,
      },
      error: {
        render: ({ data }) =>
          `Erro ao enviar: ${
            (data as any).message || "Tente novamente mais tarde"
          }`,
        position: "top-center",
        transition: Zoom,
        theme: "colored",
      },
    });

    try {
      await promise;
      form.reset();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="contact-container">
      <div className="contact-left">
        <ToastContainer />
        <h1>Entre em contato</h1>
        <form onSubmit={handleSubmit}>
          <div className="name-container">
            <div>
              <label>Primeiro nome</label>
              <input
                name="firstName"
                type="text"
                placeholder="Primeiro nome"
                required
              />
            </div>
            <div>
              <label>Sobrenome</label>
              <input
                name="lastName"
                type="text"
                placeholder="Sobrenome"
                required
              />
            </div>
          </div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Seu_email@dominio.com"
            required
          />
          <label>Mensagem</label>
          <textarea name="message" placeholder="Digite sua mensagem" required />
          <input type="submit" value="Enviar" />
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
