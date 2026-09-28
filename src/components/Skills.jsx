import React from 'react'

import './skills.css'

const Skills = () => {
  return (
    <section id="skills" className="skills">

      <div className="skills-container">

        <div className="skills-heading">
          <p>MY SKILLS</p>

          <h2>
            Technologies I Work With
          </h2>

          <p className="skills-intro">
            A growing toolkit of technologies I use to build
            responsive and modern web applications.
          </p>
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Frontend</h3>

            <div className="skill-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Bootstrap</span>
              <span>Tailwind CSS</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>

            <div className="skill-list">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Database</h3>

            <div className="skill-list">
              <span>MongoDB</span>
              <span>Database Management</span>
            </div>
          </div>

          <div className="skill-card">
            <h3>Tools</h3>

            <div className="skill-list">
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
              <span>Vite</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  )
}

export default Skills