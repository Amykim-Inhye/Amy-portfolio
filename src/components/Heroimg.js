import React from 'react'
import './HeroimgStyles.css'
import IntroImg from '../assets/intro-bg.jpeg'
import { Link } from 'react-router-dom'

function Heroimg() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>HI, I'M Amy Kim</p>
        <h1>Full-Stack Web Developer</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
