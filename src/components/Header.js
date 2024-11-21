import React, { useState, useEffect } from "react";
import "../main.css";

const Header = () => {
  const [activeSection, setActiveSection] = useState("TopBanner");
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (sectionId) => {
    if (sectionId === "TopBanner") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      // Calculate the position with optional offset adjustment
      const yOffset = -10; // Adjust if there's a fixed header, set to 0 if not needed
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const sections = ["AboutMe", "Profile", "Projects", "Skills", "Contact"];
    let currentSection = "AboutMe";

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
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
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
            {["AboutMe", "Projects", "Skills", "Profile", "Contact"].map(
              (section) => (
                <li
                  key={section}
                  className={`nav-item ${
                    activeSection === section ? "active" : ""
                  }`}
                >
                  <a
                    className="nav-link"
                    href={`#${section}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section);
                    }}
                  >
                    {section.replace(/([A-Z])/g, " $1").toUpperCase()}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
