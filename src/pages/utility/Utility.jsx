import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Utility.css'
import { Link, useParams } from 'react-router-dom';

import Data from '../../data/collectionData';


const Utility = () => {
    const {id}= useParams();

    const dta = Data.find( fruta => fruta.id === id );
    console.log(dta);
    return ( 
    <div>
        <Navbar/>
        <div className="utility">
            {/*<div className="video">
                <video   loop  >
                     <source src={ video} type={ 'video/mp4' } />
                </video>
            </div>*/}

            <div className="utility__list">
                <ul>
                    <li>
                        <Link to={''}>UTILITY NFT’S</Link>
                    </li>
                    <li>
                        <div className="v-line"></div>
                        <Link>ESTA COLECCION</Link>
                    </li>
                    <li>
                        <div className="v-line"></div>
                        <Link>BENEFICIOS</Link>
                    </li>
                    <li>
                        <div className="v-line"></div>
                        <Link>ROADMAP</Link>
                    </li>
                    <li>
                        <div className="v-line"></div>
                        <Link>FAQS</Link>
                    </li>
                </ul>
                <hr />
            </div>
                
        </div>
    </div>
     );
}
 
export default Utility;