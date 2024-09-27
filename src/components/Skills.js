import React from "react";
import "../main.css";
import skillsData from "../config/skillsConfig";
import {
  FaCode,
  FaTools,
  FaWrench,
  FaDatabase,
  FaHandshake,
  FaCertificate,
} from "react-icons/fa";

const Skills = () => {
  return (
    <div id="Skills">
      <div className="container skills">
        <h2 className="c-title text-center">
          <span className="black">Skills & Qualifications</span>
        </h2>

        <div className="skill-section">
          {/* Languages Section */}
          <div className="skill-category">
            <h3>
              <FaCode className="icon" />{" "}
              <span className="black">Languages</span>
            </h3>
            <ul>
              {skillsData.languages.map((skill, index) => (
                <li key={index}>
                  {/* Render the icon as a component */}
                  <skill.icon className="skill-icon" /> {skill.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Frameworks/Libraries Section */}
          <div className="skill-category">
            <h3>
              <FaTools className="icon" />{" "}
              <span className="black">Frameworks & Libraries</span>
            </h3>
            <ul>
              {skillsData.frameworks.map((skill, index) => (
                <li key={index}>
                  {/* Render the icon as a component */}
                  <skill.icon className="skill-icon" /> {skill.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Section */}
          <div className="skill-category">
            <h3>
              <FaWrench className="icon" /> <span className="black">Tools</span>
            </h3>
            <ul>
              {skillsData.tools.map((tool, index) => (
                <li key={index}>
                  {/* Render the icon as a component */}
                  <tool.icon className="skill-icon" /> {tool.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Databases Section */}
          <div className="skill-category">
            <h3>
              <FaDatabase className="icon" />{" "}
              <span className="black">Databases</span>
            </h3>
            <ul>
              {skillsData.databases.map((db, index) => (
                <li key={index}>
                  <db.icon className="skill-icon" /> {db.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills Section */}
          <div className="skill-category">
            <h3>
              <FaHandshake className="icon" />{" "}
              <span className="black">Soft Skills</span>
            </h3>
            <ul>
              {skillsData.softSkills.map((softSkill, index) => (
                <li key={index}>{softSkill}</li>
              ))}
            </ul>
          </div>

          {/* Qualifications Section */}
          <div className="skill-category">
            <h3>
              <FaCertificate className="icon" />{" "}
              <span className="black">Qualifications</span>
            </h3>
            <ul>
              {skillsData.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
