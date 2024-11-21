import React from "react";
import "../main.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>&copy; {currentYear} Yosuke Kono</p>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/yosukekono"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://github.com/YosukeKono0101"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
