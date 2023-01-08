import React from 'react'
import "./Footer.css"
import Logo from '../../assets/icons/logoV2.svg'
import Discord from '../../assets/icons/discord.svg'
import Instagram from '../../assets/icons/instagram.svg'
import Twitter from '../../assets/icons/twitter.svg'
import Tiktok from '../../assets/icons/tiktok.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (  
        <div className='footer'>
            <div className="contrast"></div>
            <div className="footer__section">
                <div className="info">
                    <div className="info__text">
                        <img src={Logo} alt="" />
                        <p>Inhands</p>
                    </div>
                    <div className="inf__p">
                        <p>Surge con la esperanza de impulsar un modelo de negocio sustentable en el que tú puedas participar abierta y libremente, un modelo en el que puedes tener garantías de retribución a cambio de la compra de un NFT. Un proyecto pensado para el trabajo en equipo y para la seguridad de tus productos en el mundo digital.</p>
                    </div>
                </div>
                <div className="community">
                    <h4>Únete a la comunidad</h4>
                    <ul>
                        <li>
                            <img src={Discord} alt="" />
                            <Link>Discord</Link>
                        </li>
                        <li>
                            <img src={Instagram} alt="" />
                            <Link>Instagram</Link>
                        </li>
                        <li>
                            <img src={Twitter} alt="" />
                            <Link>Twitter</Link>
                        </li>
                        <li>
                            <img src={Tiktok} alt="" />
                            <Link>Tiktok</Link>
                        </li>
                    </ul>
                </div>
                <div className="market">
                    <h4>Marketplace</h4>
                    <Link to={'/colecciones'}>Centro de ayuda</Link>
                </div>
                <div className="profile-footer">
                    <h4>Perfil</h4>
                    <ul>
                        <li><Link>Coleccionados</Link></li>
                        <li><Link>Favoritos</Link></li>
                        <li><Link>Movimientos</Link></li>
                        <li><Link>Dashboard</Link></li>
                    </ul>
                </div>
                <div className="footer-wallet">
                    <h4>Billetera</h4>
                    <Link to={'/wallet'}>Conectar billetera</Link> 
                </div>
            </div>
            <hr />
            <div className="terms">
                <div className="copy">
                    <p>©2022 Inhands. All rights reserved.</p>
                </div>
                <div className="copy__term">
                    <Link>Política de Privacidad </Link>
                    <Link>Términos y condiciones</Link>
                </div>
            </div>
        </div> 
    );
}
 
export default Footer;