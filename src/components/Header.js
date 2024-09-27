import React, { useState, useEffect } from "react";
import "../main.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("TopBanner");

  const scrollToSection = (sectionId) => {
    if (sectionId === "TopBanner") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const handleScroll = () => {
    const sections = [
      "TopBanner",
      "AboutMe",
      "Profile", // Added Profile here
      "Projects",
      "Skills",
      "Contact",
    ];
    let currentSection = "TopBanner";

    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = sectionId;
        }
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a
          className="navbar-brand"
          href="#TopBanner"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("TopBanner");
          }}
        >
          <i className="fa-sharp fa-solid fa-otter"></i>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 nav-justified">
            <li
              className={`nav-item ${
                activeSection === "TopBanner" ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href="#TopBanner"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("TopBanner");
                }}
              >
                Home
              </a>
            </li>
            <li
              className={`nav-item ${
                activeSection === "AboutMe" ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href="#AboutMe"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("AboutMe");
                }}
              >
                ABOUT ME
              </a>
            </li>
            <li
              className={`nav-item ${
                activeSection === "Projects" ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href="#Projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("Projects");
                }}
              >
                MY PROJECTS
              </a>
            </li>
            <li
              className={`nav-item ${
                activeSection === "Skills" ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href="#Skills"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("Skills");
                }}
              >
                SKILLS
              </a>
            </li>
            <li
              className={`nav-item ${
                activeSection === "Profile" ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href="#Profile"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("Profile");
                }}
              >
                PROFILE
              </a>
            </li>
            <li
              className={`nav-item ${
                activeSection === "Contact" ? "active" : ""
              }`}
            >
              <a
                className="nav-link"
                href="#Contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("Contact");
                }}
              >
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
