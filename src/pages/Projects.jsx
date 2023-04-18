import React from "react";
import "../styles/Projects.css";
import { ProjectList } from "../helpers/Projectlist.js";
import ProjectItem from "../components/ProjectItem";

function Projects() {
  return (
    <div className="projects">
      <h1>Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project) => {
          return (
            <ProjectItem
              name={project.name}
              image={project.image}
              id={project.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
