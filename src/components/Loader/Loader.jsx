import React from "react";
import "./styles.css";
import logo from "../../assets/img/logo.png";

const Loader = () => {
  return (
    <div className="container-loader">
      <div className="img-loader">
        <img src={logo} alt="Loader" />
      </div>
      <h2>Cargando</h2>
    </div>
  );
};

export default Loader;
