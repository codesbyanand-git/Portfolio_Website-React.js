import React from 'react'

import emailImg from '../assets/email-img.svg'
import phoneImg from '../assets/phone-img.svg'
import linkedinImg from '../assets/linkedin-img.svg'
import githubImg from '../assets/github-img.svg'

import './contacts.css'

const Contacts = () => {
  return (
    <section id="contact" className="contact">

      <div className="contact-container">

        <div className="contact-heading">

          <p className="section-label">
            CONTACT ME
          </p>

          <h2>
            Let's Connect
          </h2>

          <p>
            Have a project, opportunity, or simply want to connect?
            Feel free to reach out.
          </p>

        </div>


        <div className="contact-links">

          {/* Email */}

          <a
            href="mailto:anands.codes@gmail.com"
            className="contact-card"
          >
            <img
              src={emailImg}
              alt="Email"
            />

            <h3>Email</h3>

            <span>
              anands.codes@gmail.com
            </span>
          </a>


          {/* Mobile */}

          <a
            href="tel:+916282283221"
            className="contact-card"
          >
            <img
              src={phoneImg}
              alt="Phone"
            />

            <h3>Mobile</h3>

            <span>
              +91 62822 83221
            </span>
          </a>


          {/* GitHub */}

          <a
            href="https://github.com/codesbyanand-git"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <img
              src={githubImg}
              alt="GitHub"
            />

            <h3>GitHub</h3>

            <span>
              View my repositories
            </span>
          </a>


          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/anandsalji"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <img
              src={linkedinImg}
              alt="LinkedIn"
            />

            <h3>LinkedIn</h3>

            <span>
              Connect with me
            </span>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Contacts