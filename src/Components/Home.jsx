import React from 'react';
import Navbar from './Navbar';
import Landing from './Landing/Landing';
import Itworks from './Itworks/Itworks';
import Aboutme from  './Aboutme/Aboutme';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contactme/Contact';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Itworks/> 
      <Aboutme/>
      <Portfolio/>
      <Contact/>
      <Footer/>      
    </div>
  )
}

export default Home;