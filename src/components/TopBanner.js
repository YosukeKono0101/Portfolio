import React from "react";
import "../main.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ResumePDF from "../assets/resume.pdf";

const TopBanner = () => {
  const githubUrl = process.env.REACT_APP_GITHUB_URL;
  const linkedinUrl = process.env.REACT_APP_LINKEDIN_URL;

  return (
    <div id="TopBanner" style={{ marginTop: "56px" }}>
      <div className="container top text-center">
        <h1 className="display-4">Yosuke Kono</h1>
        <p className="lead">Software Developer</p>
        <div className="social-icons">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} color="white" />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} color="white" />
          </a>
        </div>
        <div className="cv-download-container">
          <a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="cv-download-button"
          >
            View CV
            <i className="fa-solid fa-eye download-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
