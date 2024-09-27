import React from "react";
import "../main.css";
import profileData from "../config/profileConfig";

const Profile = () => {
  return (
    <div id="Profile">
      <div className="container">
        <h2 className="text-center profile animated">
          <span className="white">Profile</span>
        </h2>
        <div className="history">
          {profileData.map((item, index) => (
            <div key={index} className="history__item animated">
              <div className="history__inner">
                <h4>{item.date}</h4>
                <div className="history__image">
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
