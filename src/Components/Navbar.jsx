import React,{ useState} from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const[show, setshow] = useState(false);

    return (
        <div>
            <section className="navbar-bg">
            <nav class="navbar navbar-expand-lg navbar-light ">
               <div class="container">
                   <a class="navbar-brand" href="#">PrathmeshTech</a>
                   <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                     data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                     aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"
                     onClick={() => setshow(!show)}></span>
                    </button>
                    <div class={`collapse navbar-collapse ${show ? "show": ""}` }>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    About Me
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/itworks">
                                    My Summary
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/project">
                                    Portfolio
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Blogs
                                </NavLink>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <button class="btn btn-style" type="submit">Contact Me</button>
                        </form>
                    </div>
                </div>
            </nav>
            </section>
        </div>
    )
}

export default Navbar
