import React from 'react';
import './FooterV2.css';
import arrowUpRight from "../../assets/icons/arrow-up-right.svg";


const FooterV2 = ({props}) => {
    return ( 
    <div className={ props ? 'footerV2' : 'desactive'}>
        <h3>coleccion instafest</h3>
        <button className='btn'>Conectar Billetera <img src={arrowUpRight} alt="flecha" /></button>
    </div>
     );
}
 
export default FooterV2;