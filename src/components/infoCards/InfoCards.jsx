import React from 'react';
import ButtonV2 from "../../components/buttonV2/buttonV2";
import "./InfoCards.css";
import arrowUpRight from "../../assets/icons/arrow-up-right.svg";


const InfoCards = () => {
    return ( 
    <div className='infoCards'>
        <p>
           Conoce los Utility NFT´s Inhans <button>cerrar</button>
        </p>
        <hr />
        <div className='infoCards_details'>
            <div className='infoCards_details_btn'>
            <ButtonV2 text="¿Qué es un utility NFT?" img={arrowUpRight} />
            <ButtonV2 text="¿Cómo funciona?" img={arrowUpRight} />
            <ButtonV2 text="Proyecto inhands" img={arrowUpRight} />
            <ButtonV2 text="Beneficios" img={arrowUpRight} />
            </div>
            <div className='infoCards_details_text'>

            </div>

        </div>
    </div>
     );
}
 
export default InfoCards;
