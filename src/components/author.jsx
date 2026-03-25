import React from "react";
import "./author.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faFileAlt,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";

const Author = () => {
  return (
    <div className="call-for-papers-page">
      {/* Hero Section */}
      <div className="cfp-hero-section">
        <div className="cfp-hero-overlay">
          <h1>Call for Papers</h1>
          <p>
            Join us in shaping the future of
            <span className="highlight-leaders"> Digital Twins</span>. Submit
            your original research today!
          </p>
        </div>
      </div>

      {/* About CFP */}
      <section className="cfp-about-section">
        <h2>About the Call for Papers</h2>
        <p>
          A digital twin is a virtual model of a physical object. It spans the
          object's lifecycle and uses real-time data sent from sensors on the
          object to simulate the behavior and monitor operations. Digital twins
          can replicate many real-world items, from single pieces of equipment
          in a factory to full installations, such as wind turbines and even
          entire cities. Digital twin technology allows you to oversee the
          performance of an asset, identify potential faults, and make
          better-informed decisions about maintenance and lifecycle.
        </p>
      </section>

      {/* Tracks Section */}
      <section className="cfp-tracks-section">
        <h2>Conference Tracks</h2>
        <div className="cfp-tracks-grid">
          <div className="cfp-track-card">
            <h3>Track 1</h3>
            <h4>Computational Intelligence and AI in Digital Twins</h4>
            <ul>
              <li>Role of AI in optimizing digital twin operations.</li>
              <li>Explainable AI (XAI) in digital twin systems.</li>
              <li>Predictive maintenance using digital twins and AI models.</li>
              <li>Reinforcement learning in virtual environments.</li>
              <li>Real-time data-driven insights using digital twins.</li>
            </ul>
          </div>
          <div className="cfp-track-card">
            <ul>
              <li>Big data analytics and edge computing integration.</li>
              <li>Decision-support systems powered by digital twins.</li>
              <li>Risk and reliability assessment in digital twins.</li>
              <li>Techniques for managing uncertainty and variability.</li>
            </ul>
          </div>
          <div className="cfp-track-card">
            <h3>Track 2</h3>
            <h4>Innovative Technologies in Digital Twins</h4>
            <ul>
              <li>Real-time data collection using IoT-enabled twins.</li>
              <li>Sensor fusion techniques for enhanced twin accuracy.</li>
              <li>Securing digital twins with blockchain technology.</li>
              <li>Cybersecurity frameworks for protecting twin ecosystems.</li>
            </ul>
          </div>
          <div className="cfp-track-card">
            <ul>
              <li>Integration of AR/VR for interactive twin visualization.</li>
              <li>Virtual reality-enabled remote monitoring.</li>
              <li>Use of 5G/6G technologies in digital twin communication.</li>
              <li>Privacy and data protection considerations.</li>
            </ul>
          </div>
          <div className="cfp-track-card">
            <h3>Track 3</h3>
            <h4>Emerging Areas in Digital Twins</h4>
            <ul>
              <li>Multi-agent systems for complex twin environments.</li>
              <li>Integration of multiple twins into a unified system.</li>
              <li>Use of digital twins in training and skill development.</li>
              <li>
                E-learning platforms powered by digital twin technologies.
              </li>
              <li>Applications of quantum computing in twin simulations.</li>
              <li>Novel algorithms for high-dimensional problems.</li>
            </ul>
          </div>
          <div className="cfp-track-card">
            <h3>Track 4</h3>
            <h4>Applications of Digital Twins</h4>
            <ul>
              <li>
                Twins in predictive maintenance and reliability engineering.
              </li>
              <li>Smart Cities and Urban Development.</li>
              <li>Healthcare and Biomedical.</li>
              <li>
                Digital twins for autonomous vehicles and fleet management.
              </li>
              <li>Real-time tracking and simulation of marine ecosystems.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="cfp-guidelines-section">
        <h2>
          <FontAwesomeIcon icon={faFileAlt} /> Submission Guidelines
        </h2>
        <ul>
          <li>Papers must be written in English.</li>
          <li>Manuscripts should follow the [template name/format] format.</li>
          <li>The length of the paper should not exceed 15 pages.</li>
          <li>
            Submissions must be made through the [Submission Portal Name/Link].
          </li>
          <li>
            At least one author must register for the conference to present the
            paper.
          </li>
        </ul>
      </section>

      {/* Registration Section */}
      <section className="cfp-registration-section">
        <h2>
          <FontAwesomeIcon icon={faCreditCard} /> Registration
        </h2>
        <p>
          Industry professionals, academicians, researchers, students, and
          attendees can register to participate in ASCI-2025.
        </p>

        <table className="cfp-registration-table">
          <thead>
            <tr>
              <th>Nationality</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>India</td>
              <td>Students/Academicians</td>
              <td>INR 10000</td>
            </tr>
            <tr>
              <td>India</td>
              <td>Industry Professionals</td>
              <td>INR 15000</td>
            </tr>
            <tr>
              <td>India</td>
              <td>Attendee</td>
              <td>INR 2000</td>
            </tr>
            <tr>
              <td>Others</td>
              <td>Students/Academicians</td>
              <td>USD 200</td>
            </tr>
            <tr>
              <td>Others</td>
              <td>Industry Professionals</td>
              <td>USD 250</td>
            </tr>
            <tr>
              <td>Others</td>
              <td>Attendee</td>
              <td>USD 50</td>
            </tr>
          </tbody>
        </table>
        <p>
          <strong>Note:</strong> 18% GST needs to be paid additionally as per
          the registration category.
        </p>
      </section>

      {/* What's Included Section */}
      <section className="cfp-included-section">
        <h2>
          <FontAwesomeIcon icon={faCheckCircle} /> What’s Included
        </h2>
        <ul>
          <li>Access to all conference sessions</li>
          <li>Conference kit (for in-person attendees)</li>
          <li>Refreshments and lunch (for in-person attendees)</li>
          <li>Certificate of participation/presentation</li>
          <li>Access to conference proceedings</li>
        </ul>
      </section>
    </div>
  );
};

export default Author;
