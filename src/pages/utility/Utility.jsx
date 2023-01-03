import React, { useContext, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Utility.css'
import { Link, useParams } from 'react-router-dom';

import Data from '../../data/collectionData';
import Cards from '../../components/cards/Card';
import arrowUpRight from "../../assets/icons/arrow-up-right.svg";
import UtilityCollection from '../../components/utility-collection/Utility-Collection';
import FooterV2 from '../../components/footerV2/FooterV2';
import Benefits from '../../components/benefits/Benefits';
import Roadmap from '../../components/roadmap/Roadmap';
import Faqs from '../../components/faqs/Faqs';
import Footer from '../../components/footer/Footer';
import Timer from '../../components/timer/Timer';
import arrowDownLeft from '../../assets/icons/arrow-down-left.svg'
import share from '../../assets/icons/share.svg'
import globe from '../../assets/icons/globe.svg'
import Cart from '../../components/Cart/Cart';
import { providerContext } from '../../context/status';

const Utility = () => {
    const {id}= useParams();

    const dta = Data.find( fruta => fruta.id === id );

    const{cart, cartOpen }= useContext(providerContext);

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
            <div className="utility--nav">
                <img src={dta.img} alt="" />
                <div className="nav--time">
                    <h1>instafest</h1>
                        <Timer/>
                </div>
            </div>
            <div className="nav-button">
                <button className='btn'>Whitelist <img src={arrowDownLeft} alt="" /></button>
            </div>
            <div className="sub-nav">
                    <div className="img">
                        <img src={dta.imgIcon} alt="" />
                    </div>
                <div className="icons-nav">
                    <img src={globe} alt="" />
                    <img src={share} alt="" />
                </div>
            </div>
            <div className="utility__list">
                <ul>
                    <li>
                        <p  onClick={() => activeUtility()} >UTILITY NFT’S</p>
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
                    <div className="nfts-cards-sidebar">
                        <div className= { utility ? 'nfs-sidebar' : 'desactive'}>
                            <div className='nfts'>
                                {

                                    dta.nfts.map(card=>{
                                        return <div onClick={()=> cartOpen()}>
                                                <Cards key={card.id} props={card}/>
                                            </div>
                                    })

                                }
                            </div>
                                <Cart />
                        </div>
                        <div className={ utility ? 'nfts--botton' : 'desactive'}>
                                <p>Muy pronto tendrás la colección completa</p>
                        </div>
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
                        <Roadmap props={dta}/>
                    </div>
                    <div className={ faqr ? 'faqs-utility' : 'desactive'}>
                        <div className="faqs-center">
                            
                        {
                            dta.faqs.map(data=>{
                                return <Faqs key={data.id} props={data}/>
                            })
                        }
                        <div className="faqs-suscribe"
                        >   
                            <img src={dta.img} alt="" />
                            <div className="faqs-text">
                                <h3>PROXIMAMENTE PODRAS EXPLORAR EL UNIVERSO INSTAFEST UTILITY NFT’S </h3>
                                <div className="faqs-a">
                                    <Link to={'/whitelist'}>
                                        <p>Suscribirse</p>
                                        <img src={arrowUpRight} alt="" />
                                    </Link>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                    <div className={ faqr ? '' : 'desactive'}>
                        <Footer/>
                    </div>
                </div>

        </div>
    </div>
     );
}
 
export default Utility;