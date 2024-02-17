import React from "react";
import "../main.css";

const Contact = () => {
  return (
    <div id="Contact">
      <div className="container contact">
        <div className="text-center">
          <a href="mailto:real.menver@gmail.com" className="contact-link">
            Message Me
            <i className="fa-solid fa-envelope email-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
