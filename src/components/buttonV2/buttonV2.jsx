import React from 'react'
import './buttonV2.css';

const ButtonV2 = (props) => {
    const style = {
        width: `${props.size}%`,
        
      };

    return ( 
        <button className='btnV2' style={style}>{props.text} <img src={props.img} alt="flecha" /></button>
     );
}
 
export default ButtonV2;