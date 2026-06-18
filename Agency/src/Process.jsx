import React from "react";

function Process() {
  const steps = [
    {
      number: "01",
      title: "DISCOVER",
      description: "We learn about your brand, your goals and your audience."
    },
    {
      number: "02",
      title: "DEFINE",
      description: "We craft a strategic direction and creative blueprint."
    },
    {
      number: "03",
      title: "DESIGN",
      description: "We bring the concept to life with compelling visuals."
    },
    {
      number: "04",
      title: "DELIVER",
      description: "We refine, deliver and support your brand beyond launch."
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="process-header">
        <span className="process-header-title">OUR PROCESS</span>
        <div className="process-header-line"></div>
      </div>
      
      <div className="process-timeline-container">
        {/* Horizontal connecting line */}
        <div className="process-connecting-line"></div>
        
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step-item">
              <div className="process-circle-wrapper">
                <div className="process-circle">
                  <span>{step.number}</span>
                </div>
              </div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
