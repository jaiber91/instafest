import React, { useContext, useEffect } from "react";
import "./InfoCards.css";
import arrowUpRight from "../../assets/icons/arrow-up-right.svg";
import achicar from "../../assets/icons/achicar.png"
import variant from "../../assets/images/landing/variant.jpg"
import property1 from "../../assets/images/landing/property1.jpg"
import property2 from "../../assets/images/landing/property2.jpg"
import noise from "../../assets/images/landing/NoiseHome.png"
import { providerContext } from "../../context/status";
import { Link } from "react-router-dom";

const InfoCards = () => {
  const Benefits=[
    {id:'1', number:`01`, describe:'Podrías recibir dividendos económicos cuando adquieras tus NFT’s.'},
    {id:'2', number:'02', describe:'Podrías acceder a promociones o a premios como viajes y descuentos especiales.'},
    {id:'3', number:'03', describe:'Podrías acceder a promociones o a premios como viajes y descuentos especiales.'},
    {id:'4', number:'04', describe:'Podrías encontrar un abanico de posibilidades siempre actualizado que te informará acerca de las novedades que ofrecen las nuevas colecciones.'},
    {id:'5', number:'05', describe:'Tienes la posibilidad de acceder a membresías que acrediten tu participación en eventos públicos y de gran impacto social, o tu ingreso a comunidades de gran prestigio.'},
    {id:'6', number:'06', describe:'Puedes obtener privilegios a través de los bienes y servicios de las marcas que serían exclusivos para los poseedores de los Utility NFT’s.'},
  ]

  let {
    handleClose, 
    showCards1,
    stateCardShow1,
    showCards2,
    stateCardShow2,
    showCards3,
    stateCardShow3,
    showCards4,
    stateCardShow4,
    translatey,
    setTranslatey
  }= useContext(providerContext);


  useEffect(() => {
    const interval = setInterval(() => {
      if(translatey === true){
        setTranslatey(translatey=false)
      }else{
        setTranslatey(translatey=true)
      }

    }, 2000);
    return () => clearInterval(interval);
  }, []);
  
  

  return (
    <div className="infoCards">
        <div className="infoCards_sutitle">
        <p>
        Conoce los Utility NFT´s Inhands{" "}
      </p> 
        <button onClick={handleClose}><img src={achicar} alt="icono de achicar" /></button>
        </div>
      
      <hr className="hrInfoCard"/>
      <hr className="hrInfoCard2"/>
      <div className="infoCards_details">
        <div className="infoCards_details_btn">
          <button className={showCards1 ? 'btnV2-select': 'btnV2'} onClick={()=> stateCardShow1()} >¿Qué es un utility NFT? <img src={arrowUpRight} alt="" /></button>
          <button className={showCards2 ? 'btnV2-select': 'btnV2'} onClick={()=> stateCardShow2()}  >¿Cómo funciona? <img src={arrowUpRight} alt="" /></button>
          <button className={showCards3 ? 'btnV2-select': 'btnV2'} onClick={()=> stateCardShow3()}  >Proyecto inhands <img src={arrowUpRight} alt="" /></button>
          <button className={showCards4 ? 'btnV2-select': 'btnV2'} onClick={()=> stateCardShow4()}  >Beneficios <img src={arrowUpRight} alt="" /></button>
          
        </div>
        <div className={showCards1 ? '' : 'desactive'}>
          <div className="infoCards_details_utility">
            <h3>UTILITY NFT</h3>
           <p>Hasta hace poco, los NFT (o no fungible tokens) eran considerados activos digitales únicos dentro del mercado coleccionable del crypto arte. Su auge generó miles de millones de dólares en criptomonedas de todo el mundo. Sin embargo, debido a problemas de seguridad y a la falta de confianza de la comunidad digital en este tipo de proyectos, su mercado cayó abruptamente.</p>
           <p>Anteriormente, el valor de los tokens dependía de la transacción de un tercero que estuviese dispuesto a pagar por tu activo. Si ese tercero no aparecía, seguramente tu token perdería todo su valor. Incluso podía ser replicado y vendido sin que tú recibieras algo a cambio.</p>
           <p>Debido a ello, surgió una oferta que cambió el concepto de aplicación de los tokens: los Utility NFT. Los Utility NFT’s son activos digitales cuyo valor está respaldado por un proyecto económico sustentable que te da el derecho de obtener dinero, dividendos en una empresa altamente acreditada o algún tipo de beneficio social, a cambio de la compra de un token.</p>
          </div>

          <div className="infoCard-subcard">
            <img src={variant} alt="" />
            <p>El Utility NFT es un modelo de negocio que funciona a partir de tecnología blockchain, pero cuyo objetivo es brindarte la oportunidad de adquirir un activo digital que, no obstante, represente valor y utilidad material para ti. Con él, podrás tener acceso a eventos, premios, descuentos y otro tipo de beneficios tangibles.</p>
          </div>
        </div>  

        <div className={showCards2 ? '' : 'desactive'}>
          <div className="infoCards_details_utility">
            <h3>El proceso</h3>
            <p>En términos generales, Utility NFT es un modelo de negocio que propone una revolución en la aplicación del concepto de NFT. El objetivo es representar de manera criptográfica un proyecto sólido y tangible a través de la propuesta de valor que puede ofrecer una empresa. El éxito de esa propuesta dependerá de la utilidad que ella te represente a ti como usuario potencial.</p>
            <p>Al igual que el NFT convencional, el Utility NFT funciona a través de la compra de un activo digital con criptomoneda, pero con la diferencia de que ya no sólo compras un archivo encriptado, sino una gama completa de beneficios que te ofrece la marca que se encarga de promocionar los activos digitales. Por ejemplo, por la compra de un token puedes acceder a dividendos en un proyecto empresarial, descuentos a las ofertas de determinadas marcas o incluso puedes obtener beneficios sociales como membresías para acceder a comunidades o a clubes exclusivos.</p>
          </div>
        </div>
        <div className={showCards3 ? '' : 'desactive'}>
          <div className="infoCards_details_utility">
            <h3>inhands</h3>
            <p>Pocas empresas se han encargado de brindar seguridad en el mundo de la comercialización de los NFT’s. Por ello, con el fin de garantizar tu seguridad y la retribución de beneficios materiales por tu adquisición, hemos creado el proyecto Inhands –Utility NFT projects Marketplace.</p>
            <p>Inhands –Utility NFT projects Marketplace surge como una promesa de acción: la esperanza y el objetivo de crear un ecosistema en donde todos podamos trabajar en la construcción de nuevas experiencias a través de la comercialización de Utility NFT’s.</p>
            <div className="imagen-infocard">
                <img className={translatey ? '': 'desactive-img'} src={property1} alt="" />
                <img className={translatey ? 'desactive-img': ''} src={property2} alt="" />
                <img className="noise-info" src={noise} alt="" />
            </div>

             <p>Inhands cumple con dos propósitos esenciales: por un lado, brindarte el apoyo necesario en la ejecución y creación de proyectos empresariales de utilidad, y, por el otro, ofrecerte la oportunidad de adquirir un activo intangible y convertirlo en beneficios y derechos tangibles, un activo que siempre estará en tu poder y que podrás disfrutar de manera física y virtual.</p>
            <p>Inhands.io es un proyecto de marca que nace al abrigo de la alianza comercial entre Matriz Technologies y Wefu Corporation. Ambas empresas combinan el poder de la tecnología blockchain y la potencia de la industria del marketing digital para generar proyectos de gran impacto e influencia social en todo el mundo.</p>
            <p>Por esa razón, Inhands.io tiene una serie de filtros al momento de evaluar los proyectos que deseen participar de nuestra marketplace de Utility NFT’s. Con ellos, se espera que tú, como usuario potencial, encuentres beneficios de gran valor y utilidad tangible:</p>

            <div className="infoCard-div-text">
              <p>Inhands reúne una serie de proyectos acreditados en el mundo comercial. Lo hace a través de marcas reconocidas que dan un respaldo a los usuarios y brindan una confianza que hoy en día está deteriorada en el mercado de los NFT’s.</p>
            </div>
            <div className="infoCard-div-text">
              <p>Cada proyecto que quiera vincularse a nuestro ecosistema deberá superar un proceso de evaluación que estará a cargo de un equipo de analistas. En ese proceso se determinará su pertinencia en el mercado actual, los beneficios que ofrece a la comunidad inhanders y, desde luego, la propuesta de valor sustentable que les favorece.</p>
            </div>
            <div className="infoCard-div-text">
              <p>Cada lanzamiento de colección cumplirá estos criterios. Por ello, seremos selectivos en el proceso de lanzamiento de un proyecto. Por año se espera publicar proyectos limitados, cuyas marcas impulsen una colección de Utility NFT con una propuesta de valor única. Cada una de ellas tendrá una sólida campaña que se encargará de respaldar, educar y familiarizar a todos los usuarios interesados en participar de dichos proyectos.</p>
            </div>
          </div>
        </div>


        <div className={showCards4 ? '' : 'desactive'}>
          <div className="infoCards_details_utility">
            <h3>beneficios</h3>
            <p>Inhands –Utility NFT projects marketplace está diseñado con el fin de brindarte un espacio seguro en donde puedas encontrar proyectos confiables, creíbles y que te estimulen positivamente. Por tu participación, tendrás derecho a los siguientes beneficios:</p>
            <div className="dinfoCard-benefits">
              {
                Benefits.map( dta=>{
                  return <div className="ubication-infocard">
                    <h4>{dta.number}</h4>
                    <div className="organizeInfocard">
                      <p>{dta.describe}</p>
                      <hr />
                    </div>
                  </div>
                })
              }
            </div>
            <p>Inhands –Utility NFT projects marketplace te ofrece un universo lleno de posibilidades. Ingresa ahora mismo y conoce los proyectos que hemos seleccionado especialmente para ti. Regístrate ahora y no te pierdas el lanzamiento y los descuentos que ofrece nuestra próxima colección.</p>
            <div className="infocard-boton">
              <Link>
                <button className='btn-infocart'><p>Registrarse</p>   
                </button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
