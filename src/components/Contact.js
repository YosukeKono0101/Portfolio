import React, { useState } from "react";
import "../main.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);

    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div id="Contact" className="contact-section">
      <div className="container contact">
        <h2 className="text-center contact-title" data-aos="fade-up">
          Get in Touch
        </h2>
        <p
          className="text-center contact-description"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Feel free to reach out using the form below!
        </p>
        {isSubmitted && (
          <div className="submission-message text-center">
            Thank you! Your message has been sent.
          </div>
        )}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
