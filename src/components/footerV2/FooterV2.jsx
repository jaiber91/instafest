import React from 'react';
import './FooterV2.css';
import arrowUpRight from "../../assets/icons/arrow-up-right.svg";
import { Link } from 'react-router-dom';


const FooterV2 = ({props}) => {
    return ( 
    <div className={ props ? 'footerV2' : 'desactive'}>
        <h3>coleccion instafest</h3>
        <Link to={'/whitelist'}>
            <button className='btn'>Conectar Billetera <img src={arrowUpRight} alt="flecha" /></button>
        </Link>
    </div>
     );
}
 
export default FooterV2;