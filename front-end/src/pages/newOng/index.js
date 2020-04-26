import React from "react";
import { FiChevronLeft } from "react-icons/fi";

import logo from "../../assets/Logo.svg";

import "./styles.css";

export default () => {
  return (
    <div className="new-ong-container">
      <section className="left">
        <img className="logo" src={logo} draggable={false} alt="logo" />
        <div className="case-entry-info">
          <h3>Registrar novas ongs</h3>
          <p>Insira aqui os dados de sua ong!</p>
        </div>
        <div className="go-home">
          <FiChevronLeft size="2rem" />
          <span>Voltar</span>
        </div>
      </section>
      <section className="right">
        <form>
          <input className="case" type="text" placeholder="Nome da Ong" />
          <input className="case" type="text" placeholder="email" />
          <input className="case" type="text" placeholder="cidade" />
          <input className="case" type="text" placeholder="(11) 2447-7709" />
          <div className="value">
            <label htmlFor="price">UF:</label>
            <input type="number" id="price" placeholder="SP" />
          </div>
          <button className="button">Nova Ong</button>
        </form>
      </section>
    </div>
  );

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validateUf(uf) {
    if (uf.length === 2) {
      return true;
    }
    return false;
  }

  function validatePhone(phone) {
    var re = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/;
    return re.test(String(phone));
  }
};
