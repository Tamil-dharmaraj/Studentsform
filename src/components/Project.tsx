// src/components/Projects.tsx
import React from "react";
import "./Project.css";

const Projects: React.FC = () => {
  const projects = [
    { title: "Project One", description: "A cool React project", link: "#" },
    { title: "Project Two", description: "Another awesome project", link: "#" },
    { title: "Project Three", description: "Something amazing", link: "#" },
  ];

  return (
    <section style={{ marginBottom: "40px" }}>
      <h2>Projects</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index} style={{ marginBottom: "20px" }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
