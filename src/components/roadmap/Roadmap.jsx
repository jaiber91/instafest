import React, { useState } from 'react';
import './Roadmap.css';
import arrowDownRight from '../../assets/icons/arrow-down-right.svg'
import arrowDownLeft from '../../assets/icons/arrow-down-left.svg'
import { imagesLanding } from '../../assets/images/landing/imagesLanding';
const Roadmap = () => {
    let [one, setOne]=useState(false)
    let [two, setTwo]=useState(false)
    let [three, setThree]=useState(false)
    let [four, setFour]=useState(false)
    let [five, setFive]=useState(false)

    const activateOne=()=>{
        setOne( (one = true))
    }
    const activateTwo=()=>{
        setTwo((two = true))
    }
    const activateThree=()=>{
        setThree((three=true))
    }
    const activateFour=()=>{
        setFour((four= true))
    }
    const activateFive=()=>{
        setFive((five = true))
    }
    console.log(one);
    return ( 
        <div className='roadmap-timeline'>
            <div className={ one ? "" : 'content-circle'}>
            <div className="roadmap-content right-content">
                <img className={ one ? " " : 'ocultar-roadmap' } src={imagesLanding.cincuentaysiete} alt="icons" />
                <div className="roadmap-text-box">
                    <div className="roadmap-text" onClick={()=> activateOne()}>
                        <h4>fase inicial</h4>
                        <img src={arrowDownLeft} alt="arrow" />
                    </div>
                    <div className={ one ? "roadmap-p" : 'ocultar-roadmap' }>
                        <p>A través de un análisis cuidadoso que nos permite identificar el potencial de los mercados digitales. Gracias a ello, podemos ofrecerte toda la información necesaria para que conozcas las novedades del mundo digital.</p>
                    </div>
                </div>
            </div>
            </div>
            <div className={ two ? "" : 'content-circle'}>
            <div className="roadmap-content left-content">
                <img className={ two ? "" : 'ocultar-roadmap'} src={imagesLanding.sesenta} alt="icons" />
                <div className="roadmap-text-box">
                    <div className="roadmap-text-left" onClick={()=> activateTwo()}>
                        <img src={arrowDownRight} alt="arrow" />
                        <h4>fases de seguridad</h4>
                    </div>
                    <div className={ two ? "roadmap-p" : 'ocultar-roadmap'}>
                        <p>Hemos diseñado unos filtros de seguridad a cargo de un equipo de profesionales que evalúan la viabilidad de los proyectos y determinan la relevancia de su oferta de valor sustentable. Esto nos permite brindarte las garantías necesarias para que te sientas confiado de tener un activo digital entre sus manos.</p>
                    </div>
                </div>
            </div>
            </div>
            <div className={ three ? "" : 'content-circle'}>
            <div className="roadmap-content right-content">
                <img className={ three ? "" : 'ocultar-roadmap'} src={imagesLanding.sesentayuno} alt="icons" />
                <div className="roadmap-text-box">
                    <div className="roadmap-text" onClick={()=> activateThree()}>
                        <h4>características</h4>
                        <img src={arrowDownLeft} alt="arrow" />
                    </div>
                    <div className={ three ? "roadmap-p": 'ocultar-roadmap'}>
                        <p>Basado en la demanda de nuestro público, seleccionamos el mejor proyecto de Utility NFT. Contamos con alianzas que nos permiten combinar el desarrollo de nuevas tecnologías y campañas de publicidad de alto impacto en el mundo del entretenimiento digital. Gracias a esto, Inhands –Utility NFT projects marketplace crea las ofertas que más se ajustan a tu perfil.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className={ four ? "" : 'content-circle'}>
            <div className="roadmap-content left-content">
                    <img className={ four ? "" : 'ocultar-roadmap'} src={imagesLanding.sesentaydos} alt="icons" />
                    <div className="roadmap-text-box">
                        <div className="roadmap-text-left" onClick={()=> activateFour()}>
                            <img src={arrowDownRight} alt="arrow" />
                            <h4>ejecucion del proyecto</h4>
                        </div>
                        <div className={ four ? "roadmap-p" : 'ocultar-roadmap'}>
                            <p>Una vez seleccionado el proyecto, nos encargamos de acompañarte en el proceso de inscripción que te llevará a participar de cada lanzamiento. Nuestro equipo de profesionales se encargará de guiar tu proceso de registro, de compartir las noticias de actualidad y de supervisar la retribución por la compra de alguno de los Utility NFT’s.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={ five ? "" : 'content-circle'}>
            <div className="roadmap-content right-content">
                <img className={ five ? "" : 'ocultar-roadmap'} src={imagesLanding.sesentaytres} alt="icons" />
                <div className="roadmap-text-box">
                    <div className="roadmap-text" onClick={()=> activateFive()}>
                        <h4>cualificacion del servicio</h4>
                        <img src={arrowDownLeft} alt="arrow" />
                    </div>
                    <div className={ five ? "roadmap-p" : 'ocultar-roadmap'}>
                        <p>La finalidad del proceso es conducirte paso a paso para que tú seas el único que tiene acceso a una propiedad digital tangible. Hecho el análisis y ejecutado el proyecto, te ofreceremos las herramientas necesarias para que puedas supervisar e interactuar personalmente con el activo digital que acabas de adquirir por medio de nuestra marketplace.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
     
export default Roadmap;