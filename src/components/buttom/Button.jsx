import React from 'react';
import './Button.css';
import arrowUpRight from "../../assets/icons/arrow-up-right.svg";


const Button = (props) => {
    return ( 
        <button className='btn'>{props.text} <img src={arrowUpRight} alt="flecha" /></button>
     );
}
 
export default Button;