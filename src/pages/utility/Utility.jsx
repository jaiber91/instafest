import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Utility.css'
import { useParams } from 'react-router-dom';

import Data from '../../data/collectionData';
import Cards from '../../components/cards/Card';
import arrowUpRight from "../../assets/icons/arrow-up-right.svg";
import {imagesNfts} from '../../assets/images/nfts/imagesNfts'
import UtilityCollection from '../../components/utility-collection/Utility-Collection';
import FooterV2 from '../../components/footerV2/FooterV2';
import Benefits from '../../components/benefits/Benefits';
const Utility = () => {
    const {id}= useParams();

    const dta = Data.find( fruta => fruta.id === id );

    let [utility, setUtility ]=useState(true);
    let [collection, setCollection ]=useState(false);
    let [benefity, setBenefity ]=useState(false);
    let [roadmap, setRoadmap ]=useState(false);
    let [faqr, setFaqr ]=useState(false);

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
                    <FooterV2 props={utility}/>
                    
                    <div className={ collection ? 'utility--collection' : 'desactive'}>
                        <UtilityCollection props={dta}/> 
                    </div>
            
                    <FooterV2 props={collection}/>

                    <div className={ benefity ? 'benefity' : 'desactive'}>
                        <Benefits props={dta}/>
                    </div>
                    <FooterV2 props={benefity}/>
                    <div className={ roadmap ? 'roadmap' : 'desactive'}>

                    </div>
                    <div className={ faqr ? 'faqs' : 'desactive'}>

                    </div>
                </div>

        </div>
    </div>
     );
}
 
export default Utility;