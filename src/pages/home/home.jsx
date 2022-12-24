import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Divisor from '../../components/divisor/Divisor'
import Knowutility from '../../components/knownutility/Knowutility';
import FinalSectionHome from '../../components/finalSectionHome/FinalSectionHome';


const Home = () => {
    return ( 
    <div className='home'>
        <Navbar/>
        <Header/>
        <Divisor/>
        <Knowutility/>
        <Divisor/>
        <FinalSectionHome/>
        <Footer/>
    </div> 
    
    );
}
 
export default Home;