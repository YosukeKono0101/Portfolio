import React from "react";
import "../main.css";

const About = () => {
  return (
    <div id="About-Me">
      <div className="container about-me">
        <h2 className="text-center animated">
          <span className="black">About me</span>
        </h2>
        <p className="text-center animated about-me-text">
          Hello, I am Yosuke Kono. I am a passionate software developer focused
          on creating innovative software solutions. I hold a Master's degree in
          Information Technology from Queensland University of Technology and
          currently work as a Junior Software Developer at Fonseka. My journey
          has equipped me with a solid foundation in both front-end and back-end
          technologies. I have hands-on experience in modern frameworks like
          React and Laravel. Looking ahead, my goal is to become a lead
          developer, managing projects that make a significant impact on user
          experiences. I love going to the gym and doing workouts, and I also
          enjoy browsing sports cars online. My passion for fitness inspired me
          to develop a muscle map app, which helps fitness enthusiasts discover
          and learn various exercises.
          <span>
            <i className="fa-sharp fa-regular fa-face-smile"></i>
          </span>
        </p>
      </div>
    </div>
  );
};

export default About;
