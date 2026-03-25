import React from "react";
import "./speakers.css";

const speakers = [
  {
    name: "Vijander Singh",
    designation: "Associate Professor",
    university: "Norwegian University of Science and Technology",
    location: "Norway",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSDm7EMQfi4n_J9KTfNwLKDIlUr37fZckg8Q&s",
    profileLink: "https://www.linkedin.com/in/drvsbhadu/?originalSubdomain=no",
  },
];

const SpeakersPage = () => {
  return (
    <div className="speakers-page-unique">
      {/* Hero Section */}
      <div className="speakers-hero-section">
        <div className="speakers-hero-overlay">
          <h1>Meet Our Speakers</h1>
          <p>
            Thought <span className="highlight-leaders">Leaders</span>,{" "}
            <span className="highlight-visionaries">Visionaries</span>, and{" "}
            <span className="highlight-innovators">Innovators</span> Shaping the
            Future
          </p>
        </div>
      </div>

      {/* Speakers Grid */}
      <div className="speakers-grid-section">
        <h2 className="category-title">Speakers</h2>
        <div className="speakers-grid">
          {speakers.map((speaker, index) => (
            <a
              href={speaker.profileLink}
              target="_blank"
              rel="noopener noreferrer"
              className="speakers-card-link"
              key={index}
            >
              <div className="speakers-card">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="speakers-image"
                />

                <h3 className="speakers-name">{speaker.name}</h3>
                <p className="speakers-designation">{speaker.designation}</p>
                <p className="speakers-university">{speaker.university}</p>
                <p className="speakers-location">{speaker.location}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakersPage;
