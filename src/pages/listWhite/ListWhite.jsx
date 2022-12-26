import React from 'react';
import './ListWhite.css';
import imageBg from '../../assets/images/landing/imagesBG.jpg';
import logo from '../../assets/icons/logo.svg';


const ListWhite = () => {
    return (
     <section className='listWhite'>
        <div className='listWhite_image'>
            <img className='listWhite_bg' src={imageBg} alt="imagen de fondo" />
            <div className='listWhite_logo'>
                <img src={logo} alt="logo" />
                <h3>Inhands</h3>
            </div>
            <h2>0%</h2>
        </div>
        <div className='listWhite_form'>

        </div>
    </section>  
    );
}
 
export default ListWhite;