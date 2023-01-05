import React from 'react';
import './Utility-Collection.css';
import {imagesNfts} from '../../assets/images/nfts/imagesNfts'
import arrowUpRightWhite from "../../assets/icons/arrow-up-right-white.svg";
import { Link } from 'react-router-dom';


const UtilityCollection = ({props}) => {
    return ( 
    <div>

        <div className='utility--collection'>

            <div className="describe--img">
                <img src={imagesNfts.uno} alt="" />
                <div className="sub--img">
                    <img src={imagesNfts.siete} alt="" />
                    <img src={imagesNfts.once} alt="" />
                    <img src={imagesNfts.cuatro} alt="" />
                </div>
            </div>
            <div className="describe--collection">
                <p>{props.description}</p>
                <h3>haz parte de la comunidad inhands</h3>
                <p>Al ser parte de la comunidad Inhands podrás tener acceso a la coleción antes del lanzamiento oficial.</p>
                {
                    props.lineTime.map( data =>{
                        
                        return <div key={data.id} className="timeline">
                            <div className="child">
                                <div className="content-child">
                                    <h4>{data.name}</h4>
                                    <p>{data.description}</p>
                                </div>
                            </div>
                        </div>
                        })
                    }
                    
                <div className="describe--btn">
                <Link to={'/whitelist'}>

                    <button className='btn'>Hacer parte 
                        <img src={arrowUpRightWhite} alt="flecha" />
                    </button>
                </Link>
                </div>
            </div>
        </div>
                
        <iframe className='video-collection'  src="https://www.youtube.com/embed/YUpXk8lu6zA?autoplay=1&&autopause=1?controls=0&disablekb=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      

    </div>
     );
}
 
export default UtilityCollection;