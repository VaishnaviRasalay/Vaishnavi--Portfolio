import React from 'react'
import './Hero.css'
const Hero = () => {
    
  return (
   <section className="hero">
      <h1>Hi, I'm Vaishnavi</h1>
      <h2>Frontend Developer | React | JavaScript</h2>
      <p>I build responsive and user-friendly web applications.</p>

      <div className="hero-buttons">
        <a href="#projects" className="btn">View Projects</a>
        <a href="/Vaishnavi_Resume.pdf" download className="btn secondary">
          Download Resume
        </a>
      </div>
  
  
   <a href="https://github.com/VaishnaviRasalay" target="_blank"  rel="noreferrer" className="social-btn">
    GitHub
  </a>

  <a href="https://www.linkedin.com/in/rasalayvaishnavi/" target="_blank" rel="noreferrer" className="social-btn">
    LinkedIn
  </a> 
    </section>

  )
}

export default Hero
