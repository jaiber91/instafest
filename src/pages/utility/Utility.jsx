import React, { useContext, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Utility.css";
import { Link, useParams } from "react-router-dom";

import Data from "../../data/collectionData";
import Cards from "../../components/cards/Card";
import UtilityCollection from "../../components/utility-collection/Utility-Collection";
import Benefits from "../../components/benefits/Benefits";
import Roadmap from "../../components/roadmap/Roadmap";
import Faqs from "../../components/faqs/Faqs";
import Footer from "../../components/footer/Footer";
import Timer from "../../components/timer/Timer";
import share from "../../assets/icons/share.svg";
import globe from "../../assets/icons/globe.svg";
import Cart from "../../components/Cart/Cart";
import { providerContext } from "../../context/status";
import arrowUp from "../../assets/icons/arrow-up.svg";

const Utility = () => {

  const [showDiv, setShowDiv] = useState(false);
  


  const { id } = useParams();

  const dta = Data.find((fruta) => fruta.id === id);

  const { cartOpen } = useContext(providerContext);



  let [utility, setUtility] = useState(true);
  let [collection, setCollection] = useState(false);
  let [benefity, setBenefity] = useState(false);
  let [roadmap, setRoadmap] = useState(false);
  let [faqr, setFaqr] = useState(false);

  let activeUtility = () => {
    setUtility((utility = true));
    setCollection((collection = false));
    setBenefity((benefity = false));
    setRoadmap((roadmap = false));
    setFaqr((faqr = false));
    
  };
  let activeCollection = () => {
    setUtility((utility = false));
    setCollection((collection = true));
    setBenefity((benefity = false));
    setRoadmap((roadmap = false));
    setFaqr((faqr = false));
  };
  let activeBenefity = () => {
    setUtility((utility = false));
    setCollection((collection = false));
    setBenefity((benefity = true));
    setRoadmap((roadmap = false));
    setFaqr((faqr = false));
  };
  let activeRoadmap = () => {
    setUtility((utility = false));
    setCollection((collection = false));
    setBenefity((benefity = false));
    setRoadmap((roadmap = true));
    setFaqr((faqr = false));
  };
  let activeFaqs = () => {
    setUtility((utility = false));
    setCollection((collection = false));
    setBenefity((benefity = false));
    setRoadmap((roadmap = false));
    setFaqr((faqr = true));
  };

  //Mostrar u ocultar modal
  const handleButtonClick = () => {
    setShowDiv(!showDiv);
  };

  const [selectedInput, setSelectedInput] = useState(null);


 // Función que maneja el evento de foco en el input
 const handleInputFocus = (event) => {
  setSelectedInput(event.target.name);
};

// Función que maneja el evento de blur en el input
const handleInputBlur = () => {
  setSelectedInput(null);
};
console.log(selectedInput)


  return (
    <div>
      <Navbar />
      <div className="utility">
        <div className="utility--nav">
          <img src={dta.img} alt="" />
          <div className="nav--time">
            <h1>instafest</h1>
            <Timer />
          </div>
        </div>
        <div className="nav-button">
          <Link to={"/whitelist"}>
            <button className="btn">
              Whitelist
            </button>
          </Link>
        </div>
        <div className="sub-nav">
          <div className="img">
            <img src={dta.imgIcon} alt="" />
          </div>
          <div className="icons-nav">
            <div>
            <img src={globe} alt="" />
            </div>
            <div className="icon-share">
                
            <button
              type="button"
              onClick={handleButtonClick}
              className="icon_share-btn"
            >
              {showDiv } <img src={share} alt="" />
            </button>
            {showDiv && (
          <div className="share-list">
            <ul className="share-list-detail">
                <li onClick={handleButtonClick} > Compartir enlace</li>
                <li onClick={handleButtonClick}>Compartir en Facebook</li>
                <li onClick={handleButtonClick}>Compartir en Twitter</li>
            </ul>
          </div>
        )}
            </div>
         

          </div>
        </div>
        <div className="utility__list">
          <ul>
            <li>
              <p  
              onClick={() => activeUtility()} 
              className={utility ? "bold" : ""}
              >UTILITY NFT’S</p>
           
            </li>
            <hr className={utility ? "showOne" : "hideOne"}/>
            <li>
              <div className="v-line"></div>
              <p onClick={() => activeCollection()} className={collection ? "bold" : ""} >ESTA COLECCIÓN</p>
            </li>
            <hr className={collection ? "show" : "hide"}/>

            <li>
              <div className="v-line"></div>
              <p onClick={() => activeBenefity()}  className={benefity ? "bold" : ""} >BENEFICIOS</p>
            </li>
            <hr className={benefity ? "showThree" : "hideThree"}/>
            <li>
              <div className="v-line"></div>
              <p onClick={() => activeRoadmap()}  className={roadmap ? "bold" : ""}>ROADMAP</p>
            </li>
            <hr className={roadmap ? "showFour" : "hideFour"}/>
            <li>
              <div className="v-line"></div>
              <p onClick={() => activeFaqs()}  className={faqr ? "bold" : ""}>FAQS</p>
            </li>
            <hr className={faqr ? "showFive" : "hideFive"}/>
          </ul>
          <hr className="line-menu" />
        </div>
        <div className="center">
          <div className="nfts-cards-sidebar">
            <div className={utility ? "nfs-sidebar" : "desactive"}>
              <div className="nfts-column">

              <div className="nfts">
                {dta.nfts.map((card) => {
                  return (
                    <div onClick={() => cartOpen()}>
                      <Cards key={card.id} props={card} />
                    </div>
                  );
                })}
              </div>
              </div>
              <Cart />
            </div>
            <div className={utility ? "nfts--botton" : "desactive"}>
              <p>Muy pronto tendrás la colección completa</p>
            </div>
          </div>

          <div className={collection ? "utility--collection" : "desactive"}>
            <UtilityCollection props={dta} />
          </div>


          <div className={benefity ? "benefity" : "desactive"}>
            <Benefits props={dta} />
          </div>
          <div className={roadmap ? "roadmap" : "desactive"}>
            <Roadmap />
          </div>
          <div className={faqr ? "faqs-utility" : "desactive"}>
            <div className="faqs-center">
              {dta.faqs.map((data) => {
                return <Faqs key={data.id} props={data} />;
              })}
              <div className="faqs-suscribe">
                <h3>
                  PROXIMAMENTE PODRÁS EXPLORAR EL UNIVERSO NFT  DIAMONDS LIONS{" "}
                </h3>
                <p>
                  Suscríbete y no te pierdas el gran lanzamiento que tenemos
                  preparado para ti
                </p>
                <form className="faqs_form_input">
                  <input 
                    type="text" 
                    name="emails" 
                    placeholder="E-mail"
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    />
                  <hr 
                   style={{
                    backgroundColor: selectedInput === 'emails' ? 'blue' : '#0000000',
                  }} />
                  <button type="button" style={{
                    backgroundColor: selectedInput === 'emails' ? 'blue' : '#0000000',
                  }}>
                    <img src={arrowUp} alt="flecha" />
                    <div className="button_form_home_circle"></div>
                  </button>
                </form>
              </div>
            </div>
          </div>
            <Footer />
        </div>
      </div>
    </div>
  );
};

export default Utility;
