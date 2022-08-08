import React from 'react'
import './AboutContentStyles.css'
import { Link } from 'react-router-dom'
import React1 from '../assets/react.png'
import React2 from '../assets/database.jpeg'

function AboutContent() {
  return (
    <>
      <div className="about">
        <div className="left">
          <h1>WHO AM I?</h1>
          <p>
            Hello I am a full-stack web developer. I'm an enthusiastic and
            detail-oriented Frontend Software Developer seeking an full-Stack
            developer position with Company to use my skills in coding,
            troubleshooting complex problems, and assisting in the timely
            completion of projects.
          </p>
          <Link to="/contact">
            <button className="btn">Contact</button>
          </Link>
        </div>
        <div className="right">
          <div className="img-container">
            <div className="img-stack top">
              <img src={React1} className="img" alt="ture" />
            </div>
            <div className="img-stack bottom">
              <img src={React2} className="img" alt="ture" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutContent
