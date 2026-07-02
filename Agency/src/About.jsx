import React from "react";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Left Side: Premium Studio Interior Image */}
        <div className="about-image-column">
          <div className="about-image-wrapper">
            <img 
              src="/studio_interior.png" 
              alt="Curvature Studio Office Interior" 
              className="about-studio-img"
            />
          </div>
        </div>
        
        {/* Right Side: Text Information */}
        <div className="about-content-column">
          <span className="about-subtitle">ABOUT STUDIO</span>
          <h2 className="about-title">Built for<br />ambitious brands.</h2>
          <p className="about-description">
            Curvature Studio is a creative studio focused on branding, 
            design and video editing. We partner with businesses to 
            create meaningful visual experiences that drive impact 
            and build lasting connections.
          </p>
          <a href="#about" className="about-link" onClick={(e) => {
            // For now, let's keep it as an elegant visual CTA link or prevent default if desired.
            // But we can let it scroll somewhere or just be a nice transition.
            e.preventDefault();
          }}>
            MORE ABOUT US <span className="arrow">→</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default About;
