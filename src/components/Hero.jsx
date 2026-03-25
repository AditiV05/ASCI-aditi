import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

const Hero = () => {
  const images = [
    "https://icicv.co.in/wp-content/uploads/2023/09/MUJ_Banner_Tapmi_dome_building.png",
    "https://icicv.co.in/wp-content/uploads/2023/11/MUJ-hostel-campus.jpg",
    "https://icicv.co.in/wp-content/uploads/2023/08/2.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className="hero-banner">
        <div
          className="banner-image"
          style={{
            backgroundImage: `url(${images[currentIndex]})`,
          }}
        >
          <div className="banner-overlay" />
          <div className="banner-content">
            <h1>ASCI-2025</h1>
            <p>
              International Conference on <br />
              <span className="highlight">
                Applied Scientific Computational Intelligence
              </span>{" "}
              using <span className="highlight-secondary">Digital Twins</span>
            </p>

            <p>
              <FontAwesomeIcon icon={faCalendarAlt} /> December 1-2, 2025 <br />
              <FontAwesomeIcon icon={faMapMarkerAlt} /> Manipal University
              Jaipur, Rajasthan, India
            </p>
            <a
              href="https://asciconference.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              Submit Paper
            </a>
          </div>
          {/* Icon for Important Dates */}
          <div className="important-dates-icon" onClick={toggleModal}>
            <FontAwesomeIcon icon={faClock} size="2x" />
          </div>
        </div>
      </div>
      <div className="scrolling-banner">
        <p>Welcome to ASCI-2025 | Submit your papers now! 🎓✨</p>
      </div>
      {/* Modal for Important Dates */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={toggleModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Important Dates</h2>
            <ul>
              <li>
                Call For Paper: <strong>January 25, 2025</strong>
              </li>
              <li>
                Notification of Acceptance: <strong>April 1, 2025</strong>{" "}
              </li>
              <li>
                Full Paper Submission: <strong>June 30th, 2025</strong>
              </li>
            </ul>
            <button className="modal-close-button" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
