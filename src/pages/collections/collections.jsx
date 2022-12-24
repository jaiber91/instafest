import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar'
import'./collections.css'
import { Link } from 'react-router-dom';
import eyeOff from '../../assets/icons/eye-off.svg'
import help from '../../assets/icons/help.svg'
import Data from '../../data/collectionData';
const Collections = () => {

    return ( 
    <div >
        <Navbar/>
        <div className="collection">
            <h1>colecciones</h1>
            <hr />
            <div className="cards">
                    {
                        Data.map(data=>{
                            return  <div key={data.id} className="collection_cards">
                                <Link to={`/utility/${data.id}`}>
                                <div className="collection__card">
                                    <img src={data.img} alt="" />
                                    <div className="collection__card_side">
                                        <div className="img">
                                            <img src={data.imgIcon} alt="" />
                                        </div>
                                        <p>{data.name}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                            
                        })

                    }
                <div className="collection_cards_cows">
                    <Link>
                        <div className="cows__color">
                            <p>La colección se desbloqueará más adelante</p>
                        </div>
                        <div className="cows_img">
                            <img src={eyeOff} alt="" />
                        </div>
                    </Link>
                </div>
                <div className="collection_cards_cows">
                    <Link>
                        <div className="cows__colorv2">
                            <p>La colección se desbloqueará más adelante</p>
                        </div>
                        <div className="cows_img">
                            <img src={eyeOff} alt="" />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="help">
                <Link>
                    <img src={help} alt="" />
                </Link>
            </div>
        </div>
        <Footer/>
    </div> 
    
    );
}
 
export default Collections;