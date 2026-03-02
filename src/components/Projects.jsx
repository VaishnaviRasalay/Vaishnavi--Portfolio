import React from 'react'
import "./Projects.css"

const Projects = () => {
  return (
    <div className='projects' id="projects">
      <h2>Projects</h2>

      <div className='projectboxes'>

        <div className='projectcard'>
          <h5>CRUD Application</h5>
          <p>
            A React-based CRUD application that allows users to add, edit, and delete records dynamically using component state and reusable forms.
          </p>
          <p className='tech'>Tech Stack: React, CSS, JavaScript</p>

          <div className="btn-group">
            <a 
              href="https://github.com/VaishnaviRasalay/CURDoperations" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github"
            >
              GitHub
            </a>

            <a 
              href="https://vaishnavirasalay.github.io/CURDoperations/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='livedemo'
            >
              Live Demo
            </a>
          </div>
        </div>


        <div className='projectcard'>
          <h5>User Management App</h5>
          <p>
            A dynamic user management system built with React, implementing filtering, toggling active status, and responsive UI design.
          </p>
          <p className='tech'>Tech Stack: React, CSS, JavaScript</p>

          <div className="btn-group">
            <a 
              href="https://github.com/VaishnaviRasalay/user-management-app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="github"
            >
              GitHub
            </a>

            <a 
              href="https://vaishnavirasalay.github.io/user-management-app/" 
              target="_blank"
              rel="noopener noreferrer"
              className='livedemo'
            >
              Live Demo
            </a>
          </div>
        </div>


        <div className='projectcard'>
          <h5>Weather App (API)</h5>
          <p>
            A weather application using a public API to fetch real-time weather data based on user input with dynamic UI updates.
          </p>
          <p className='tech'>Tech Stack: HTML, CSS, JavaScript, API</p>

          <div className="btn-group">
            <a 
              href="https://github.com/VaishnaviRasalay/weatherApp-using-API" 
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              GitHub
            </a>

            <a 
              href="https://vaishnavirasalay.github.io/weatherApp-using-API/" 
              target="_blank"
              rel="noopener noreferrer"
              className='livedemo'
            >
              Live Demo
            </a>
          </div>
        </div>


        <div className='projectcard'>
          <h5>Todo Application</h5>
          <p>
            A task management application implementing add, delete, search, and completion functionality using React hooks.
          </p>
          <p className='tech'>Tech Stack: React, CSS, JavaScript</p>

          <div className="btn-group">
            <a 
              href="https://github.com/VaishnaviRasalay/todolist" 
              target="_blank"
              rel="noopener noreferrer"
              className="github"
            >
              GitHub
            </a>

            <a 
              href="https://todolist-blush-nine.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className='livedemo'
            >
              Live Demo
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects