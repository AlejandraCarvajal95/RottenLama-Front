import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.png";
import SearchBar from "../../components/SearchBar/SearchBar";
import "./principal.css";

const mockData = [
  "Rapidos y furiosos",
  "Los increibles",
  "Resident evil",
  "Naruto:the last",
  "la gorra"
];

const Principal = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [resultado, setResultado] = useState(null);

  return (
    <>
      <div className="navbar">
        <div className="brand">
          <img src={logo} alt="Logo" className="logo" />
          <span className="brand-text">
            Spitting <span className="brand-subtext">Llama</span>
          </span>
        </div>

        <div className="header">
          <SearchBar
            suggestions={mockData}
            onSearchSubmit={(titulo) => setResultado(titulo)}
          />

          <div className="menu-container">
            <button
              className="menu-button"
              onClick={() => setMenuAbierto(!menuAbierto)}
            >
              ☰
            </button>
            {menuAbierto && (
              <div className="dropdown-menu">
                <Link to="/categories">Categories</Link>
                <Link to="/my-reviews">My Reviews</Link>
                <Link to="/premieres">Premieres</Link>
                <Link to="/coming-soon">Coming Soon</Link>
              </div>
            )}
          </div>

          <div className="auth-buttons">
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>

      {/* Mostrar resultado fuera del navbar */}
      {resultado && (
        <div className="resultado-titulo">
          <p>Resultado: {resultado}</p>
        </div>
      )}
    </>
  );
};

export default Principal;

