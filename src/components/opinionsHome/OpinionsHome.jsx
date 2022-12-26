import React from "react";
import "./OpinionsHome.css";
import CardOpinion from "../cardOpinion/CardOpinion";
import arrowleft from "../../assets/icons/arrow-left.svg";

const OpinionsHome = () => {
  return (
    <div className="opinions">
      <div className="opinions_title">
        <h1>Opinión</h1> <span>/</span> <span>Inhands en los medios</span>
      </div>
      <div className="opinions_slider">
        <div className="opinions_slider_cards">
          <div className="opinions_slider_cards_arrowleft">
            <a href="#">
              <img src={arrowleft} alt="flecha izquierdaq" />
            </a>
          </div>
          <CardOpinion
            title="Headline"
            date="25/12/2022"
            text="Resumen corto noticia, de dos frases. 
                    Lorem ipsum dolor siet lalalaala."
            more="Leer completa"
          />
          <CardOpinion
            title="Headline"
            date="25/12/2022"
            text="Resumen corto noticia, de dos frases. 
                    Lorem ipsum dolor siet lalalaala."
            more="Leer completa"
          />
          <CardOpinion
            title="Headline"
            date="25/12/2022"
            text="Resumen corto noticia, de dos frases. 
                    Lorem ipsum dolor siet lalalaala."
            more="Leer completa"
          />
           <div className="opinions_slider_cards_arrowRight">
            <a href="#">
              <img src={arrowleft} alt="flecha izquierdaq" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpinionsHome;
