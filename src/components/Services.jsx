import React from 'react';
import './Services.css';
import FadeInOnScroll from './FadeInOnScroll';

function Services() {
  const services = [
    {
      title: 'Testing',
      description: 'We check your products to ensure they are safe and high quality.',
      image: 'https://res.cloudinary.com/dk9rkpvhm/image/upload/65cdbc34b9d510ec993c0cb6_654c9fb1fbfb300821c1a860_manual_20inspection-min_angb56.jpg',
    },
    {
      title: 'Inspection',
      description: 'We examine equipment, buildings, and products carefully.',
      image: 'https://res.cloudinary.com/dk9rkpvhm/image/upload/inspectionn_xttqa2.jpg',
    },
    {
      title: 'Certification',
      description: 'We provide certificates to show your products meet standards.',
      image: 'https://res.cloudinary.com/dk9rkpvhm/image/upload/testing_fc326x.jpg',
    },
  ];

  return (
    <section id="services" className="services-section">
      <FadeInOnScroll>
        <h3 className="services-title">Our Services</h3>
      </FadeInOnScroll>
      <div className="services-grid">
        {services.map((service, index) => (
          <FadeInOnScroll key={index}>
            <div className="service-card">
              <div
                className="service-image"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="service-content">
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </section>
  );
}

export default Services;
