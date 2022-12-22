import React from 'react';
import './Navbar.css'
import logo from '../../assets/icons/logo.svg';
import shopingCar from '../../assets/icons/shopping-cart.svg'

const Navbar = () => {
    return ( 
    <nav className='navbar'>
        <div className='navbar_firstbloq'>
        <img src={logo} alt="logo landingPages" />
         <h3>Inhands</h3>
         <input type="text" placeholder='Busca Utility NFT’s, colecciones'/>
         <h3>Marketplace</h3>

        </div>
        <div>
            <ul>
                <li>Novedades</li>
                <li>Perfil</li>
            </ul>
            <img src={shopingCar} alt="icono de carrito de compra" />
            <button>Conectar Billetera</button>
        </div>

       
    </nav> 
    
    );
}
 
export default Navbar;