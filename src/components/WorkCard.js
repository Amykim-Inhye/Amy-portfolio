import React from 'react'
import './WorkCardStyles.css'

const WorkCard = (props) => {
  return (
    <div className="work-container">
      <div className="project-container-1">
        <div className="project-card">
          <img src={props.imgsrc} alt="image" />
          <h2 className="project-title">{props.title}</h2>
          <div className="pro-details">
            <p>{props.skills}</p>
            <div className="pro-btns">
              <a
                href={props.view}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                View
              </a>
              <a
                href={props.source}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Source
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
