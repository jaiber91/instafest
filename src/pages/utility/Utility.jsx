import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Utility.css'
import { useParams } from 'react-router-dom';

import Data from '../../data/collectionData';
import Cards from '../../components/cards/Card';
import arrowUpRight from "../../assets/icons/arrow-up-right.svg";

const Utility = () => {
    const {id}= useParams();

    const dta = Data.find( fruta => fruta.id === id );

    let [utility, setUtility ]=useState(true);
    let [collection, setCollection ]=useState(true);
    let [benefity, setBenefity ]=useState(true);
    let [roadmap, setRoadmap ]=useState(true);
    let [faqr, setFaqr ]=useState(true);

    let activeUtility= () => {
        setUtility(utility = true)
        setCollection(collection = false)
        setBenefity(benefity = false)
        setRoadmap(roadmap = false)
        setFaqr(faqr = false)
    }
    let activeCollection= () => {
        setUtility(utility = false)
        setCollection(collection = true)
        setBenefity(benefity = false)
        setRoadmap(roadmap = false)
        setFaqr(faqr = false)
    }
    let activeBenefity= () => {
        setUtility(utility = false)
        setCollection(collection = false)
        setBenefity(benefity = true)
        setRoadmap(roadmap = false)
        setFaqr(faqr = false)
        
    }
    let activeRoadmap= () => {
        setUtility(utility = false)
        setCollection(collection = false)
        setBenefity(benefity = false)
        setRoadmap(roadmap = true)
        setFaqr(faqr = false)
        
    }
    let activeFaqs= () => {
        setUtility(utility = false)
        setCollection(collection = false)
        setBenefity(benefity = false)
        setRoadmap(roadmap = false)
        setFaqr(faqr = true)
        
    }
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
                        <p id='hold' onClick={() => activeUtility()} >UTILITY NFT’S</p>
                    </li>
                    <li>
                        <div className="v-line"></div>
                        <p onClick={() => activeCollection()}>ESTA COLECCION</p>
                    </li>
                    <li>
                        <div className="v-line"></div>
                        <p onClick={ () => activeBenefity()}>BENEFICIOS</p>
                    </li>
                    <li>
                        <div className="v-line"></div>
                        <p onClick={ () => activeRoadmap()}>ROADMAP</p>
                    </li>
                    <li>
                        <div className="v-line"></div>
                        <p onClick={ () => activeFaqs()}>FAQS</p>
                    </li>
                </ul>
                <hr />
            </div>
                <div className="center">
                    <div className={ utility ? 'nfts' : 'desactive'}>
                        {

                            dta.nfts.map(card=>{
                                return <Cards key={card.id} props={card}/>
                            })

                        }
                    </div>
                    <div className={ utility ? 'nfts--botton' : 'desactive'}>
                        <p>Muy pronto tendrás la colección completa</p>
                    </div>
                </div>
                <div className={ utility ? 'nfts--footer' : 'desactive'}>
                    <h3>coleccion instafest</h3>
                    <button className='btn'>Conectar Billetera <img src={arrowUpRight} alt="flecha" /></button>
                    
                </div>
                <div className={ collection ? 'collection' : 'desactive'}>
                    
                </div>
                <div className={ benefity ? 'benefity' : 'desactive'}>

                </div>
                <div className={ roadmap ? 'roadmap' : 'desactive'}>

                </div>
                <div className={ faqr ? 'faqs' : 'desactive'}>

                </div>

        </div>
    </div>
     );
}
 
export default Utility;