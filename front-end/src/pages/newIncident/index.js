import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import logo from "../../assets/Logo.svg";

import "./styles.css";

import api from "../../services/api";

export default () => {
  const ongId = localStorage.getItem("ongId");
  const history = useHistory();

  if (!ongId) history.push("/");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value
    };
    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push("/todos-casos");
    } catch {
      alert("Erro ao cadastrar caso, tente novamente");
    }
  }

  return (
    <div className="new-incident-container">
      <section className="left">
        <img className="logo" src={logo} draggable={false} alt="logo" />
        <div className="case-entry-info">
          <h3>Registrar novos casods</h3>
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
        <form onSubmit={handleSubmit}>
          <input
            onChange={e => setTitle(e.target.value)}
            className="case"
            type="text"
            placeholder="Nome do caso"
          />
          <textarea
            onChange={e => setDescription(e.target.value)}
            placeholder="Descrição do caso"
          ></textarea>
          <div className="value">
            <label htmlFor="price">Valor:</label>
            <input
              onChange={e => setValue(e.target.value)}
              type="number"
              id="price"
              placeholder="R$ 60"
            />
          </div>
          <button className="button">Novo Caso</button>
        </form>
      </section>
    </div>
  );
};
