import { useState, useEffect } from "react";
import heroImages from "../Data/heroImages";
// import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = async () => {
      const promises = heroImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve;
        });
      });

      await Promise.all(promises);
      setImagesLoaded(true);
    };

    preloadImages();
  }, []);

  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  return (
    <section className="hero">
      <div className="hero-left">
        {imagesLoaded && (
          <img
            src={heroImages[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            className="hero-image"
          />
        )}
      </div>
      <div className="hero-right hero-content">
        <h2>Tic with certainty from test to trust</h2>
        <p>Connect with our TIC experts</p>
        <a href="#contact" className="button-primary">
          Get in Touch
        </a>
        {/* <Link to="/auth" className="login-btn">
          log in
        </Link> */}
      </div>
    </section>
  );
}

export default Hero;
