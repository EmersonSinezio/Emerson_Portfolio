import { useState } from "react";
import { projects } from "../data/Projects";
export default function Projects() {
  const [activeTab, setActiveTab] = useState<"all" | "frontend" | "backend">(
    "all"
  );
  return (
    <div>
      <section className="section-container">
        <div className="content-container">
          <div className="header-wrapper">
            <div className="title-container">
              <h1 className="main-title">Projetos Destaques</h1>
              <div className="title-underline"></div>
            </div>
            <p className="description-text">
              Esta seção reúne trabalhos desenvolvidos ao longo de dois anos,
              incluindo projetos pessoais, estudos técnicos e recriações de
              sistemas com as versões atualizadas de minhas habilidades. O
              objetivo é apresentar não apenas códigos, mas a trajetória de
              aprendizado e aprimoramento constante.
            </p>
          </div>
          <div className="search-container">
            <span
              className={activeTab === "all" ? "active" : ""}
              onClick={() => setActiveTab("all")}
            >
              Ver Todos
            </span>
            <span
              className={activeTab === "frontend" ? "active" : ""}
              onClick={() => setActiveTab("frontend")}
            >
              Ver Front End
            </span>
            <span
              className={activeTab === "backend" ? "active" : ""}
              onClick={() => setActiveTab("backend")}
            >
              Ver Back End
            </span>
          </div>
          <div className="cards-container">
            {projects.map(
              (item) =>
                item.type === activeTab ||
                (activeTab === "all" ? (
                  <div key={item.id} className="card-wrapper">
                    <div className="card">
                      <img
                        src={item.image}
                        alt="content"
                        className="card-image"
                      />
                      <h3 className="card-subtitle">{item.tecs}</h3>
                      <h2 className="card-title">{item.title}</h2>
                      <p className="card-text">{item.description}</p>
                      <a href={item.link} className="card-link" target="_blank">
                        <button>Ver Projeto</button>
                      </a>
                    </div>
                  </div>
                ) : activeTab === "frontend" ? (
                  item.type === "Front-end" ? (
                    <div key={item.id} className="card-wrapper">
                      <div className="card">
                        <img
                          src={item.image}
                          alt="content"
                          className="card-image"
                        />
                        <h3 className="card-subtitle">{item.tecs}</h3>
                        <h2 className="card-title">{item.title}</h2>
                        <p className="card-text">{item.description}</p>
                        <a
                          href={item.link}
                          className="card-link"
                          target="_blank"
                        >
                          <button>Ver Projeto</button>
                        </a>
                      </div>
                    </div>
                  ) : null
                ) : activeTab === "backend" ? (
                  item.type === "Back-end" ? (
                    <div key={item.id} className="card-wrapper">
                      <div className="card">
                        <img
                          src={item.image}
                          alt="content"
                          className="card-image"
                        />
                        <h3 className="card-subtitle">{item.tecs}</h3>
                        <h2 className="card-title">{item.title}</h2>
                        <p className="card-text">{item.description}</p>
                        <a
                          href={item.link}
                          className="card-link"
                          target="_blank"
                        >
                          <button>Ver Projeto</button>
                        </a>
                      </div>
                    </div>
                  ) : null
                ) : null)
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
