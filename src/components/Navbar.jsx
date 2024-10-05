import React from "react";
import {NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import myImage from "../assets/Attendence2.jpg";

const Navbar = () =>  {
    return(
        <>  
            <nav className="navbar bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand d-flex" href="#">
                        <img className="me-2 mt-0 pt-0" src={myImage} width={"20px"} height={"20px"} style={{borderRadius:"50%"}}></img>
                        <p className="">Helioscope</p>
                    </NavLink>

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>

                    <button type="button" class="btn btn-outline-light">Login</button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link menu-active text-white" : "nav-link text-white"} aria-current="page" to="/">HOME</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link menu-active text-white" : "nav-link text-white"}  to="/about">ABOUT</NavLink>
                            </li> 
                            <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link menu-active text-white" : "nav-link text-white"}  to="/contact">CONTACT</NavLink>
                            </li> 
                            <li className="nav-item">
                            <NavLink className={({ isActive }) => isActive ? "nav-link menu-active text-white" : "nav-link text-white"}  to="/register">SIGN_IN</NavLink>
                            </li> 
                        </ul>
                    </div>
                </div>

                
            </nav>
        </>
    );
}

export default Navbar;