import React from "react";
import "../main.css";
import ResumePDF from "../assets/resume.pdf";

const TopBanner = () => {
  return (
    <div className="top_banner">
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container top">
          <h1 className="display-4">Yosuke Kono</h1>
          <p className="lead">Software Developer</p>
          <div className="social-icons">
            <a
              href="https://github.com/YosukeKono0101"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yosuke-kono-aa12661b0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in"></i>
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
    </div>
  );
};

export default TopBanner;
