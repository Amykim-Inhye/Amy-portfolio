import React from 'react'
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'
import './FooterStyles.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: '#fff', marginRight: '2rem' }} />
            <div>
              <a
                href="https://goo.gl/maps/YfKzZiLN9sofwguK6"
                target="_blank"
                rel="noreferrer"
              >
                Wellington, New Zealand
              </a>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              <a href="tel:+64211782449">0211782449</a>
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: '#fff', marginRight: '2rem' }}
              />
              <a href="mailto:ggg6519@gmail.com">ggg6519@gmail.com</a>
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Amy Kim</h4>
          <p>
            Full-Stack Developer. I love discussing new projects and design
            challenges.
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/inhye-kim-181934235/">
              <FaLinkedin
                size={20}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
            <a href="https://www.instagram.com/amyweb_developer/">
              <FaInstagram
                size={20}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
            <a href="https://github.com/Amykim-Inhye">
              <FaGithub
                size={20}
                style={{ color: '#fff', marginRight: '1rem' }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
