import React from "react";
import "./Knowutility.css";
import imgCard from "../../assets/images/landing/cardInfoHome.svg";
import Faqs from "../faqs/Faqs";

const Knowutility = () => {
  return (
    <section className="Knowutility">
      <div className="Knowutility_first">
        <h1>
          conoce los <br /> utilitis nft´s <br /> inhands.
        </h1>
        <div>
          <div className="Knowutility_cards">
            <div className="Knoeutility_card">
              <h3>
                ¿qué es <br /> un utility <br /> nft?
              </h3>
            </div>
            <div className="Knoeutility_cardhow">
              <h3>
                ¿cómo <br /> funciona?
              </h3>
            </div>
            <div className="Knoeutility_project">
              <h3>
                proyecto <br /> inhands
              </h3>
            </div>
            <div className="Knoeutility_beneficios">
              <h3>beneficios</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="Knowutility_faqs">
        <h2>faqs</h2>
        <div className="Knowutility_faqsList">
          <Faqs number="01" questions="¿Qué es un criptoactivo?" />
          <Faqs number="02" questions="¿Qué es un NFT y para qué sirve?" />
          <Faqs
            number="03"
            questions="¿Qué diferencia hay entre un NFT y un Utility NFT?"
          />
          <Faqs number="04" questions="¿Dónde puedo comprar y vender un NFT?" />
          <Faqs number="05" questions="¿Cuánto vale un Utility NFT?" />
          <Faqs
            number="06"
            questions="¿Qué beneficios me ofrece un Utility NFT?"
          />
          <Faqs
            number="07"
            questions="¿Los NFTs son fraude o son activos digitales confiables?"
          />
          <Faqs
            number="08"
            questions="¿Qué puedo comprar con un Utility NFT?"
          />
          <Faqs
            number="09"
            questions="¿Cuánto puedo ganar por un Utility NFT?"
          />
          <Faqs number="10" questions="¿Cómo puedo comprar un Utility NFT?" />
          <Faqs
            number="11"
            questions="¿Puedo comprar un Utility NFT sin criptomonedas?"
          />
        </div>
      </div>
      <div className="Knowutility_animatecard">
        <div className="Knowutility_animatecard_card">
          <img src={imgCard} alt="imagen " />

          <div className="Knowutility_animatecard_text">
          <div>
            <p>Ya tienes todo para empezar</p>
            <h3>¿Quieres conocer los Utility <br /> NFT’s de la temporada?</h3>
          </div>
          <button>Comensar</button>
        </div>
        </div>
       
      </div>
    </section>
  );
};

export default Knowutility;
