import React from "react";
import "../main.css";

const About = () => {
  return (
    <div id="about me">
      <div className="container about-me">
        <h2 className="text-center animated">
          <span className="black">About me</span>
        </h2>
        <p className="text-center animated">
          I'm Yosuke Kono, a Master's student in Information Technolgoy at
          <br />
          Queensland University of Technolgoy, focused on developing cutting-edge software solutions.
          <br />
          My expertise lies in front-end and back-end technologies, with ongoing projects in React.
          <br />
          I excel in creating user-friendly digital experiences and am adept at working in fast-paced,
          <br />
          dynamic environments. Fluent in English and Japanese, I bring a unique blend of
          <br />
          technical skill and adaptability to the IT field.{" "}
          <span>
            <i className="fa-sharp fa-regular fa-face-smile"></i>
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
