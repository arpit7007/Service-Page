import React from "react";

function Services() {
  const servicesList = [
    {
      id: 1,
      title: "Creative Direction",
      classname: "circle-1",
      bgImage: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?auto=format&fit=crop&w=600&q=80",
      description: "Visual and conceptual art direction.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="m16.2 7.8-2 2-2 2-2 2-2.4 2.4a1 1 0 0 1-1.4 0c-.4-.4-.4-1 0-1.4L8.8 11.4l2-2 2-2 2-2c.4-.4 1-.4 1.4 0l.4.4Z"></path>
          <path d="m14.2 9.8-2 2"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: "Brand Identity",
      classname: "circle-2",
      bgImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80",
      description: "Logos, guidelines, and design systems.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <circle cx="9" cy="9" r="2"></circle>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: "Content Production",
      classname: "circle-3",
      bgImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80",
      description: "Aesthetic photography and media.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path>
          <circle cx="12" cy="13" r="3"></circle>
        </svg>
      )
    },
    {
      id: 4,
      title: "Video Editing",
      classname: "circle-4",
      bgImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80",
      description: "Cinematic grading and commercial editing.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m22 8-6 4 6 4V8Z"></path>
          <rect width="14" height="12" x="2" y="6" rx="2" ry="2"></rect>
        </svg>
      )
    },
    {
      id: 5,
      title: "Social Media",
      classname: "circle-5",
      bgImage: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=600&q=80",
      description: "Grid curation, graphics, and motion.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      id: 6,
      title: "AI Automation",
      classname: "circle-6",
      bgImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      description: "Smart AI agents and automation.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="10" rx="2"></rect>
          <circle cx="12" cy="5" r="2"></circle>
          <path d="M12 7v4"></path>
          <line x1="8" y1="16" x2="8" y2="16.01"></line>
          <line x1="16" y1="16" x2="16" y2="16.01"></line>
        </svg>
      )
    },
    {
      id: 7,
      title: "Web & App Dev",
      classname: "circle-7",
      bgImage: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=600&q=80",
      description: "Custom UI/UX and web development.",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        
        {/* Floating circles container */}
        <div className="services-circles-wrapper">
          {servicesList.map((service) => (
            <div 
              key={service.id} 
              className={`service-circle-item ${service.classname}`}
              style={{ backgroundImage: `url(${service.bgImage})` }}
            >
              {/* Overlay inside circle */}
              <div className="service-circle-overlay">
                <div className="service-circle-icon-box">
                  {service.icon}
                </div>
                <h3 className="service-circle-title">{service.title}</h3>
                <p className="service-circle-desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center text content */}
        <div className="services-center-content">
          <span className="services-badge">OUR SERVICES</span>
          <h2 className="services-heading">
            Elevating Brands <br />
            Through Design & Tech
          </h2>
          
          <div className="services-actions">
            <button className="services-primary-btn" onClick={() => handleScroll("contact")}>
              GET IN TOUCH
            </button>
            <button className="services-secondary-btn" onClick={() => handleScroll("projects")}>
              EXPLORE WORK
              <span className="services-arrow-wrapper">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Services;
