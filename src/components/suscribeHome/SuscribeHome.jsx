import React from "react";
import "./Suscribe.css";
import CircleBlack from "../../assets/images/landing/circleBlack.svg";
import arrowUp from "../../assets/icons/arrow-up.svg";

const suscribeHome = () => {
  return (
    <div className="suscribeHome">
      <div className="suscribeHome_image">
        <img src={CircleBlack} alt="circulo negro" />
      </div>
      <div className="suscribeHome_form">
        <h2>no te pierdas nunca <br /> una colección</h2>
        <p>
          En este portal podrás seguir cada una de las noticias y novedades
          alrededor del lanzamiento de los Utility NFT de Instafest.{" "}
        </p>
        <form className="suscribeHome_form_input" action="#">
         <input type="email" name="emails" placeholder="E-mail" />
         <hr />
            <button><img src={arrowUp} alt="flecha" /></button>
        </form>
      </div>
    </div>
  );
};

export default suscribeHome;
