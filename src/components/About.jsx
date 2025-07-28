import React from 'react';
import './About.css';
import { FaUsers, FaRocket, FaGlobe } from 'react-icons/fa'; // react-icons package
import FadeInOnScroll from './FadeInOnScroll';

function About() {
  const points = [
    {
      icon: <FaUsers />,
      title: 'Experienced Team',
      description: 'Our expert team has many years of experience to deliver the best service.',
    },
    {
      icon: <FaRocket />,
      title: 'Fast & Reliable',
      description: 'We provide quick turnaround times without compromising quality.',
    },
    {
      icon: <FaGlobe />,
      title: 'Global Standards',
      description: 'Our processes follow international standards for guaranteed quality.',
    },
  ];

  return (
    <section id="about" className="about-section">
      <FadeInOnScroll>
        <h3 className="about-title">Why Choose Us?</h3>
        <p className="about-subtitle">
          We are committed to providing outstanding services with a focus on quality and customer satisfaction.
        </p>
      </FadeInOnScroll>

      <div className="about-content">
        <FadeInOnScroll>
          <ul className="about-points">
            {points.map((point, index) => (
              <li key={index} className="about-point">
                <div className="icon">{point.icon}</div>
                <div>
                  <h4>{point.title}</h4>
                  <p>{point.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </FadeInOnScroll>

        <FadeInOnScroll>
          <img
            src="https://res.cloudinary.com/dk9rkpvhm/image/upload/testing_fc326x.jpg"
            alt="About Us"
            className="about-image"
          />
        </FadeInOnScroll>
      </div>
    </section>
  );
}

export default About;
