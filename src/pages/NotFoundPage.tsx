import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage: React.FC = () => {
  return (
    <div className="notFound-container">
      <div className="notFound-left">
        <h1>404</h1>
        <p>Página não encontrada</p>
        <p>Aparentemente houve algum erro no caminho</p>
        <Link to={"/"} className="custom-button">
          Voltar
        </Link>
      </div>
      <div className="notFound-right">
        <img src="./assets/404.svg" alt="404 not found image" />
      </div>
    </div>
  );
};

export default NotFoundPage;
