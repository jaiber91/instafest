import React from 'react'
import './ImagePrincipal.css'
import imgHome from "../../assets/images/landing/headerHome.jpg";
import { Link } from 'react-router-dom';

const ImagePrincipal = () => {
    return (
        <div className="header_principalimg">
         <img src={imgHome} alt="imagen principal" />
         <div className="header_principalimg-text">
            <h1>UTILITY NFT'S</h1>
            <a href='#explorar'>
              <p>Comenzar</p>
            </a>
         </div>
        </div>
      );
}
 
export default ImagePrincipal;