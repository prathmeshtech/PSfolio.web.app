import React from 'react'
import './Aboutme.css'
import aboutps from './../../Assets/Images/aboutps.jpg';
import Skills from './Skills';

const Aboutme = () => {
    return (
        <div>
            
            <section className="about-section about-me">
                <div className="container about-container">
                    <h2 className="main-heading text-center">About Me</h2>
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center">
                            <img src={aboutps} alt="aboutPS" />
                        </div>
                        <div className="col-12 col-lg-7 right-data ">
                            <div className="row about-info text-center">
                                <div className="col-1 about-nos">1</div>
                                <div className="col-10 about-data">
                                    <div className="row">
                                        <div className="col-3"><h3>Name:</h3></div>
                                        <div className="col-8"><h3 className="span">Prathmesh Ganesh Singh</h3> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row about-info text-center">
                                <div className="col-1 about-nos">2</div>
                                <div className="col-10 about-data">
                                    <div className="row">
                                        <div className="col-3"><h3>DOB:</h3></div>
                                        <div className="col-8"><h3 className="span">28.04.2000</h3> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row about-info text-center">
                                <div className="col-1 about-nos">3</div>
                                <div className="col-10 about-data">
                                    <div className="row">
                                        <div className="col-3"><h3>Nationality:</h3></div>
                                        <div className="col-8"><h3 className="span">Indian</h3> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row about-info text-center">
                                <div className="col-1 about-nos">4</div>
                                <div className="col-10 about-data">
                                    <div className="row">
                                        <div className="col-3"><h3>Language:</h3></div>
                                        <div className="col-8"><h3 className="span">English, Hindi</h3></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row about-info text-center">
                                <div className="col-1 about-nos">5</div>
                                <div className="col-10 about-data">
                                    <div className="row">
                                        <div className="col-3"><h3>Address:</h3></div>
                                        <div className="col-8"><h3 className="span">Pen, Raigad, Maharashtra, India</h3></div>
                                    </div>
                                    <div className="buttonCV">
                                    <button className="btn-style btn-style-border">DownLoad CV</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="container skill-container">
                    <div className="heading text-center">
                        <h2 className="skill-heading">Skills</h2>
                        <i class="fas fa-clipboard-check"></i>
                    </div>
                    <div className="row">
                        <div className="skillsContainer col-12 col-lg-4 col-sm-4 ">
                            <Skills skill={'Data Structures & Algo'} progress={'90%'} width={'90%'} />
                            <Skills skill={'C++'} progress={'90%'} width={'90%'} />
                            <Skills skill={'MySQL Database'} progress={'70%'} width={'70%'} />
                            <Skills skill={'Computer Network'} progress={'80%'} width={'80%'} />
                        </div>
                        <div className="skillsContainer col-12 col-lg-4 col-sm-4 ">
                            <Skills skill={'Python'} progress={'60%'} width={'60%'} />
                            <Skills skill={'Data Science & ML'} progress={'65%'} width={'65%'}/>
                            <Skills skill={'MongoDB'} progress={'80%'} width={'80%'} />
                            <Skills skill={'ReactJS'} progress={'90%'} width={'90%'} />
                        </div>
                        <div className="skillsContainer col-12 col-lg-4 col-sm-4">
                            <Skills skill={'NodeJS'} progress={'70%'} width={'70%'} />
                            <Skills skill={'Firebase'} progress={'50%'} width={'50%'} />
                            <Skills skill={'UI/Ux Design'} progress={'70%'} width={'70%'} />
                        </div>
                    </div>
                </div>
            </section>
           
        </div>
    )
}

export default Aboutme
