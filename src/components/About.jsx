import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="about-section">
      <div className="about-container two-columns" data-aos="fade-up">
        <div className="about-content">
          <h2>About the Conference</h2>
          <div className="about-columns">
            <div className="column" data-aos="fade-right">
              <p>
                The International Conference on Applied Scientific Computational
                Intelligence using Digital Twins (ASCI-2024) is an attempt to
                discuss the research challenges in the field of digital twins by
                applying scientific techniques in terms of computational
                intelligence. It is an excellent platform to join forces and
                showcase exorbitant research and industry inventiveness, and to
                recognize and hear from experts in the field of digital twins.
                In recent years digital twins have received significant
                importance in various domains research domain such as
                manufacturing, healthcare, transportation, and urban planning.
              </p>
              <p>
                It involves creating a virtual replica of a physical entity,
                process, or system. This virtual representation is often used
                for various purposes, including simulation, monitoring, and
                optimization.
              </p>
            </div>
            <div className="column" data-aos="fade-left">
              <p>
                The conference aims to involve sharing case studies, best
                practices, and lessons learned from implementing digital twin
                technology across various domains. This also includes research
                on predictive analytics and optimization algorithms for
                leveraging data collected from digital twins to improve
                decision-making and operational efficiency.
              </p>
              <p>
                The research community are exploring advanced modeling
                techniques, such as physics-based modeling, machine learning,
                and hybrid models, to improve the accuracy and fidelity of
                digital twins. They also focus on topics such as real-time data
                analytics; seamless data exchange and integration across
                platforms; access control and anomaly detection; virtual reality
                interfaces; distributed computing architectures etc.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Manipal University Jaipur */}
      <div className="about-container reverse" data-aos="fade-up">
        <div className="about-content">
          <h2>About Manipal University Jaipur</h2>
          <p>
            The Manipal Education and Medical Group is an established leader in
            the field of education, research and healthcare. In a span of over
            seven decades, it has transformed the lives of more than 3,00,000
            students from over 59 countries. The group includes five
            Universities - Manipal Academy of Higher Education (MAHE,
            Karnataka), Sikkim Manipal University (Sikkim), American University
            of Antigua (Caribbean Islands), Manipal International University
            (Malaysia) and Manipal University Jaipur (Jaipur). Manipal
            University Jaipur (MUJ) was launched in 2011 on an invitation from
            the Government of Rajasthan, as a self-financed State Private
            University. MUJ has redefined academic excellence in the region,
            with the Manipal way of learning; one that inspires students of all
            disciplines to learn and innovate through hands on practical
            experience.
          </p>
          <a
            href="https://jaipur.manipal.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Explore MUJ
          </a>
        </div>
        <div className="about-image" data-aos="zoom-in">
          <img
            src="https://icicv.co.in/wp-content/uploads/2023/08/muj-small-2048x1366.jpg"
            alt="Manipal University Jaipur"
          />
        </div>
      </div>

      {/* About the Department */}
      <div className="about-container left-align" data-aos="fade-up">
        <div className="about-content">
          <h2>About the Department</h2>
          <p>
            The Department of Computer Applications at Manipal University Jaipur
            (MUJ) has always been endeavors for academic excellence with the
            most advanced curriculum and syllabus. Ever since its inception in
            2019, the department has attained unparalleled heights and stands on
            par quality among its equivalent programs. The Department has proven
            its academic competence and success with an extensive range of
            courses offered both at the Undergraduate and Postgraduate levels.
          </p>
          <a
            href="https://jaipur.manipal.edu/fos/department-of-computer-application.php"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Visit Department
          </a>
        </div>
        <div className="about-image" data-aos="zoom-in">
          <img
            src="https://jaipur.manipal.edu/fosta/img-fos/facilities/dca/2.jpg"
            alt="Department"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
