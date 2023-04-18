import React from "react";
import "../styles/ProjectFeatures.css";

function ProjectFeatures(props) {
  return (
    <div className="project-features">
      <ul>
        <h2>{props.title}</h2>
        {props.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectFeatures;
