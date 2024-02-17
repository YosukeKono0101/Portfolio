import React from "react";
import "../main.css";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#" onClick={() => scrollToSection("top")}>
          <i className="fa-sharp fa-solid fa-otter"></i>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 nav-justified">
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick={() => scrollToSection("top_banner")}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-me" onClick={() => scrollToSection("about me")}>
                ABOUT ME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#My Portfolio" onClick={() => scrollToSection("My-Portfolio")}>
                MY PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" onClick={() => scrollToSection("Skills")}>
                SKILLS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={() => scrollToSection("Contact")}>
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
