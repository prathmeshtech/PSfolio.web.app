import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="col-6 col-lg-6">
                                    <h3 className="foo">PrathmeshTech</h3>
                                    <ul>
                                        <li>
                                            <a href="#">prathmeshsingh58@gmail.com</a>
                                        </li>
                                        <li>
                                            <a href="#">prathmeshsingh64@gmail.com</a>
                                        </li>
                                    </ul>
                                </div>
                                 {/* <div className="col-12 col-lg-3">
                                    <h2 className="foo">Support</h2>
                                    <ul>
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                    </ul
                                </div> */}
                                 <div className="col-6 col-lg-6">
                                    <h3 className="foo">Services</h3>
                                    <ul>
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                        <li>
                                            <a href="#">About</a>
                                        </li>
                                    </ul>
                                </div>
                                 {/* <div className="col-12 col-lg-4">
                                    <h3 className="foo">Reach Out</h3>
                                    <div className="row">
                                        <div className="col-4 mx-auto">
                                            <a href="https://www.instagram.com/i_m_singh_prathmesh/">
                                                <i className="fab fa-instagram fontawesome-style"></i>
                                            </a>
                                        </div>
                                        <div className="col-4 mx-auto">
                                            <a href="#">
                                                <i className="fab fa-facebook fontawesome-style"></i>
                                            </a>
                                        </div>
                                        <div className="col-4 mx-auto">
                                            <a href="https://twitter.com/prathmesh0804">
                                                <i className="fab fa-twitter fontawesome-style"></i>
                                            </a> 
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <hr />
                            <div className="mt-1">
                                <p className="footer-para text-center">
                                    Copyright @2021 PrathmeshTech. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
