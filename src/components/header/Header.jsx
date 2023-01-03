import React from "react";
import logo from "../../assets/icons/logo.svg";
import "./Header.css";
import ImagePrincipal from "../imagePrincipal/ImagePrincipal";
import arrowUp from '../../assets/icons/arrow-up.svg'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header">
      <ImagePrincipal />

      <div className="header_text">
        <div className="header_logo">
          <img src={logo} alt="logo" />
          <h3>inhands</h3>
        </div>

        <div className="header_paragraph">
          <span className="header_textLine"></span>
          <p>
            Surge con la esperanza de impulsar un modelo de negocio sustentable
            en el que tú puedas participar abierta y libremente, un modelo en el
            que puedes tener garantías de retribución a cambio de la compra de
            un NFT. Un proyecto pensado para el trabajo en equipo y para la
            seguridad de tus productos en el mundo digital.
          </p>
        </div>
        <div className="header_button">
          <Link to={'/cooming'}>
            <button>Explorar colección del momento <img src={arrowUp} alt="" /></button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;
