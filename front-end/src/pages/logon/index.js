import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import api from "../../services/api";

import "./styles.css";

import logo from "../../assets/Logo.svg";
import hero from "../../assets/hero.svg";

export default () => {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("session", { id });

      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', response.data.name)

      history.push("todos-casos")
    } catch {
      alert("Falha no login, tente novament!");
    }
  }
  return (
    <div className="logon-container">
      <section className="left">
        <img src={logo} draggable={false} alt="logo" />
        <div className="logon-section">
          <form onSubmit={handleLogin}>
            <label className="logon" htmlFor="ong_id">
              Entre com sua ID:
            </label>
            <input
              type="text"
              id="ong_id"
              value={id}
              onChange={e => setId(e.target.value)}
              placeholder="Coloque aqui sua ID"
            />
            <button className="button">Enter</button>
          </form>
        </div>
      </section>
      <section className="right">
        <img src={hero} draggable={false} alt="hero-banner" />
      </section>
    </div>
  );
};
