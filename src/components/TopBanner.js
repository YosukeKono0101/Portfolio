import React from "react";
import "../main.css";
import "../animations.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillFilePersonFill } from "react-icons/bs";
import ResumePDF from "../assets/resume.pdf";

const TopBanner = () => {
  return (
    <div id="TopBanner" className="top-banner">
      <div className="container top text-center">
        <h1 className="display-4 fade-in">Yosuke Kono</h1>
        <p className="lead fade-in-delay">Software Developer</p>
        <div className="social-icons fade-in-delay">
          <a
            href="https://github.com/YosukeKono0101"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="social-icon"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/yosukekono"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="social-icon"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href={ResumePDF}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume PDF"
            className="social-icon"
          >
            <BsFillFilePersonFill size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
