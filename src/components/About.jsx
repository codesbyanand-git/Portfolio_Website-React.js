import React from 'react'

import './about.css'

import aboutMeImg from '../assets/about-img.png'

const About = () => {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <div className="about-heading">
          <p>ABOUT ME</p>
        </div>

        <div className="about-content">

          <div className="about-image">
            <img
              src={aboutMeImg}
              alt="About me"
            />
          </div>

          <div className="about-text">

            <h2>
              A Full Stack Developer focused on building
              modern web experiences.
            </h2>

            <p>
              I'm a Full Stack Web Developer focused on building
              responsive and user-friendly web applications using
              modern web technologies.
            </p>

            <p>
              I enjoy turning ideas into functional interfaces,
              working with APIs and databases, and developing
              applications that are clean, practical and easy to use.
            </p>

            <p>
              My current focus is the MERN stack, with a commitment
              to continuously expanding my skills across the
              full web development ecosystem.
            </p>

          </div>

        </div>

      </div>

    </section>
  )
}

export default About