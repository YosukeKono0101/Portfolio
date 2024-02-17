import React from "react";
import "../main.css";
import ResumePDF from "../assets/resume.pdf";

const TopBanner = () => {
  return (
    <div className="top_banner">
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container top">
          <h1 className="display-4">Yosuke Kono</h1>
          <p className="lead">IT Engineer</p>
          <div className="social-icons">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="https://github.com/YosukeKono0101" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/yosuke-kono-aa12661b0/" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
          </div>
          <div className="cv-download-container">
            <a href={ResumePDF} download="YosukeKono_Resume.pdf" className="cv-download-button">
              Download CV
              <i className="fa-solid fa-file-arrow-down download-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
