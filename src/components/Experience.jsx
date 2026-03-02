import React from 'react'
import './Experience.css'
const Experience = () => {
  return (
   <div className="timeline-section" id="experience">
  <h2>Career Journey</h2>

  <div className="timeline">

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>2024 – Frontend Developer</h4>
        <p>Cognizant</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>(2023 - 2024) – Software Developer (Intern)</h4>
        <p>Linchpin</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>2023 – Master of Computer Applications</h4>
        <p>Sree Venkateshwara College of Engineering, Tirupati</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>2021 – BSc</h4>
        <p>Karnataka Science College, Dharwad</p>
      </div>
    </div>

  </div>
</div>
  )
}

export default Experience
