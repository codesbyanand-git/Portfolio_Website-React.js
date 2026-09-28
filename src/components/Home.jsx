import React from "react";

import './home.css'
import heroImage from '../assets/developer-img.png'

const Home = () => {
  return (
    <div id="home" className="home">
      <div className="home-container">
        <div className="home-content">
          <p className="home-greeting">Hello, I'm</p>

          <h1>Anand S</h1>

          <h2>Full Stack Web Developer</h2>

          <p className="home-description">
            Building responsive, modern web applications with the ME(A)RN stack.
          </p>

          <p className="home-pitch">
            I create clean, practical and user-focused web experiences,
            combining thoughtful design with efficient development.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn-secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="home-image">
          <img src={heroImage} alt="Developer coding" />
        </div>
      </div>
    </div>
  );
};

export default Home;
