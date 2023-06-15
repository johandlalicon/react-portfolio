import React, { useRef } from "react";
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
  const [nextPage, setNextPage] = useState(true);
  const [prevPage, setPrevPage] = useState(true);

  let navigate = useNavigate();
  const parsedId = Number(id);

  useEffect(() => {
    if (parsedId === ProjectList.length - 1) {
      setNextPage(false);
      setPrevPage(true);
    } else if (parsedId === 0) {
      setPrevPage(false);
      setNextPage(true);
    } else {
      setPrevPage(true);
      setNextPage(true);
    }
  }, [id]);

  function nextProject() {
    navigate(`/projects/${parsedId + 1}`);
  }
  function prevProject() {
    navigate(`/projects/${parsedId - 1}`);
  }

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
        {prevPage && (
          <button onClick={() => prevProject()}>
            <ArrowBackIcon />
          </button>
        )}
        {nextPage && (
          <button onClick={() => nextProject()}>
            <ArrowForwardIcon />
          </button>
        )}
      </div>
    </div>
  );
}

export default ProjectDisplay;
