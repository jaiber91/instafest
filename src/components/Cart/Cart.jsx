import React, { useContext } from 'react';
import './Cart.css';
import arrowDownRight from '../../assets/icons/arrow-down-right.svg'
import close from '../../assets/icons/close.svg'
import { Link } from 'react-router-dom';
import { providerContext } from '../../context/status';
import arrowUp from '../../assets/icons/arrow-up.svg'


const Cart = () => {
    let {cartClose, cart, cartData }= useContext(providerContext);

    return ( 
        <div className={ cart ? 'sidebar' : 'desactive' }>
            <div className="sidebar-cards-price">
                <div className="sidebar-title">
                    <h2>BOLSA</h2>
                    <img onClick={()=> cartClose()} src={arrowDownRight} alt="" />
                </div>
                <div className="sidebar-close">
                    <p>Limpiar todo</p>
                    <img src={close} alt="x" />
                </div>
                <div className="sidebar-cart-list">
                    <div className="cart-list-img">
                        <img src={cartData.img} alt="" />
                        <div className="cart-list-text">
                            <p>{cartData.title}</p>
                            <h4>{cartData.describe}</h4>
                            <div className="cart-list-price">
                                <p>{cartData.price}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sidebar-preci-total">
                <div className="sidebar-total">
                    <p>total</p>
                    <p>{cartData.price}</p>
                </div>
                <div className="sidebar-buy">
                    <Link>
                        <p>Comprar</p>
                        <img src={arrowUp} alt="" />
                    </Link>
                </div>
            </div>
        </div>
     );
}
 
export default Cart;