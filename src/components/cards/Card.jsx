import React, { useContext } from 'react';
import { providerContext } from '../../context/status';
import './Card.css'
const Card = ({props}) => {

    let {cartData, setCartData }= useContext(providerContext);

    let dataCard = (data)=>{
        setCartData(cartData=data)
    }

    return ( 
        <div className='card' onClick={()=>dataCard(props)}>
            <img src={props.img} alt="" />
            <div className="card--title">
                <h4>{props.title}</h4>
                <p>{props.describe}</p>
            </div>
        </div>
     );
}
 
export default Card;