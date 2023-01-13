import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Cooming.css";
import arrowUp from "../../assets/icons/arrow-up.svg";
import imagen1 from "../../assets/images/Lanzamiento/1.jpeg";
import imagen2 from "../../assets/images/Lanzamiento/2.jpeg";
import imagen3 from "../../assets/images/Lanzamiento/3.jpg";
import imagen4 from "../../assets/images/Lanzamiento/4.jpeg";
import imagen5 from "../../assets/images/Lanzamiento/5.jpeg";
import imagen6 from "../../assets/images/Lanzamiento/6.jpeg";


const Cooming = () => {
  
  const [imageUrl, setImageUrl] = useState(imagen4);
  const imageList = [imagen1, imagen2, imagen3, imagen5, imagen6];

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * imageList.length);
      setImageUrl(imageList[randomIndex]);
    }, 2000); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Navbar />
      <div className="cooming">
        <div className="cooming-flex">
          <div>
            <div className="cooming-text">
              <h1>lanzamiento próximamente</h1>
              <p>
                Nos complace invitarte al lanzamiento de la próxima colección
                NFT Diamonds Lions, una colección a cargo del festival
                Instafest, la organización más importante en el mundo de las
                redes sociales que se encarga de premiar a los influencers más
                reconocidos de América Latina. Como todos los años, el evento
                abrirá sus puertas al público el próximo 22 de Diciembre, esta
                vez en la mágica ciudad de Cartagena de Indias. Te invitamos a
                participar de esta extraordinaria experiencia llena de glamour y
                de exclusividad. Conoce a las más importantes celebridades del
                medio, disfruta del clima y la brisa del mar en la playa. Sin
                duda, una oportunidad que no te puedes perder.
              </p>
            </div>

            <div className="cooming-notification">
              <h3> te notificaremos el día del lanzamiento</h3>
              <form className="cooming_form_input">
                <input type="text" name="emails" placeholder="E-mail" />
                <hr />
                <button type="button">
                  <img src={arrowUp} alt="flecha" />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="cooming-container-images">
          
            <div className="cooming-launch-one">
              <img className="cooming-1" src={imageUrl} alt="imagen" />
            </div>
           
         
        </div>
      </div>
    </>
  );
};

export default Cooming;
