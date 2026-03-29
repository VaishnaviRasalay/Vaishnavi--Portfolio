import React from "react";
import projects from "./ProjectsData";
import "./Projects.css";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="project-container">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <h3>{proj.title}</h3>

            <p className="tech">{proj.tech}</p>

            <ul>
              {proj.desc.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <div className="project-buttons">
              <a href={proj.live} target="_blank" rel="noreferrer">
                Live
              </a>
              <a href={proj.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;