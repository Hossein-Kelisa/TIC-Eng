import React from 'react';
import './About.css';
import { FaUsers, FaRocket, FaGlobe } from 'react-icons/fa'; // react-icons package
import Fades from './Fades'; 

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
      <Fades animationType="fadeZoom">
        <h3 className="about-title">Why Choose Us?</h3>
        <p className="about-subtitle">
          We are committed to providing outstanding services with a focus on quality and customer satisfaction.
        </p>
      </Fades>

      <div className="about-content">
        <Fades animationType="fadeZoom">
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
        </Fades>

        <Fades animationType="fadeScale">
          <img
            src="https://res.cloudinary.com/dk9rkpvhm/image/upload/4_ubycxu.jpg"
            alt="About Us"
            className="about-image"
          />
        </Fades>
      </div>
    </section>
  );
}

export default About;
