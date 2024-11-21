import React, { useState } from "react";
import "../main.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import projects from "../config/projectsConfig";
import ComingSoon from "../assets/ComingSoon.jpg";
import "../animations.css";
import "aos/dist/aos.css";
import AOS from "aos";

AOS.init();

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  const openModal = (projectId, event) => {
    event.preventDefault();
    const project = projects.find((proj) => proj.id === projectId);
    if (project) {
      setSelectedProject(project);
      setMainImage(project.imageUrl);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setMainImage(null);
  };

  const swapImage = (newImage) => {
    setMainImage(newImage);
  };

  return (
    <div id="Projects" className="projects-section">
      <div className="container project">
        <h2 className="text-center animated" data-aos="fade-up">
          <span className="white">My Projects</span>
        </h2>
        <div
          className="work_images animated"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="work_image"
              onClick={(e) => openModal(project.id, e)}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <a href="#">
                <img
                  className="img-fluid"
                  src={project.imageUrl}
                  alt={project.name}
                />
              </a>
              <p>{project.name}</p>
            </div>
          ))}
          {[...Array(1)].map((_, index) => (
            <div
              key={`coming-soon-${index}`}
              className="work_image"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <a href="#">
                <img className="img-fluid" src={ComingSoon} alt="Coming Soon" />
              </a>
              <p>Coming Soon</p>
            </div>
          ))}
        </div>

        {selectedProject && (
          <Modal
            show={isModalOpen}
            onHide={closeModal}
            size="lg"
            className="project-modal"
          >
            <Modal.Header>
              <Modal.Title className="modal-title-custom">
                {selectedProject.name}
              </Modal.Title>
              <button
                type="button"
                className="btn-close-custom"
                aria-label="Close"
                onClick={closeModal}
              >
                X
              </button>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-content-wrapper">
                <div className="modal-left">
                  <img
                    src={mainImage}
                    alt={selectedProject.name}
                    className="main-image"
                  />
                  <div className="additional-images">
                    {selectedProject.additionalImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Additional Image ${index + 1}`}
                        className="smaller-image"
                        onClick={() => swapImage(image)}
                      />
                    ))}
                  </div>
                </div>
                <div className="modal-right">
                  <div className="project-section">
                    <h5 className="section-title">Overview</h5>
                    <p className="project-description">
                      {selectedProject.description}
                    </p>
                  </div>
                  {selectedProject.features && (
                    <div className="project-section">
                      <h5 className="section-title">Features</h5>
                      <ul className="section-list">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selectedProject.languagesAndTech && (
                    <div className="project-section">
                      <h5 className="section-title">Tech Stack</h5>
                      <ul className="section-list">
                        {selectedProject.languagesAndTech.map((tech, index) => (
                          <li key={index}>{tech}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {selectedProject.githubLink && (
                    <div className="github-link-wrapper">
                      <a
                        href={selectedProject.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-link"
                      >
                        <i className="fa-brands fa-github modal-icon"></i> View
                        on GitHub
                      </a>
                    </div>
                  )}
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
