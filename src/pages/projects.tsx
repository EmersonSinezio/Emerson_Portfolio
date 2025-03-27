import { useState } from "react";
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
              <h1 className="main-title">Projetos feitos</h1>
              <div className="title-underline"></div>
            </div>
            <p className="description-text">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="search-container">
            <span
              className={activeTab === "all" ? "active" : ""}
              onClick={() => setActiveTab("all")}
            >
              See All
            </span>
            <span
              className={activeTab === "frontend" ? "active" : ""}
              onClick={() => setActiveTab("frontend")}
            >
              See Front End
            </span>
            <span
              className={activeTab === "backend" ? "active" : ""}
              onClick={() => setActiveTab("backend")}
            >
              See Back End
            </span>
          </div>
          <div className="cards-container">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="card-wrapper">
                <div className="card">
                  <img
                    src={`https://dummyimage.com/72${item}x40${item}`}
                    alt="content"
                    className="card-image"
                  />
                  <h3 className="card-subtitle">Em breve</h3>
                  <h2 className="card-title">Projeto Sendo desenvolvido</h2>
                  <p className="card-text">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                  <a href="" className="card-link">
                    Ver Projeto
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
