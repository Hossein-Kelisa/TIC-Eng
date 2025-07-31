import React from 'react';
import './Industries.css';

const industries = [
  { name: 'Automotive', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Welding', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Construction', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Manufacturing', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { name: 'Safety & Inspection', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
];

function Industries() {
  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <h3 className="section-title">Industries We Serve</h3>
        <p className="section-description">
          We provide professional certification, inspection, and testing services across various sectors — helping businesses maintain quality, safety, and compliance.
        </p>

        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className="industry-card">
              <img src={industry.image} alt={industry.name} className="industry-image" />
              <h4>{industry.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
