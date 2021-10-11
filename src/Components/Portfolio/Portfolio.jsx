import React,{useState} from 'react';
import styles from './Portfolio.css';
import projects from './../../APIs/Projects'
import port3 from './../../Assets/portfolio/port6.jpg';
// import { useState } from 'react/cjs/react.development';

const Portfolio = () => {
    const [Project, setProject] = useState(projects);
    return (
        <div>
            <section className="service-main-container">
                <div className="container service-container">
                    <h1 className="main-heading text-center fw-bold">PS Projects</h1>
                    <div className="row">
                        {projects.map((curElem) => {
                                const {id, link, title, info} = curElem;

                                return (
                                    <>
                                        <div 
                                            className="project-container-subdiv col-12 col-lg-4 col-md-6" key={id}>
                                            <a href={link}>
                                                <i class="fab fa-github"></i>
                                            </a>
                                            <h2>{title}</h2>
                                            <p className="project-para">{info}</p>
                                            
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </div>
    )
};

export default Portfolio;














// const [Project, setProject] = useState(projects);
//     return (
//         <div>
//             <section className="service-main-container">
//                 <div className="container service-container">
//                     <h1 className="main-heading text-center fw-bold">PS Projects</h1>
//                     <div className="row">
//                         {projects.map((curElem) => {
//                                 const {id, logo, title, info} = curElem;
//                                 return (
//                                     <div>
//                                         <div className="col-11 col-lg-4 col-xxl-4 project-container-subdiv" key={id}>
//                                             <img src={logo} alt="port" className="img-class" />
//                                             <h1>{title}</h1>
//                                         </div>
//                                     </div>
//                                 )
//                             })
//                         }

//                     </div>
//                 </div>
//             </section>
//         </div>
//     )