import React from "react";
import "../main.css";
import aboutData from "../config/aboutConfig";

const About = () => {
  return (
    <div id="AboutMe">
      <div className="container about-me">
        <h2 className="text-center animated">
          <span className="black">About Me</span>
        </h2>
        <p className="text-center animated about-me-text">
          {aboutData.introduction}
        </p>
        <p className="text-center animated about-me-text">
          {aboutData.education}
        </p>
        <p className="text-center animated about-me-text">
          {aboutData.careerGoal}
        </p>
        <p className="text-center animated about-me-text">
          {aboutData.hobbies}
        </p>
      </div>
    </div>
  );
};

export default About;
