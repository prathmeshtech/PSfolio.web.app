import React from 'react';
import workapi from '../../APIs/workapi';
import "./Itworks.css"

const Itworks = () => {
    return (
        <div>
            <header className="work-con">
            <section className="container work-container">
                <h1 className="main-heading  text-center">My Journey</h1>

                <div className="qualification_container container">
                    <div className="row">
                        <div className="col-12 col-lg-6 works-left-side d-flex justify-content-center flex-column align-items-center">
                            <i class="fas fa-graduation-cap"></i>
                            <h2>Education</h2>
                            <div className="qualification_sections">
                                <div className="qualification_content">
                                    {/* -----------------Qualification 1------------------ */}
                                    <div className="qualification_data">
                                        <div>
                                            <h4 className="qualification_title">Computer Science and PCM</h4>
                                            <span className="qualification_subtitle">SVM Junior College, Maharashtra, India</span>
                                            <div className="qualification_calender">2016-2018</div>
                                            <div className="qualification_grade"> 78.46 %</div>
                                        </div>

                                        <div>
                                            <span className="qualification_rounder"></span>
                                            <span className="qualification_line"></span>
                                        </div>
                                    </div>

                                   {/* -----------------Qualification 2------------------ */}
                                    <div className="qualification_data">
                                       <div></div>

                                       <div>
                                           <span className="qualification_rounder"></span>
                                           <span className="qualification_line"></span>
                                        </div>

                                        <div>
                                           <h4 className="qualification_title">B.Tech IT Engineering</h4>
                                           <span className="qualification_subtitle">Dr.BATU, Raigad, India</span>
                                           <div className="qualification_calender">2018-2022</div>
                                           <div className="qualification_grade">8.78 CGPA</div>
                                        </div>
                                    </div>

                                    {/* -----------------Qualification 3------------------ */}
                                    <div className="qualification_data">

                                        <div>
                                            <h4 className="qualification_title">Machine Learning</h4>
                                            <span className="qualification_subtitle">SkyFi Labs, India</span>
                                            <div className="qualification_calender">May'20-Jul'20</div>
                                        </div>

                                        <div>
                                            <span className="qualification_rounder"></span>
                                            {/* <span className="qualification_line"></span> */}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div className="col-12 col-lg-6 works-right-side d-flex justify-content-center flex-column align-items-center">
                           <i class="fas fa-suitcase"></i>
                           <h2>Work Experience</h2>

                           <div className="work_sections">
                               <div className="work_content">
                                 {/* -----------------Experience 1------------------ */}
                                    <div className="qualification_data">
                                        <div>
                                            <h4 className="qualification_title">MERN Stack Dev. Intern</h4>
                                            <span className="qualification_subtitle">Koyo Software Solutions - Mumbai, India</span>
                                            <div className="qualification_calender">Sep'21-Dec'21</div>
                                            {/* <div className="qualification_grade">8.78 CGPA</div> */}
                                        </div>

                                        <div>
                                            <span className="qualification_rounder"></span>
                                            <span className="qualification_line"></span>
                                        </div>
                                    </div>

                                  {/* -----------------Experience 2------------------ */}
                                    <div className="qualification_data">
                                        <div></div>

                                        <div>
                                            <span className="qualification_rounder"></span>
                                            {/* <span className="qualification_line"></span> */}
                                        </div>

                                        <div>
                                            <h4 className="qualification_title">Machine Learning</h4>
                                            <span className="qualification_subtitle">SkyFi Labs, India</span>
                                            <div className="qualification_calender">2019-2019</div>
                                            <div className="qualification_grade">Project Based Training</div>
                                        </div>
                                    </div>
                                </div>                    
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            </header>
        </div>
    )
}

export default Itworks











                // <div className="qualification_sections">
                //     <div className="qualification_content">
                //         {/* -----------------Qualification 1------------------ */}
                //         <div className="qualification_data">
                //             <div>
                //                 <h4 className="qualification_title">Computer Science and PCM</h4>
                //                 <span className="qualification_subtitle">SVM Junior College, Maharashtra, India</span>
                //                 <div className="qualification_calender">2016-2018</div>
                //                 <div className="qualification_grade"> 78.46 %</div>
                //             </div>

                //             <div>
                //                 <span className="qualification_rounder"></span>
                //                 <span className="qualification_line"></span>
                //             </div>
                //         </div>

                //         {/* -----------------Qualification 2------------------ */}
                //         <div className="qualification_data">
                //             <div></div>

                //              <div>
                //                 <span className="qualification_rounder"></span>
                //                 <span className="qualification_line"></span>
                //             </div>

                //             <div>
                //                 <h4 className="qualification_title">Inforamtion Technology Engineer</h4>
                //                 <span className="qualification_subtitle">DR. BAT University, Raigad, India</span>
                //                 <div className="qualification_calender">2018-2022</div>
                //                 <div className="qualification_grade">8.78 CGPA</div>
                //             </div>
                //         </div>

                //         {/* -----------------Qualification 3------------------ */}
                //         <div className="qualification_data">

                //             <div>
                //                 <h4 className="qualification_title">Machine Learning</h4>
                //                 <span className="qualification_subtitle">SkyFi Labs, India</span>
                //                 <div className="qualification_calender">May'20-Jul'20</div>
                //             </div>

                //             <div>
                //                 <span className="qualification_rounder"></span>
                //                 <span className="qualification_line"></span>
                //             </div>
                //         </div>
                //     </div>
                // </div>