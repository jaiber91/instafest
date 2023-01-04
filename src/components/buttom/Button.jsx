import React from 'react';
import './Button.css';
import arrowUpRight from "../../assets/icons/arrow-up-right.svg";


const Button = (props) => {

    const style = {
        width: `${props.size}%`,
        
      };

    return ( 
        <button className='btn' style={style}>{props.text} <img src={arrowUpRight} alt="flecha" /></button>
     );
}
 
export default Button;