import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

import logo from "../../assets/Logo.svg";
import api from "../../services/api";

import "./styles.css";

export default () => {
  const [newOngID, setNewOngID] = useState("Registar novas Ongs");
  const [name, setNewOngName] = useState("");
  const [email, setNewOngEmail] = useState("");
  const [city, setNewOngCity] = useState("");
  const [whatsapp, setNewOngPhone] = useState("");
  const [uf, setNewOngUF] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (validateEmail(email) && validateUF(uf) && validatePhone(whatsapp)) {
      try {
        const response = await api.post("ongs", {
          name,
          email,
          city,
          whatsapp,
          uf
        });
        setNewOngID(response.data.id);
        localStorage.setItem("ongId", response.data.id);
        localStorage.setItem("ongName", name);
        history.push("ong-id");
      } catch (err) {
        return alert(err);
      }
    } else {
      return alert("Dados invalidos!");
    }
  }

  return (
    <div className="new-ong-container">
      <section className="left">
        <img className="logo" src={logo} draggable={false} alt="logo" />
        <div className="case-entry-info">
          <h3>{newOngID}</h3>
          <p>Insira aqui os dados de sua ong</p>
        </div>
        <div className="go-home">
          <FiChevronLeft size="2rem" />
          <span>Voltar</span>
        </div>
      </section>
      <section className="right">
        <form onSubmit={handleSubmit}>
          <input
            onChange={e => setNewOngName(e.target.value)}
            type="text"
            placeholder="Nome da Ong"
          />
          <input
            onChange={e => setNewOngEmail(e.target.value)}
            type="text"
            placeholder="email"
          />
          <input
            onChange={e => setNewOngCity(e.target.value)}
            type="text"
            placeholder="cidade"
          />
          <input
            onChange={e => setNewOngPhone(e.target.value)}
            type="text"
            placeholder="(10) 2447-7709"
          />
          <div className="value">
            <label htmlFor="price">UF:</label>
            <input
              onChange={e => setNewOngUF(e.target.value.toUpperCase())}
              type="text"
              id="UF"
              placeholder="SP"
            />
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

  function validateUF(uf) {
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
