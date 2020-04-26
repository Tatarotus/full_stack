import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  FiTrash2,
  FiPower,
  FiChevronRight,
  FiChevronLeft
} from "react-icons/fi";

import api from "../../services/api";

import logo from "../../assets/Logo.svg";
import "./styles.css";

export default () => {
  const ongId = localStorage.getItem("ongId");
  const history = useHistory();
  if (!ongId) history.push("/");
  const ongName = localStorage.getItem("ongName");
  const [incidents, setIncidents] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [pagination, setPagination] = useState(1);

  const apiCall = function(route) {
    api
      .get(route, {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setIncidents(response.data.incidents);
        setTotalCount(response.data.count);
      });
  };

  useEffect(() => {
    apiCall("profile");
  }, [ongId]);

  function handlePaginationNext() {
    let pageUrl = `profile?page=${String(pagination + 1)}`;

    apiCall(pageUrl);
    setPagination(pagination + 1);
  }

  function handlePaginationPrev() {
    let pageUrl = `profile?page=${String(pagination - 1)}`;

    apiCall(pageUrl);
    setPagination(pagination - 1);
  }

  console.log(incidents);
  function handleDel(id) {
    api
      .delete(`incidents/${id}`, {
        headers: { Authorization: ongId }
      })
      .then(setIncidents(incidents.filter(incident => incident.id !== id)));
  }
  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <div className="profile-container">
      <header>
        <div className="first-segment">
          <img src={logo} draggable={false} alt="logo" className="logo" />
          <h2 className="Welcome">Bem-vindo, {ongName}</h2> {/*Max 15 Char. */}
        </div>
        <div className="second-segment">
          <button className="button">Criar</button>
          <div onClick={handleLogout} className="button logout">
            <FiPower />
          </div>
        </div>
      </header>
      <section className="profile-cases">
        <h2>Casos Registrados:</h2>
        <div className="cases">
          {incidents.map(incident => (
            <div key={incident.id} className="case">
              <h4>
                Caso:{" "}
                <span onClick={() => handleDel(incident.id)} className="del">
                  <FiTrash2 size="18px" />
                </span>
              </h4>
              <p>{incident.title}</p>
              <h4>Descrição:</h4>
              <p>{incident.description}</p>
              <div className="value">
                <h4>Valor:</h4>
                <p>
                  {Intl.NumberFormat("pt-Br", {
                    style: "currency",
                    currency: "BRL"
                  }).format(incident.value)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="paginationBtn">
          {pagination > 1 ? (
            <button className="button" onClick={handlePaginationPrev}>
              {" "}
              <FiChevronLeft size="25px" />
            </button>
          ) : (
            ""
          )}
          {totalCount > 6 && incidents.length === 6 ? (
            <>
              <button className="button" onClick={handlePaginationNext}>
                <FiChevronRight size="25px" />
              </button>
            </>
          ) : (
            ""
          )}
        </div>
      </section>
    </div>
  );
};
