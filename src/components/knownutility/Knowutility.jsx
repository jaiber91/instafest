import React, { useState } from "react";
import "./Knowutility.css";
import imgCard from "../../assets/images/landing/cardInfoHome.svg";
import Faqs from "../faqs/Faqs";
import Button from "../../components/buttom/Button";
import { Link } from "react-router-dom";
import InfoCards from "../../components/infoCards/InfoCards";
import Arrow from "../../assets/icons/arrow-up-right-white.svg";
import cardUtility from "../../assets/icons/cardUtility.svg";

const Knowutility = () => {
  const faqs = [
    {
      number: "01",
      questions: "¿Qué es un criptoactivo?",
      response:
        "Un criptoactivo es un tipo de activo digital que utiliza criptografía para asegurar las transacciones, controlar la creación de nuevas unidades y verificar la transferencia de activos. La criptografía, por su parte, es una técnica de seguridad utilizada para proteger la información y evitar que sea modificada o falsificada por medio de tecnología blockchain. Los criptoactivos incluyen criptomonedas tales como Bitcoin y Ethereum, así como activos digitales como tokens de seguridad, de utilidad y no fungibles (NFT’s).",
    },
    {
      number: "02",
      questions: "¿Qué es un NFT y para qué sirve?",
      response:
        "Las siglas NFT traducen no fungible tokens (token no fungible). Es un tipo especial de criptoactivo que se utiliza para representar un activo digital único e indivisible. Esto significa que, a diferencia de las criptomonedas, un NFT no puede ser divido en partes más pequeñas ni tampoco puede ser intercambiado por otras criptomonedas de manera directa. Su uso tradicionalmente ha estado ligado a los productos digitales de colección: videos, música, animaciones y otros tipos de contenido digital.",
    },
    {
      number: "03",
      questions: "¿Qué diferencia hay entre un NFT y un Utility NFT?",
      response:
        "A diferencia de los NFT tradicionales, los Utility valen por la propuesta de valor y por el proyecto sustentable que representan determinadas marcas y empresas. Mientras que en un NFT tradicional no tienes más que un activo digital que puedes vender a un tercero que puede no aparecer, el Utility te ofrece el beneficio de acceder a una retribución tangible a través de dinero, dividendos, ofertas, promociones, viajes, membresías, etc.",
    },
    {
      number: "04",
      questions: "¿Dónde puedo comprar y vender un NFT?",
      response:
        "Dado que un NFT es un criptoactivo digital, éste se puede comerciar de manera P2P, es decir, por medio de una wallet digital que pertenece a un usuario determinado, el cual se encargará de vigilar su activo en cualquier proceso de intercambio. Sin embargo, también existen plataformas e iniciativas que han creado un espacio de comercio bajo el nombre de MarketPlace. Inhands.io es, precisamente, una de esas iniciativas. El objetivo de estos proyectos es reunir en un mismo lugar a las partes interesadas en adquirir un activo digital y brindar las herramientas necesarias para hacerlo de manera segura y confiable.",
    },
    {
      number: "05",
      questions: "¿Cuánto vale un Utility NFT?",
      response:
        "Es difícil determinar el valor preciso de los Utility NFT’s. En inhands.io, los Utility NFT’s son representaciones criptográficas de proyectos sustentables, por lo tanto, cada valor de un activo depende de las características del proyecto y de su propuesta de utilidad. Para saberlo, te aconsejamos estar pendiente de los drops y registrarte en el mailbox o en las whitelists de la marketplace y así estar al tanto de las novedades que te puedan interesar.",
    },
    {
      number: "06",
      questions: "¿Qué beneficios me ofrece un Utility NFT?",
      response:
        "Gracias a la tecnología Blockchain, es posible guardar y registrar todos los detalles del proyecto y sus beneficios. Esto nos permite tener control sobre las ofertas de una marca determinada y garantizar la transferencia de los derechos a los cuales puedes acceder por la compra de un activo digital. De igual forma, si así lo deseas, podrás transferir dichos derechos a otra persona con la cual hayas comerciado, Recuerda que los Utility NFT son emitidos por proyectos debido a los beneficios que representan por su propuesta de valor.",
    },
    {
      number: "07",
      questions: "¿Los NFTs son fraude o son activos digitales confiables?",
      response:
        "Gran parte del problema que representaba el comercio tradicional de los NFT era su inseguridad. Los certificados de autenticidad no garantizaban el plagio o la réplica de algún activo en la red ni, por tanto, la pérdida de su autoría. Con el surgimiento de los Utility NFT’s esto ha cambiado. Existen filtros de seguridad que te permiten obtener beneficios tangibles de los proyectos de diversas empresas. Inhands.io, en este sentido, no sólo te garantiza un espacio confiable al momento de comerciar con tus activos digitales, sino que también te ofrece proyectos sustentables altamente acreditados. Esto te permite estar disfrutar y controlar tu propiedad de manera virtual y real.",
    },
    {
      number: "08",
      questions: "¿Qué puedo comprar con un Utility NFT?",
      response:
        "Con los Utility NFT’s no sólo puedes tener acceso a beneficios tangibles de gran utilidad para ti; también puedes vender y obtener dinero a cambio, así como comprar otro tipo de activos digitales en la web. Recuerda que los Utility NFT’s te ofrecen una propuesta de valor que está respaldada por una marca acreditada y por los beneficios reales que significa adquirir uno de sus activos. Puedes comprar desde una propiedad digital, hasta una experiencia exclusiva en uno de los mejor restaurantes del mundo.",
    },
    {
      number: "09",
      questions: "¿Cuánto puedo ganar por un Utility NFT?",
      response:
        "Es difícil establecer un precio por la venta de un Utility NFT. Lo cierto es que el mercado de los NFT tradicionales generó mucho dinero a la vez que muchos inconvenientes. Por eso, la propuesta del Utility revolucionó la aplicación del concepto. Dicho esto, por un Utility NFT tú puedes ganar desde dividendos en un proyecto empresarial, o dinero por la venta de un activo, hasta viajes en crucero y fiestas en yates privados o membresías VIP en eventos de entretenimiento a nivel mundial.",
    },
    {
      number: "10",
      questions: "¿Cómo puedo comprar un Utility NFT?",
      response:
        "Puedes registrarte en la marketplace de Inhands.io, hacer tu registro, agregar tu wallet, ver los detalles de una colección y escoger el proyecto que más se ajusta a tus deseos. Aquí te explicamos todo lo que necesitas saber para hacer tu registro de manera rápida y sencilla.",
    },
    {
      number: "11",
      questions: "¿Puedo comprar un Utility NFT sin criptomonedas?",
      response:
        "No es posible. La mayoría de los activos Utility NFT tienen lugar en Ethereum o en Binance Smart Chain (BSC). Para participar en ellos y poder comprar Utility NFTs en cualquier marketplace, necesitas crear previamente una cripto cartera que utilice un servicio como el MetaMask y añadir a ella alguna criptomoneda (normalmente ETH).",
    },
  ];

  /*Mostrando u ocultando el componente al dar click en la card del Home  */
  const [showComponent, setShowComponent] = useState(false);
  const [showCards, setShowCards] = useState(true);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const handleCardClick = (cardTitle, cardText, cardImage) => {
    setShowComponent(!showComponent);
    setShowCards(!showCards);
    setTitle(cardTitle);
    setText(cardText);
    setImage(cardImage);
  };

  const handleClose = () => {
    setShowComponent(false);
    setShowCards(true);
  };

  const textInfo = `Hasta hace poco los NFT (o no fungible tokens) eran
  considerados activos digitales únicos dentro del mercado
  coleccionable del crypto arte Su auge generó miles de millones
  de dólares en criptomonedas de todo el mundo Sin embargo,
  debido a problemas de seguridad y a la falta de confianza de la
  comunidad digital en este tipo de proyectos, su mercado cayó
  abruptamente \n\n.
  
  Anteriormente, el valor de los tokens dependía de
  la transacción de un tercero que estuviese dispuesto a pagar por
  tu activo. Si ese tercero no aparecía, seguramente tu token
  perdería todo su valor. Incluso podía ser replicado y vendido
  sin que tú recibieras algo a cambio. 
  
  Debido a ello, surgió una
  oferta que cambió el concepto de aplicación de los tokens: los
  Utility NFT. Los Utility NFT’s son activos digitales cuyo valor
  está respaldado por un proyecto económico sustentable que te da
  el derecho de obtener dinero, dividendos en una empresa
  altamente acreditada o algún tipo de beneficio social, a cambio
  de la compra de un token.`;

  const textProces = `En términos generales, Utility NFT es un modelo 
  de negocio que propone una revolución en la aplicación del concepto de NFT.
   El objetivo es representar de manera criptográfica un proyecto sólido 
   y tangible a través de la propuesta de valor que puede ofrecer una empresa. 
   El éxito de esa propuesta dependerá de la utilidad que ella te represente 
   a ti como usuario potencial.
   Al igual que el NFT convencional, el Utility NFT funciona a través de la
    compra de un activo digital con criptomoneda, pero con la diferencia de 
    que ya no sólo compras un archivo encriptado, sino una gama completa de 
    beneficios que te ofrece la marca que se encarga de promocionar los activos 
    digitales. Por ejemplo, por la compra de un token puedes acceder a dividendos 
    en un proyecto empresarial, descuentos a las ofertas de determinadas marcas o incluso 
    puedes obtener beneficios sociales como membresías para acceder a comunidades o a clubes exclusivos.`;

  const textInhands = `
  Pocas empresas se han encargado de brindar seguridad en el mundo de la comercialización de los NFT’s. Por ello, con el fin de garantizar tu seguridad y la retribución de beneficios materiales por tu adquisición, hemos creado el proyecto Inhands –Utility NFT projects Marketplace.
  Inhands –Utility NFT projects Marketplace surge como una promesa de acción: la esperanza y el objetivo de crear un ecosistema en donde todos podamos trabajar en la construcción de nuevas experiencias a través de la comercialización de Utility NFT’s.`;
  
  const textBeneficios = `Inhands –Utility NFT projects marketplace está diseñado con el fin de brindarte un espacio seguro en donde puedas encontrar proyectos confiables, creíbles y que te estimulen positivamente. Por tu participación, tendrás derecho a los siguientes beneficios:`
  
  return (
    <section className="Knowutility">
      <div className="Knowutility_first">
        <h1>
          conoce los <br /> utility NFT’S <br /> inhands.
        </h1>
        <div style={{ display: showCards ? "block" : "none" }}>
          <div className="Knowutility_cards">
            <div
              onClick={() =>
                handleCardClick(
                  "Utility NFT",
                  textInfo,
                  "../../assets/images/landing/news.jpg"
                )
              }
              className="Knoeutility_card"
            >
              <h3>
                ¿qué es un utility <br /> nft?
              </h3>
              <img src={Arrow} alt="Flecha" />
            </div>
            <div
              onClick={() => handleCardClick("El proceso", textProces, "")}
              className="Knoeutility_cardhow"
            >
              <h3>
                ¿cómo <br /> funciona?
              </h3>
              <img src={Arrow} alt="Flecha" />
            </div>
            <div
              onClick={() => handleCardClick("Inhands", textInhands, "")}
              className="Knoeutility_project"
            >
              <h3>
                proyecto <br /> inhands
              </h3>
              <img src={Arrow} alt="Flecha" />
            </div>
            <div onClick={() => handleCardClick("Beneficios", textBeneficios, "")} className="Knoeutility_beneficios">
              <h3>beneficios</h3>
              <img src={Arrow} alt="Flecha" />
            </div>
          </div>
        </div>
        {showComponent ? (
          <InfoCards
            show={showComponent}
            onClose={handleClose}
            title={title}
            textElement={text}
            imageElement={image}
          />
        ) : null}
      </div>

      <div className="Knowutility_faqs">
        <h2>faqs</h2>
        <div className="Knowutility_faqsList">
          {faqs.map((data, index) => {
            return <Faqs key={index} props={data} />;
          })}
        </div>
      </div>
      <div className="Knowutility_animatecard">
        <div className="Knowutility_animatecard_card">
          <img src={imgCard} alt="imagen " />

          <div className="Knowutility_animatecard_text">
            <div>
              <p>Ya tienes todo para empezar</p>
              <h3>
                ¿Quieres conocer los Utility <br /> NFT’s de la temporada?
              </h3>
            </div>
            <div className="Knowutility_animatecard_text_buttom">
              <Link to={"/cooming"}>
                <Button text="Comenzar" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Knowutility;