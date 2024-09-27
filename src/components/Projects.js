import React, { useState } from "react";
import "../main.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import projects from "../config/projectsConfig";
import ComingSoon from "../assets/ComingSoon.jpg";

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const hoverClass = isModalOpen ? "no-hover" : "";

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
    <div id="Projects">
      <div className="container project">
        <h2 className="text-center animated">
          <span className="white">My Projects</span>
        </h2>
        <div className="work_images animated">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`work_image ${hoverClass}`}
              onClick={(e) => openModal(project.id, e)}
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
              className={`work_image ${hoverClass}`}
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
              <Modal.Title>{selectedProject.name}</Modal.Title>
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
              <div>
                <p className="project-description">
                  {selectedProject.description}
                </p>
                {selectedProject.features && (
                  <div className="project-features">
                    <h5>Features</h5>
                    <ul>
                      {selectedProject.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="languages-and-tech">
                  <h5>Tech Stack</h5>
                  {selectedProject.languagesAndTech && (
                    <ul>
                      {selectedProject.languagesAndTech.map((tech, index) => (
                        <li key={index}>{tech}</li>
                      ))}
                    </ul>
                  )}
                </div>
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github modal-icon"></i> GitHub
                  </a>
                )}
                <div className="image-container">
                  <img
                    src={mainImage}
                    alt={selectedProject.name}
                    className="img-fluid main-image"
                  />
                  <div className="additional-images">
                    {selectedProject.additionalImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Additional Image ${index + 1}`}
                        className="img-fluid smaller-image"
                        onClick={() => swapImage(image)}
                      />
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
