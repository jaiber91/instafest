import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Cooming.css';
import arrowUp from '../../assets/icons/arrow-up.svg'
import launch1 from '../../assets/images/Lanzamiento/1.svg'
import launch2 from '../../assets/images/Lanzamiento/2.svg'
import launch3 from '../../assets/images/Lanzamiento/3.svg'
import launch4 from '../../assets/images/Lanzamiento/4.jpeg'
import launch5 from '../../assets/images/Lanzamiento/5.jpeg'
import launch6 from '../../assets/images/Lanzamiento/6.jpeg'

const Cooming = () => {
    return ( 
    <div>
        <Navbar/>
       <div className="cooming">
            <div className="cooming-flex">
                <div className="cooming-text">
                    <h1>lanzamiento proximamente</h1>
                    <p>Nos complace invitarte al lanzamiento de la próxima colección NFT Diamonds Lions, una colección a cargo del festival Instafest, la organización más importante en el mundo de las redes sociales que se encarga de premiar a los influencers más reconocidos de América Latina. Como todos los años, el evento abrirá sus puertas al público el próximo 22 de Diciembre, esta vez en la mágica ciudad de Cartagena de Indias. Te invitamos a participar de esta extraordinaria experiencia llena de glamour y de exclusividad. Conoce a las más importantes celebridades del medio, disfruta del clima y la brisa del mar en la playa. Sin duda, una oportunidad que no te puedes perder.</p>
                </div>
                <div className="cooming-notification">
                    <h3> te notificaremos el dia del lanzamiento</h3>
                    <form className="cooming_form_input">

                        <input 
                        type="text" 
                        name="emails" 

                        placeholder='E-mail'
                        />
                        <hr />
                        <button type="button">
                          <img src={arrowUp} alt="flecha" />
                        </button>
                    </form>
                </div>
            </div>
                <div className="cooming-images">
                    <div className="cooming-launch">
                        <img src={launch1} alt="" />
                    </div>
                    <div className="cooming-launch">
                        <img src={launch2} alt="" />
                        <img src={launch4} alt="" />
                    </div>
                    <div className="cooming-launch">
                        <img src={launch5} alt="" />
                        <img src={launch3} alt="" />
                        <img src={launch6} alt="" />
                    </div>
                </div>
       </div>
    </div>
     );
}
 
export default Cooming;