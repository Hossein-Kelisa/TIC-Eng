import React, { useState, useEffect } from "react";
import heroImages from "../Data/heroImages";
import './Hero.css';

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{backgroundImage: `url(${heroImages[currentIndex]})`}}
    >
      <div className="hero-content">
        <h2>Test. Inspection. Certification</h2>
        <p>
          Tic with certainty from test to trust
        </p>
        <a href="#contact" className="button-primary">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;
