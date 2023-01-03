import React from "react";
import "./FinalSectionHome.css";
import twoCards from "../../assets/images/landing/twoCards.svg";
import purpleBackground from "../../assets/images/landing/purpleBackground.svg";
import Button from "../../components/buttom/Button";
import OpinionsHome from "../../components/opinionsHome/OpinionsHome";
import SuscribeHome from "../../components/suscribeHome/SuscribeHome";
import Timer from "../timer/Timer";
import { Link } from "react-router-dom";


const FinalSectionHome = () => {
  return (
    <section className="finalHome">
      <div className="finalHome_container">
        <div className="finalHome_text">
          <div className="finalHome_text_paragraph">
            <p>
              Nos complace invitarte al lanzamiento de la próxima colección NFT
              Diamonds Lions, una colección a cargo del festival Instafest, la
              organización más importante en el mundo de las redes sociales que
              se encarga de premiar a los influencers más reconocidos de América
              Latina. Como todos los años, el evento abrirá sus puertas al
              público el próximo 22 de Diciembre, esta vez en la mágica ciudad
              de Cartagena de Indias. Te invitamos a participar de esta
              extraordinaria experiencia llena de glamour y de exclusividad.
              Conoce a las más importantes celebridades del medio, disfruta del
              clima y la brisa del mar en la playa. Sin duda, una oportunidad
              que no te puedes perder.
            </p>
          </div>
          <div className="finalHome_image">
            <img src={twoCards} alt="cards" />
          </div>
        </div>
      </div>
      <div className="finalHome_container">
        <div className="finalHome_card">
          <img
            className="finalHome_card_image"
            src={purpleBackground}
            alt="imagen para card"
          />
          <div className="finalHome_titleCard">
            <h2>Instafest</h2>
            <Link to={'/whitelist'}>
              <Button text="Whitelist" />
            </Link>
          </div>
          <div className="finalHome_titleCard_counter">
            <div className="titleCard_counter">
              <Timer/>
            </div>
            <div className="titleCard_counter_button">
              <Link to={'/colecciones'}>
                <Button text="Ver colección" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <OpinionsHome />
      <hr />
    <SuscribeHome/>
    </section>
  );
};

export default FinalSectionHome;
