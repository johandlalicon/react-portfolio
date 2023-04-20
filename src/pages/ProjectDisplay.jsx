import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/ProjectDisplay.css";
import ProjectFeatures from "../components/ProjectFeatures";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ProjectList } from "../helpers/Projectlist.js";
import CodeIcon from "@mui/icons-material/Code";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const [showBtn, setShowBtn] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    setShowBtn(Number(id) === 0 ? true : false);
  });

  return (
    <div className="project">
      <div className="about-wrap">
        <h2>About The Project</h2>
        <p>{project.about}</p>
        <div className="link-wrap">
          <a href={project.github} target="_blank" rel="noreferrer">
            <CodeIcon />
            <span style={{ display: "block" }}>Code</span>
          </a>
          <a href={project.live} target="_blank" rel="noreferrer">
            <LiveTvIcon />
            <span style={{ display: "block" }}>Live</span>
          </a>
        </div>
        <span>
          <i>
            *** Live site is hosted on Render for free, load time take 1-2 mins.
          </i>
        </span>
      </div>
      <div className="project-details">
        <div>
          <ProjectFeatures features={project.features} title="Key Features" />
          <ProjectFeatures features={project.skills} title="Skills" />
        </div>
      </div>

      <div className="next-prev">
        <button
          onClick={() => {
            navigate(showBtn ? "/projects/1" : "/projects/0");
          }}
        >
          {showBtn ? <ArrowForwardIcon /> : <ArrowBackIcon />}
        </button>
      </div>
    </div>
  );
}

/* <div className="image-wrap">
          <img src={project.image} />
        </div> */

export default ProjectDisplay;
