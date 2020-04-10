import React from "react";
import { FiChevronLeft } from "react-icons/fi";

import logo from "../../assets/Logo.svg";

import "./styles.css";

export default () => (
  <div className="new-incident-container">
    <section className="left">
      <img className="logo" src={logo} draggable={false} alt="logo" />
      <div className="case-entry-info">
        <h3>Registrar novos casos</h3>
        <p>
          Descreva seu caso em detalhes para encontrar herois que possam te
          ajudar a solucionar qualquer problema.
        </p>
      </div>
      <div className="go-home">
        <FiChevronLeft size="2rem" />
        <span>Voltar</span>
      </div>
    </section>
    <section className="right">
      <form>
        <input className="case" type="text" placeholder="Nome do caso" />
        <textarea placeholder="Descrição do caso"></textarea>
        <div className="value">
          <label htmlFor="price">Valor:</label>
          <input type="number" id="price" placeholder="R$ 60" />
        </div>
        <button className="button">Novo Caso</button>
      </form>
    </section>
  </div>
);
