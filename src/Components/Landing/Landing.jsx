import React, {useEffect} from 'react';
import "./Landing.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import psingh from './../../Assets/Images/psdp.jpg';
import mern from './../../Assets/Images/mern1.jpg';

const Landing = () =>{
    
    return (
        <div>
            <header>
            <section className="container main-hero-container">
                <div className="row">
                    {/* Left Section */}
                    <div className="col-12 col-lg-8 header-left-side d-flex justify-content-center flex-column align-items-center">
                        <h1 className="display-2">Hi, I am
                         <span> Prathmesh Singh</span>
                        </h1>
                        <p className="main-hero-para">
                            UnderGrad in the field of Information technology Engineering and currently working as MERN Stack Developer.
                        </p>
                        <div className="icons d-flex justify-content-center ">
                            <a href="https://github.com/prathmeshtech">
                                <FontAwesomeIcon icon={faGithub} className="icon-gh" />
                            </a>
                            <a href="https://www.linkedin.com/in/prathmeshsingh85/">
                                <FontAwesomeIcon icon={faLinkedin} className="icon-ln" />
                            </a>
                            <a href="/">
                                 <FontAwesomeIcon icon={faYoutube} className="icon-yt" />
                            </a>
                            <a href="https://www.instagram.com/i_m_singh_prathmesh/">
                                <FontAwesomeIcon icon={faInstagram} className="icon-ig" />
                            </a>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="col-12 col-lg-4 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
                        <img src= {psingh} alt="heroimg" className="img"/>
                        {/* <img src= {mern} alt="heroimg" className="img-fluid main-hero-img2"/> */}
                    </div>
                </div>
            </section>
            </header>
        </div>
    )
}

export default Landing
