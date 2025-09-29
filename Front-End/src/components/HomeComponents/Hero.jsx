import { useState, useEffect } from "react";
import heroImages from "../../Data/heroImages";
import ShinyText from "../RestComponents/ShinyText";
import { useTranslation } from "react-i18next";
import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { t } = useTranslation();

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
        <h2>{t("hero.subtitle")}</h2>
        <ShinyText
          text={t("hero.title")}
          disabled={false}
          speed={3}
          className="hero-title"
        />
        {/* <div className="hero-buttons"> */}
          <a href="#contact" className="button-primary">
            {t("hero.get_in_touch")}
          </a>
          <Link to="/request" className="RequestService-btn1">
            {t("industries.button")}
          </Link>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Hero;
