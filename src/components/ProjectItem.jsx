import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/projects/" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <div className="show-project">
        <h1>{name}</h1>
        <p>Click For More</p>
      </div>
    </div>
  );
}

export default ProjectItem;
