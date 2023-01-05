import React from 'react';
import './Button.css';


const Button = (props) => {

    const style = {
        width: `${props.size}%`,
        
      };

    return ( 
        <button className='btn' style={style}>{props.text} 
          <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.95801 12.0423L12.0413 4.95898" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.95801 4.95898H12.0413V12.0423" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </button>
     );
}
 
export default Button;