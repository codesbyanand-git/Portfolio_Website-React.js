import React from 'react'

import './projects.css'

import prj1 from '../assets/contact-manager-ss.png'

const Projects = () => {
  return (
   <section id="projects" className="projects">

      <div className="projects-container">

        <div className="projects-heading">

          <p>MY PROJECTS</p>

          <h2>
            Featured Project
          </h2>

          <p>
            A selection of projects I have built while developing
            my web development skills.
          </p>

        </div>


        <div className="project-card">

          <div className="project-image">

            <img
              src={prj1}
              alt="Contact Manager"
            />

          </div>


          <div className="project-content">

            <h3>
              Contact Manager
            </h3>

            <p>
              A browser-based contact management application that
              allows users to add, edit and delete contact information
              with data persistence using localStorage.
            </p>

            <div className="project-technologies">

              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>localStorage</span>

            </div>


            <div className="project-buttons">

              <a
                href="https://github.com/codesbyanand-git/contact-manger-js-webstorageAPIs"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

              <a
                href=" https://codesbyanand-git.github.io/contact-manger-js-webstorageAPIs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Projects