import React from "react";
import "./Navbar.css";
import logo from "../../assets/icons/logo.svg";
import shopingCar from "../../assets/icons/shopping-bag.svg";
import search from "../../assets/icons/search.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_firstbloq">
        <Link to={'/'}>
          <img src={logo} alt="logo landingPages" />
        <h3 className="navbar_title">Inhands</h3>
        </Link>
        <div className="input-icon">
          <img src={search} alt="" />
          <input type="text" placeholder="Busca Utility NFT’s, colecciones" />
        </div>
      </div>
      <div className="navbar_secondbloq">
        <Link to={'/colecciones'}>
          <h3 className="navbar_market">Marketplace</h3>
        </Link>
        <ul>
          <li><p>Novedades</p></li>
          <Link to={'/profile'}>
          <li>Perfil</li>
          </Link>
        </ul>
        <img src={shopingCar} alt="icono de carrito de compra" />
        <button> <Link to={'/wallet'}>Conectar Billetera</Link></button>
      </div>
    </nav>
  );
};

export default Navbar;
