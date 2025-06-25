import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {

    return (
        <div className="navbar">
            <img src={logo} alt="" />
            <ul className="nav-menu">
                <li><AnchorLink className="anchor-link" href="#home"><p>Home</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#about"><p>About Me</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#funfacts"><p>Fun Facts</p></AnchorLink></li>
                <li><AnchorLink className="anchor-link" offset={50} href="#gallery"><p>Gallery</p></AnchorLink></li>
            </ul>
            <div className="nav-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Contact Me</AnchorLink></div>
        </div>
    );
};

export default Navbar;
