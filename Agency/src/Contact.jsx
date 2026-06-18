import React from "react";

function Contact() {
  const handleScroll = (id, e) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer id="contact" className="footer-section">
      <div className="footer-container">
        
        {/* Left Column: Typography Logo */}
        <div className="footer-logo-column">
          <div className="footer-logo">
            <h2 className="footer-logo-title">CURVATURE</h2>
            <div className="footer-logo-subtitle-wrapper">
              <span className="footer-logo-line"></span>
              <span className="footer-logo-subtitle">STUDIO</span>
              <span className="footer-logo-line"></span>
            </div>
            <p className="footer-logo-tagline">DESIGN WITH DIRECTION</p>
          </div>
        </div>

        {/* Middle Column: Link Groups */}
        <div className="footer-links-column">
          
          <div className="footer-link-group">
            <h4 className="footer-group-title">NAVIGATION</h4>
            <ul>
              <li><a href="#home" onClick={(e) => handleScroll("home", e)}>Work</a></li>
              <li><a href="#process" onClick={(e) => handleScroll("process", e)}>Services</a></li>
              <li><a href="#about" onClick={(e) => handleScroll("about", e)}>About</a></li>
              <li><a href="#contact" onClick={(e) => handleScroll("contact", e)}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-link-group">
            <h4 className="footer-group-title">SERVICES</h4>
            <ul>
              <li><a href="#process" onClick={(e) => handleScroll("process", e)}>Creative Direction</a></li>
              <li><a href="#process" onClick={(e) => handleScroll("process", e)}>Brand Identity</a></li>
              <li><a href="#process" onClick={(e) => handleScroll("process", e)}>Social Media Design</a></li>
              <li><a href="#process" onClick={(e) => handleScroll("process", e)}>Video Editing</a></li>
              <li><a href="#process" onClick={(e) => handleScroll("process", e)}>Content Strategy</a></li>
            </ul>
          </div>

          <div className="footer-link-group">
            <h4 className="footer-group-title">CONNECT</h4>
            <ul>
              <li><a href="mailto:hello@curvaturestudio.com">hello@curvaturestudio.com</a></li>
              <li><a href="tel:+911234567890">+91 12345 67890</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>

        </div>

        {/* Right Column: Monogram */}
        <div className="footer-monogram-column">
          <div className="monogram-circle">
            <div className="monogram-letters">
              <span>C</span>
              <span>S</span>
            </div>
          </div>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Curvature Studio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Contact;
