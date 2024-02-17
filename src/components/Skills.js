import React from "react";
import "../main.css";

const Skills = () => {
  return (
    <div id="Skills">
      <div className="container skills">
        <h2 className="c-title text-center">
          <span className="black">Skills</span>
        </h2>
        <div className="skill-section">
          <div className="skill-category">
            <h3>
              <span className="black">Programming Languages</span>
            </h3>
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>C#</li>
              <li>Node.js</li>
              <li>Vue.js</li>
              <li>React</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>
              <span className="black">Social Skills</span>
            </h3>
            <ul>
              <li>Adaptability</li>
              <li>Communications</li>
              <li>Highly Motivated</li>
              <li>Problem-Solving</li>
              <li>Teamwork</li>
              <li>Flexibility</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>
              <span className="black">Other Skills</span>
            </h3>
            <ul>
              <li>AWS</li>
              <li>EC2</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
