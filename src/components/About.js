import React from "react";
import "../main.css";
import "../animations.css";
import "aos/dist/aos.css";
import AOS from "aos";
import aboutData from "../config/aboutConfig";

AOS.init();

const About = () => {
  return (
    <div id="AboutMe" className="about-me-section">
      <div className="container about-me">
        <h2 data-aos="fade-up" className="text-center">
          <span className="highlight">About Me</span>
        </h2>
        <div data-aos="fade-up" data-aos-delay="100">
          <p className="text-center about-me-text">{aboutData.introduction}</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <p className="text-center about-me-text">{aboutData.education}</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <p className="text-center about-me-text">{aboutData.careerGoal}</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="400">
          <p className="text-center about-me-text">{aboutData.hobbies}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
