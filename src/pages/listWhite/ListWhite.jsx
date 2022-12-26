import React from "react";
import "./ListWhite.css";
import imageBg from "../../assets/images/landing/imagesBG.jpg";
import logo from "../../assets/icons/logo.svg";
import arrowUp from "../../assets/icons/arrow-up.svg";

const ListWhite = () => {
  return (
    <section className="listWhite">
      <div className="listWhite_image">
        <img className="listWhite_bg" src={imageBg} alt="imagen de fondo" />
        <div className="listWhite_logo">
          <img src={logo} alt="logo" />
          <h3>Inhands</h3>
        </div>
        <div className="listWhite_Percentage">
          <h2>0%</h2>
        </div>
      </div>
      <div className="listWhite_form">
        <h2>
          la lista exclusiva para <br />
          nuestros usuarios
        </h2>
        <p>Serás uno de los primeros en tener acceso a nuestras colecciones:</p>
        <form className="listWhite_form_input" action="#">
          <input type="email" name="emails" placeholder="E-mail" />
          <hr />
          <button>
            <img src={arrowUp} alt="flecha" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default ListWhite;
