import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import Divisor from '../../components/divisor/Divisor'


const Home = () => {
    return ( 
    <div className='home'>
        <Navbar/>
        <Header/>
        <Divisor/>
        <Footer/>
    </div> 
    
    );
}
 
export default Home;