import React from "react";
import "./styles.css";

import logo from "../../assets/Logo.svg";
import hero from "../../assets/hero.svg";

export default () => (
  <div className="logon-container">
    <section className="left">
      <img src={logo} draggable={false} alt="logo" />
      <div className="logon-section">
        <form>
          <label className="logon" htmlFor="ong_id">
            Entre com sua ID:
          </label>
          <input type="text" id="ong_id" placeholder="Coloque aqui sua ID" />
          <button className="button">Enter</button>
        </form>
      </div>
    </section>
    <section className="right">
      <img src={hero} draggable={false} alt="hero-banner" />
    </section>
  </div>
);
