import React from 'react'
import './Hero.css'
const Hero = () => {
    
  return (
    <div className='hero' id="hero">
      <h1>Vaishnavi Rasalay</h1>
      <p className='role'>Frontend Developer</p>
      <p className='dis'>Passionate frontend developer specializing in building interactive and user-friendly web applications with React.</p>
      <a href="/Vaishnavi Resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
  Download Resume
</a>
<div className="hero-buttons">
  <a href="#projects" className="view-btn">View Projects</a>
  
  <a href="https://github.com/VaishnaviRasalay" target="_blank" className="social-btn">
    GitHub
  </a>

  <a href="https://www.linkedin.com/in/rasalayvaishnavi/" target="_blank" className="social-btn">
    LinkedIn
  </a>
</div>
    </div>
  )
}

export default Hero
