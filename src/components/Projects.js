import React, { useState } from "react";
import "../main.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import MotorGarage from "../assets/MotorGarage.png";
import MotorGarage2 from "../assets/MotorGarage2.png";
import MotorGarage3 from "../assets/MotorGarage3.png";
import MotorGarage4 from "../assets/MotorGarage4.png";
import MotorGarage5 from "../assets/MotorGarage5.png";
import HarmonyHub from "../assets/HarmonyHub.png";
import HarmonyHub2 from "../assets/HarmonyHub2.png";
import HarmonyHub3 from "../assets/HarmonyHub3.png";
import MuscleMap from "../assets/MuscleMap.png";
import MuscleMap2 from "../assets/MuscleMap2.png";
import MuscleMap3 from "../assets/MuscleMap3.png";
import MuscleMap4 from "../assets/MuscleMap4.png";
import MyPortfolio from "../assets/MyPortfolio.png";
import MyPortfolio2 from "../assets/MyPortfolio2.png";
import MyPortfolio3 from "../assets/MyPortfolio3.png";
import MyPortfolio4 from "../assets/MyPortfolio4.png";
import ComingSoon from "../assets/ComingSoon.jpg";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const hoverClass = isModalOpen ? "no-hover" : "";

  const openModal = (project, event) => {
    event.preventDefault();
    setSelectedProject(project);
    setMainImage(projectDetails[project].imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setMainImage(null);
  };

  const swapImage = (newImage) => {
    setMainImage(newImage);
  };

  const projectDetails = {
    "Motor Garage": {
      name: "Motor Garage",
      description:
        "MotorGarage is a web application that I developed as part of my course at university and it is designed for an online shopping experience specifically tailored for car parts and accessories. It features various categories like Wheels, Exhaust Systems, and Brakes, with detailed product descriptions and images.",
      features: [
        "Product Categories: Users can browse products by categories such as Wheel, Exhaust System, and Brake.",
        "Product Details: Detailed view of each product with descriptions, prices, and images.",
        "Search Functionality: Allows users to search for products based on descriptions.",
        "Shopping Cart: Users can add items to the cart and view them in the shopping cart section.",
        "Order Placement: Users can place orders by filling out a form with their details.",
        "Database Sending: An admin route for seeding the database with initial data.",
      ],
      githubLink: "https://github.com/YosukeKono0101/MotorGarage",
      languagesAndTech: ["Frontend: HTML, CSS(Bootstrap), JavaScript", "Backend: Python with Flask Framework", "Database: SQLAlchemy with SQLite", "Flask-WTF for form handling", "Bootstrap for UI components"],
      imageUrl: MotorGarage,
      additionalImages: [MotorGarage, MotorGarage2, MotorGarage3, MotorGarage4, MotorGarage5],
    },
    "My Portfolio": {
      name: "My Portfolio",
      description:
        "Welcome to my portfolio! This website is a window into my work in web development.  This site is not only a reflection of my technical skills but also my passion for creating intuitive and engaging web experiences. The design and development of this portfolio itself is a testament to my proficiency in front-end technologies and my commitment to continuous learning and improvement.",
      features: [
        "Responsive Design: Optimized for both desktop and mobile devices.",
        "Smooth Scroll Navigation: Easy navigation to different sections of the website.",
        "Interactive Project Showcase: Detailed presentation of my projects with modal pop-ups.",
        "Dynamic History Timeline: A visually engaging timeline of my personal and professional journey.",
      ],
      githubLink: "https://github.com/YosukeKono0101/Portfolio",
      languagesAndTech: ["Frontend: HTML, CSS(Bootstrap), JavaScript, React", "Styled-Components", "FontAwesome", "React Router"],
      imageUrl: MyPortfolio,
      additionalImages: [MyPortfolio, MyPortfolio2, MyPortfolio3, MyPortfolio4],
    },
    HarmonyHub: {
      name: "HarmonyHub",
      description:
        "HarmonyHub is a web application designed for music enthusiasts. It provides a platform to find artist information, discover top tracks and albums, and explore upcoming concerts. Additionally, it recommends nearby restaurants and bars close to concert venues, enhancing the overall concert-going experience.",
      features: [
        "Explore Artist Info: Search for artists to get detailed information including top tracks, albums, and similar artists.",
        "Discover Concerts: Enter a location or venue name to discover upcoming concerts and events.",
        "Nearby Restaurants: Get recommendations for nearby restaurants and bars around concert venues.",
        "Wikipedia Integration: Access Wikipedia information related to the searched artist.",
        "Page Counter: Keep track of page visits using an AWS S3 bucket (if AWS credentials are provided).",
      ],
      githubLink: "https://github.com/YosukeKono0101/HarmonyHub",
      languagesAndTech: ["Frontend: HTML, CSS (Bootstrap), JavaScript", "Backend: Node.js, Express.js", "APIs: LastFM, Ticketmaster, Google Places, Wikipedia", "AWS S3 for page counter functionality"],
      imageUrl: HarmonyHub,
      additionalImages: [HarmonyHub, HarmonyHub2, HarmonyHub3],
    },
    MuscleMap: {
      name: "MuscleMap",
      description:
        "MuscleMap is a React-based web application designed to help users discover and learn various exercises. It provides detailed information, instructional videos, and related exercises to help users focus on specific body parts or use particular equipment. The app features a user-friendly interface, easy navigation, and responsive design for an optimal user experience.",
      features: [
        "Exercise Search: Users can search for exercises by name of the body parts.",
        "Exercise Details: Detailed descriptions, images, and instructional videos for each exercise.",
        "Related Exercises: Suggestions for similar exercises based on the chosen exercise.",
        "Responsive Design: Compatible with various devices and screen sizes.",
      ],
      githubLink: "https://github.com/YosukeKono0101/MuscleMap",
      languagesAndTech: ["Frontend: HTML, CSS, JavaScript, React", "Styled-Components", "React Router", "FontAwesome", "React Slick", "React Spinners"],
      imageUrl: MuscleMap,
      additionalImages: [MuscleMap, MuscleMap2, MuscleMap3, MuscleMap4],
    },
  };

  return (
    <div id="My-Portfolio">
      <div className="container portfolio">
        <h2 className="text-center animated">
          <span className="white">My Projects</span>
        </h2>
        <div className="work_images animated">
          <div className={`work_image ${hoverClass}`} onClick={(e) => openModal("My Portfolio", e)}>
            <a className="d-inline-block" href="#">
              <img className="img-fluid" src={MyPortfolio} alt="My Portfolio" />
            </a>
            <p>My Portfolio</p>
          </div>
          <div className={`work_image ${hoverClass}`} onClick={(e) => openModal("HarmonyHub", e)}>
            <a className="d-inline-block" href="#">
              <img className="img-fluid" src={HarmonyHub} alt="HarmonyHub" />
            </a>
            <p>HarmonyHub</p>
          </div>
          <div className={`work_image ${hoverClass}`} onClick={(e) => openModal("MuscleMap", e)}>
            <a className="d-inline-block" href="#">
              <img className="img-fluid" src={MuscleMap} alt="MuscleMap" />
            </a>
            <p>MuscleMap</p>
          </div>
          <div className={`work_image ${hoverClass}`} onClick={(e) => openModal("Motor Garage", e)}>
            <a className="d-inline-block" href="#">
              <img className="img-fluid" src={MotorGarage} alt="Motor Garage" />
            </a>
            <p>Motor Garage</p>
          </div>
          <div className={`work_image ${hoverClass}`}>
            <a className="d-inline-block" href="#">
              <img className="img-fluid" src={ComingSoon} alt="Coming Soon" />
            </a>
            <p></p>
          </div>
          <div className={`work_image ${hoverClass}`}>
            <a className="d-inline-block" href="#">
              <img className="img-fluid" src={ComingSoon} alt="Coming Soon" />
            </a>
            <p></p>
          </div>
        </div>

        {selectedProject && (
          <Modal show={isModalOpen} onHide={closeModal} size="lg" className="project-modal">
            <Modal.Header closeButton>
              <Modal.Title>{projectDetails[selectedProject].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <p className="project-description">{projectDetails[selectedProject].description}</p>
                {projectDetails[selectedProject].features && (
                  <div className="project-features">
                    <h5>Features</h5>
                    <ul>
                      {projectDetails[selectedProject].features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="languages-and-tech">
                  <h5>Tech Stack</h5>
                  {projectDetails[selectedProject].languagesAndTech && (
                    <ul>
                      {projectDetails[selectedProject].languagesAndTech.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {projectDetails[selectedProject].githubLink && (
                  <a href={projectDetails[selectedProject].githubLink} target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github modal-icon"></i> GitHub
                  </a>
                )}
                <div className="image-container">
                  <img src={mainImage} alt={projectDetails[selectedProject].name} className="img-fluid main-image" />
                  <div className="additional-images">
                    {projectDetails[selectedProject].additionalImages.map((image, index) => (
                      <img key={index} src={image} alt={`Additional Image ${index + 1}`} className="img-fluid smaller-image" onClick={() => swapImage(image)} />
                    ))}
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Projects;
