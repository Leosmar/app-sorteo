import React from "react";
import "./styles.css"
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <header className="container">
      <div className="logo">
      <img src={logo} alt="Logo" />
      </div>
      <h2>
        Sorteo diario 
      </h2>
    </header>
  );
};

export default Header;
