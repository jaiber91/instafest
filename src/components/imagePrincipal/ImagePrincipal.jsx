import React from 'react'
import './ImagePrincipal.css'
import imgHome from "../../assets/images/landing/headerHome.jpg";
import { Link } from 'react-router-dom';
import arrowDownLeft from '../../assets/icons/arrow-down-left-white.svg'

const ImagePrincipal = () => {
    return (
        <div className="header_principalimg">
         <img src={imgHome} alt="imagen principal" />
         <div className="header_principalimg-text">
            <h1>UTILITY NFT'S</h1>
            <Link>
              <p>Comenzar</p>
              <img src={arrowDownLeft} alt="" />
            </Link>
         </div>
        </div>
      );
}
 
export default ImagePrincipal;