import React from "react";
import "../main.css";
import "../animations.css";
import "aos/dist/aos.css";
import AOS from "aos";
import profileData from "../config/profileConfig";

AOS.init();

const Profile = () => {
  return (
    <div id="Profile" className="profile-section">
      <div className="container">
        <h2 data-aos="fade-up" className="text-center profile">
          <span className="white">Profile</span>
        </h2>
        <div className="history">
          {profileData.map((item, index) => (
            <div
              key={index}
              className="history__item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="history__inner">
                <h4>{item.date}</h4>
                <div
                  className="history__image"
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="history__text">
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
