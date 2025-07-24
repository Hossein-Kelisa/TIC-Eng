import React, { useState, useEffect } from "react";
import heroImages from "../Data/heroImages";
import "./Hero.css";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Step 1: Preload images when component loads
  useEffect(() => {
    const preloadImages = async () => {
      const promises = heroImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve; // resolve when loaded
        });
      });

      await Promise.all(promises); // wait until all loaded
      setImagesLoaded(true); // now ready to show
    };

    preloadImages();
  }, []);

  // Step 2: Start slideshow after loading
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  return (
    <section
      className="hero"
      style={{
        backgroundImage: imagesLoaded
          ? `url(${heroImages[currentIndex]})`
          : "none",
      }}
    >
      <div className="hero-content">
        <h2>Test. Inspection. Certification</h2>
        <p>Tic with certainty from test to trust</p>
        <a href="#contact" className="button-primary">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export default Hero;
