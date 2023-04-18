import React from "react";
import "../styles/Home.css";
import ContactMe from "./ContactMe";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import EmailIcon from "@mui/icons-material/Email";
import {
  CssIcon,
  HtmlIcon,
  ReactIcon,
  MongoIcon,
  JsIcon,
  NodeIcon,
  BootstrapIcon,
} from "../helpers/IconsList";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hello, My Name is Yohan</h2>
        <div className="prompt">
          <p>
            I'm a self-taught full stack web developer with a passion for
            building websites and a willingness to learn and take on new
            challenges in the field.
          </p>
          <p>
            Check out my{" "}
            <span>
              <a href="/projects">projects</a>
            </span>
            !
          </p>
        </div>
        <div className="contact-links">
          <a
            href="https://github.com/johandlalicon"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/johan-lalicon/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/1DTeh0xtVBkFEfgUjm6LHpoCNnS82O26U/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <FileOpenIcon />
          </a>
          <a href="mailto:johandlalicon@hotmail.com.com?subject=Portfolio Inquiry">
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <div className="full-about">
          <h2>About Me</h2>
          <p>
            As someone who has recently shifted careers, I found my passion for
            web development through my love of problem-solving and creativity.
            Throughout my career transition, I have learned the value of
            persistence and focus, which I have honed through my love of video
            games.
          </p>
          <p>
            Upon completing Colt Steele's Web Dev Course on Udemy, I recognized
            the need for practical, hands-on experience. To this end, I decided
            to create my own gaming website, which allowed me to encounter and
            overcome challenging obstacles that reminded me of the sense of
            accomplishment I experience after completing a difficult boss
            battle.
          </p>
          <p>
            I approach coding with the same tenacity and eagerness as I do my
            favorite video games, and I enjoy applying my creativity and focus
            to solve complex problems. With each coding challenge, I am excited
            to expand my skill set and learn new approaches that will help me
            become an even better web developer.
          </p>
        </div>
        <div className="icons-skills">
          <HtmlIcon />
          <CssIcon />
          <JsIcon />
          <ReactIcon />
          <BootstrapIcon />
          <NodeIcon />
          <MongoIcon />
        </div>
      </div>
      <ContactMe />
    </div>
  );
}

export default Home;
