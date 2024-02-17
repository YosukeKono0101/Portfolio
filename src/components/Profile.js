import React from "react";
import "../main.css";
import HomeTown from "../assets/Nishinomiya.profile.jpg";
import Golf from "../assets/Golf.profile.jpg";
import HighSchool from "../assets/GarinCollege.profile.jpg";
import StockRate from "../assets/stock_rate.profile.jpeg";
import QUT from "../assets/QUT.profile.jpg";

const Profile = () => {
  return (
    <div id="My-history">
      <div className="container">
        <h2 className="text-center profile animated">
          <span className="white">Profile</span>
        </h2>
        <div className="history">
          <div className="history__item animated">
            <div className="history__inner">
              <div className="history__image">
                <img src={HomeTown} alt="Syukugawa in Nishinomiya" />
              </div>
              <div className="history__text">
                <p>Born in Nishinomiya, Hyogo Prefecture in Japan</p>
              </div>
            </div>
          </div>
          <div className="history__item animated">
            <div className="history__inner">
              <h4>2011~</h4>
              <div className="history__image">
                <img src={Golf} alt="Golf" />
              </div>
              <div className="history__text">
                <p>Started middle school and joined golf club</p>
              </div>
            </div>
          </div>
          <div className="history__item animated">
            <div className="history__inner">
              <h4>2015~</h4>
              <div className="history__image">
                <img src={HighSchool} alt="High school in New Zealand" />
              </div>
              <div className="history__text">
                <p>Transferred to a high school in New Zealand and stayed there for two and a half years</p>
              </div>
            </div>
          </div>
          <div className="history__item animated">
            <div className="history__inner">
              <h4>2018~</h4>
              <div className="history__image">
                <img src={StockRate} alt="Stock Rate" />
              </div>
              <div className="history__text">
                <p>Back to Japan and studied Economics at Ritsumeikan university</p>
              </div>
            </div>
          </div>
          <div className="history__item animated">
            <div className="history__inner">
              <h4>2022~</h4>
              <div className="history__image">
                <img src={QUT} alt="Queensland University Of Technology" />
              </div>
              <div className="history__text">
                <p>Started my masters in Information Technology at Queensland University of Technology in Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
