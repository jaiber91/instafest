import React from "react";
import ButtonV2 from "../../components/buttonV2/buttonV2";
import "./InfoCards.css";
import arrowUpRight from "../../assets/icons/arrow-up-right.svg";
import achicar from "../../assets/icons/achicar.png"
//import cardUtility from "../../assets/icons/cardUtility.svg";

const InfoCards = (props) => {
  return (
    <div className="infoCards">
        <div className="infoCards_sutitle">
        <p>
        Conoce los Utility NFT´s Inhans{" "}
      </p> 
        <button onClick={props.onClose}><img src={achicar} alt="icono de achicar" /></button>
        </div>
      
      <hr />
      <div className="infoCards_details">
        <div className="infoCards_details_btn">
          <ButtonV2  text="¿Qué es un utility NFT?" img={arrowUpRight} />
          <ButtonV2 text="¿Cómo funciona?" img={arrowUpRight} />
          <ButtonV2 text="Proyecto inhands" img={arrowUpRight} />
          <ButtonV2 text="Beneficios" img={arrowUpRight} />
          
        </div>
        <div className="infoCards_details_text">
          <div className="infoCards_details_utility">
            <h3>{props.title}</h3>
            <div className="infoCards_details_article">
              <p>
                {props.textElement}
              </p>
            </div>
            <div className="infoCards_details_articleImg">
              <img src={props.imageElement} alt="card" />
              <p>
              {/*El Utility NFT es un modelo de negocio que funciona a partir de
                tecnología blockchain, pero cuyo objetivo es brindarte la
                oportunidad de adquirir un activo digital que, no obstante,
                represente valor y utilidad material para ti. Con él, podrás
                tener acceso a eventos, premios, descuentos y otro tipo de
                beneficios tangibles.*/}  
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default InfoCards;
