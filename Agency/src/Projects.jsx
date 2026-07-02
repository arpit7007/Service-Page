import React from "react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Apex Brand Strategy",
      category: "Brand Identity",
      description: "Visual positioning, market research, and style guides for a next-gen tech brand.",
      metricName: "Engagement Growth",
      metricValue: 92,
      image: "/project1.png"
    },
    {
      id: 2,
      title: "Echo Social Campaign",
      category: "Social Design",
      description: "Curated grid templates, graphic systems, and motion graphics for Instagram and LinkedIn.",
      metricName: "Impressions Boost",
      metricValue: 85,
      image: "/project2.png"
    },
    {
      id: 3,
      title: "Nova Video Editing",
      category: "Video Production",
      description: "High-impact editorial videos, sound design, and color grading for commercial advertising.",
      metricName: "Retention Rate",
      metricValue: 78,
      image: "/project3.png"
    },
    {
      id: 4,
      title: "Solas Web Platform",
      category: "Web & UX/UI",
      description: "Fully custom web design, interaction layouts, and responsive interfaces optimized for performance.",
      metricName: "Conversion Rate",
      metricValue: 94,
      image: "/project4.png"
    },
    {
      id: 5,
      title: "Aether Print Editorial",
      category: "Creative Direction",
      description: "Premium brand books, packaging design, and tactile corporate print collateral.",
      metricName: "Brand Awareness",
      metricValue: 88,
      image: "/project5.png"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-header-container">
        <div className="projects-header">
          <div className="projects-header-line"></div>
          <span className="projects-header-title">
            <span className="our-text">OUR </span>
            <span className="work-text">WORK</span>
          </span>
          <div className="projects-header-line"></div>
        </div>
        <div className="projects-title-row">
          <h2 className="projects-section-title">
            Inspiring Journeys Of Brand & Design
          </h2>
          <a href="#projects" className="projects-view-all" onClick={(e) => e.preventDefault()}>
            SEE ALL STORIES{" "}
            <span className="arrow-circle">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="projects-track-container">
        <div className="projects-track">
          {projects.map((project) => (
            <div key={project.id} className="project-card-wrapper">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                
                {/* Floating buttons revealed on hover */}
                <div className="project-overlay-buttons">
                  <button className="project-explore-btn">EXPLORE</button>
                  <button className="project-arrow-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Slide down project details box */}
              <div className="project-details-box">
                <h3 className="project-details-title">{project.title}</h3>
                <span className="project-details-category">{project.category}</span>
                <p className="project-details-desc">{project.description}</p>
                
                {/* Metric progress bar */}
                <div className="project-metric-container">
                  <div className="project-metric-labels">
                    <span className="project-metric-name">{project.metricName}</span>
                    <span className="project-metric-value">{project.metricValue}%</span>
                  </div>
                  <div className="project-metric-progress-track">
                    <div 
                      className="project-metric-progress-bar" 
                      style={{ width: `${project.metricValue}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
