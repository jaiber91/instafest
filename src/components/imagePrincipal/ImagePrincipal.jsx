import React from 'react'
import './ImagePrincipal.css'
import imgHome from "../../assets/images/landing/headerHome.svg";

const ImagePrincipal = () => {
    return (
        <div className="header_principalimg">
         <img src={imgHome} alt="imagen principal" />
        </div>
      );
}
 
export default ImagePrincipal;