import React, { useState, usseEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiPower } from "react-icons/fi";

import api from "../../services/api";

import logo from "../../assets/Logo.svg";
import "./styles.css";

export default () => {
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");
  console.log(ongName);
  console.log(ongId);
  if (!ongId) {
    history.push("/");
  }
  return (
    <div className="profile-container">
      <header>
        <div className="first-segment">
          <img src={logo} draggable={false} alt="logo" className="logo" />
          <h2 className="Welcome">Bem-vindo, Ong Talmud</h2> {/*Max 15 Char. */}
        </div>

        <div className="second-segment">
          <button className="button">Criar</button>
          <div className="button logout">
            <FiPower />
          </div>
        </div>
      </header>
      <section className="profile-cases">
        <h2>Casos Registrados:</h2>
        <div className="cases">
          <div className="case">
            <h4>Caso:</h4>
            <p>Title Placeholder</p>

            <h4>Descrição:</h4>
            <p>
              Or sit amet, consectetur adipiscing elit. Vivamus dui ante, tempor
              ac lacinia at, efficitur quis lorem. Quisque elementum congue
              augue, vel convallis tellus. In sit ame
            </p>

            <div className="value">
              <h4>Valor:</h4>
              <p>R$ 199.99</p>
            </div>
          </div>
          <div className="case">
            <h4>Caso:</h4>
            <p>Title Placeholder</p>

            <h4>Descrição:</h4>
            <p>
              Or sit amet, consectetur adipiscing elit. Vivamus dui ante, tempor
              ac lacinia at, efficitur quis lorem. Quisque elementum congue
              augue, vel convallis tellus. In sit ame
            </p>

            <div className="value">
              <h4>Valor:</h4>
              <p>R$ 199.99</p>
            </div>
          </div>
          <div className="case">
            <h4>Caso:</h4>
            <p>Title Placeholder</p>

            <h4>Descrição:</h4>
            <p>
              Or sit amet, consectetur adipiscing elit. Vivamus dui ante, tempor
              ac lacinia at, efficitur quis lorem. Quisque elementum congue
              augue, vel convallis tellus. In sit ame
            </p>

            <div className="value">
              <h4>Valor:</h4>
              <p>R$ 199.99</p>
            </div>
          </div>
          <div className="case">
            <h4>Caso:</h4>
            <p>Title Placeholder</p>

            <h4>Descrição:</h4>
            <p>
              Or sit amet, consectetur adipiscing elit. Vivamus dui ante, tempor
              ac lacinia at, efficitur quis lorem. Quisque elementum congue
              augue, vel convallis tellus. In sit ame
            </p>

            <div className="value">
              <h4>Valor:</h4>
              <p>R$ 199.99</p>
            </div>
          </div>
          <div className="case">
            <h4>Caso:</h4>
            <p>Title Placeholder</p>

            <h4>Descrição:</h4>
            <p>
              Or sit amet, consectetur adipiscing elit. Vivamus dui ante, tempor
              ac lacinia at, efficitur quis lorem. Quisque elementum congue
              augue, vel convallis tellus. In sit ame
            </p>

            <div className="value">
              <h4>Valor:</h4>
              <p>R$ 199.99</p>
            </div>
          </div>
          <div className="case">
            <h4>Caso:</h4>
            <p>Title Placeholder</p>

            <h4>Descrição:</h4>
            <p>
              Or sit amet, consectetur adipiscing elit. Vivamus dui ante, tempor
              ac lacinia at, efficitur quis lorem. Quisque elementum congue
              augue, vel convallis tellus. In sit ame
            </p>

            <div className="value">
              <h4>Valor:</h4>
              <p>R$ 199.99</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
