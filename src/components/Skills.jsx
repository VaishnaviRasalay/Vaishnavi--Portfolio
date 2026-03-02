import React from 'react'
import "./Skills.css"
import { FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const Skills = () => {
  return (
    <div className='skills' id="skills">
      <h2 className='skillheading'>Skills</h2>
     <div className='box'>
        <div className="boxes">
   <FaHtml5 className="skill-icon" />
   <span>HTML</span>
</div>

<div className="boxes">
   <FaCss3Alt className="skill-icon" />
   <span>CSS</span>
</div>

<div className="boxes">
   <SiJavascript className="skill-icon" />
   <span>JavaScript</span>
</div>

<div className="boxes">
   <FaBootstrap className="skill-icon" />
   <span>Bootstrap</span>
</div>

<div className="boxes">
   <FaReact className="skill-icon" />
   <span>React</span>
</div>

<div className="boxes">
   <FaGitAlt className="skill-icon" />
   <span>Git</span>
</div>
     </div>
    </div>
  )
}

export default Skills
