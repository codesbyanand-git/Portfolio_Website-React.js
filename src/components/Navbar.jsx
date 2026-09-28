import React from "react";
import './navbar.css'
import navbarLogo from '../assets/navbar-logo.png'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">

        <a href="#home" className="logo">
          <img src={navbarLogo} alt="logo" />
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

      </div>
      
    </div>
  );
};

export default Navbar;
