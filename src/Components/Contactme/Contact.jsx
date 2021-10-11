import React, { useState } from 'react';
import aboutps1 from './../../Assets/Images/aboutps1.jpg';
import './Contact.css';

const Contact = () => {
    const [userData , setUserData] = useState({
        firstName:"",
        lastName:"",
        phone:"",             // We declared these variables in the useState
        email:"",             // now we can't type anything in these section unless postUserDAta function is defined.
        message:"" ,
    })
    
    let name,value;
    const postUserData = (event) =>{
        name = event.target.name;
        value = event.target.value;

        setUserData({...userData, [name]:value  }) 
    }

    const submitData = async (event) =>{
        event.preventDefault();
        const {firstName, lastName, phone, email, message} = userData;

        if(firstName && lastName && phone && email && message) 
        {

            const res = await fetch("https://psportfolio2-default-rtdb.firebaseio.com/PSDataRecords.json" , 
            {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({
                    firstName, lastName, phone, email, message
                })
            }
            );

            if(res) {
                setUserData({
                    firstName:"",
                    lastName:"",
                    phone:"",             // We are Clearing all the data once Submitted.
                    email:"",             
                    message:"" 
                })
                alert("Data Stored");
                }else{
                alert("Please Fill the Data");
            }
        }else{
            alert("Please Fill the Data");
        }
    };
    return (
        <div>
            <section className="contact-section">
                <div className="container">
                    <h1 className="contact-heading fw-bold text-center">
                        Contact Me!!
                    </h1>
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-left col-12 col-lg-5 text-center">
                                    
                                    {/* <p className="contact-para">Feel free to contact me for any queries and suggestion.</p> */}
                                    <figure>
                                        <img src={aboutps1} alt="contactps"  className="img-fluid" />
                                    </figure>
                                </div>
                                <div className="contact-right col-12 col-lg-7">
                                    <form method="POST">   
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact">
                                                <input type="text" name="firstName" id=""
                                                 placeholder="First Name" className="form-control"
                                                 value={userData.firstName}
                                                 onChange={postUserData}/>
                                            </div>
                                             <div className="col-12 col-lg-6 contact">
                                                <input type="text" name="lastName" id=""
                                                  placeholder="Last Name" className="form-control"
                                                  value={userData.lastName}
                                                 onChange={postUserData}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact">
                                                <input type="text" name="phone" id="" 
                                                  placeholder="Mob.No" className="form-control"
                                                  value={userData.phone}
                                                 onChange={postUserData}/>
                                            </div>
                                             <div className="col-12 col-lg-6 contact">
                                                <input type="text" name="email" id=""
                                                 placeholder="E-mail" className="form-control"
                                                 value={userData.email}
                                                 onChange={postUserData}/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 contact">
                                                <input type="text" name="message" 
                                                  placeholder="Enter Your Message" className="form-control"
                                                  value={userData.message}
                                                 onChange={postUserData}/>
                                            </div>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                                            <label class="form-check-label" className="contact-para">
                                                I agree that Prathmesh may contact me with the email or phone no. mentioned above.
                                            </label>
                                        </div>
                                        <button type="submit" className="subbtn btn-style w-100"
                                         onClick={submitData}
                                         >
                                             Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
