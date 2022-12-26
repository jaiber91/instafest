import React from 'react';
import './Card.css'
const Card = ({props}) => {
    return ( 
        <div className='card'>
            <img src={props.img} alt="" />
            <div className="card--title">
                <h4>{props.title}</h4>
                <p>{props.describe}</p>
            </div>
        </div>
     );
}
 
export default Card;