import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-contact">
            <h3>Contact Us</h3>
            <p>
              Email:{" "}
              <a href="mailto:icicv.muj@gmail.com">
                linesh.raja@jaipur.manipal.edu <br />
                vaibhav.bhatnagar@jaipur.manipal.edu
              </a>
            </p>
            <p>+91-9460439419 (Dr. Linesh Raja)</p>
            <p>+91-9785988729 (Dr. Vaibhav Bhatnagar)</p>
          </div>
          <div className="footer-section footer-address">
            <h3>Address</h3>
            <p>Manipal University Jaipur</p>
            <p>Dehmi Kalan, Off Jaipur-Ajmer Expressway</p>
            <p>Jaipur, Rajasthan, India-303007</p>
          </div>
          <div className="footer-section footer-logo"></div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-description">
          <p>
            &copy; 2025 ASCI-2025 | Developed and Maintained by{" "}
            <strong>Aditi Vashishtha </strong>{" "}
          </p>
          Pursuing BCA (Hons) with a specialization in Software Product
          Engineering at <strong>Manipal University Jaipur.</strong>
        </span>
        <span className="footer-description-mobile">
          <p> &copy; 2025 ASCI-2025 | Developed and Maintained by </p>
          <strong>
            {" "}
            <p>Aditi Vashishtha </p>
          </strong>
          BCA (Hons) at <strong>Manipal University Jaipur</strong>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
