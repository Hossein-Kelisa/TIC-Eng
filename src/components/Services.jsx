import React from 'react';
import './Services.css'; 
import FadeInOnScroll from './FadeInOnScroll'; 

function Services() {
  const services = [
    {
      title: 'Testing',
      description: 'We check your products to ensure they are safe and high quality.',
      image: 'https://res.cloudinary.com/dk9rkpvhm/image/upload/1_d24idv.jpg',
    },
    {
      title: 'Inspection',
      description: 'We examine equipment, buildings, and products carefully!!!.',
      image: 'https://res.cloudinary.com/dk9rkpvhm/image/upload/2_kuav6y.jpg',
    },
    {
      title: 'Certification',
      description: 'We provide certificates to show your products meet standards.',
      image: 'https://res.cloudinary.com/dk9rkpvhm/image/upload/3_bxkbhe.jpg', 
    },
  ];
  return (
    <section id="services" className="services-section">
      <FadeInOnScroll>
        <h3 className="services-title">Our Services</h3>
      </FadeInOnScroll>
      <div className="services-container">
        {services.map((service, index) => (
          <FadeInOnScroll key={index}>
            <div className="service-box">
            <img src={service.image} alt={`${service.title} service illustration`} className="service-image" />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </FadeInOnScroll>
        ))}
      </div>
    </section>
  );
}

export default Services;
