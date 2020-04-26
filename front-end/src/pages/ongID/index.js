import React from "react";
import { Link } from "react-router-dom";

export default () => {
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");
  return (
    <div style={{ textAlign: "center", fontSize: "30px" }}>
      <h1>Sua ID:</h1>
      <h3>{ongId}</h3>
      <Link to="/">
        <button
          style={{
            marginTop: "2em",
            outline: "none",
            border: "none",
            padding: "1em",
            background: "blue",
            color: "white"
          }}
        >
          {" "}
          Inicio
        </button>
      </Link>
    </div>
  );
};
