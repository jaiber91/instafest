import React from 'react';
import './Button.css';


const Button = (props) => {

    const style = {
        width: `${props.size}%`,
        
      };

    return ( 
        <button className='btn' style={style}>{props.text} 
        </button>
     );
}
 
export default Button;