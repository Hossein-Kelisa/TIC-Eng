import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../assets/Logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // =========================
  // SCROLL EFFECTS
  // =========================
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Glass + shrink after scroll
      setScrolled(currentScrollY > 80);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // =========================
  // SCROLL TO SECTION
  // =========================
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollToSection(id), 100);
    } else {
      scrollToSection(id);
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`header ${scrolled ? "scrolled" : ""} ${
        hidden ? "hidden" : ""
      }`}
    >
      {/* ================= LOGO ================= */}
      <div className="logo-container">
        <Link
          to="/"
          className="logo-link"
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
        >
          <img src={logo} alt="TIC Engineering Logo" className="logo" />
        </Link>

        <span className="logo-text">
          <span className="highlight">T</span>est-
          <span className="highlight">I</span>nspection-
          <span className="highlight">C</span>ertification
        </span>
      </div>

      {/* ================= HAMBURGER ================= */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* ================= SIDEBAR ================= */}
      <div className={`sidebar-menu ${isMenuOpen ? "open" : ""}`}>
        <button
          className="close-button"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          ×
        </button>

        <div className="sidebar-nav">
          <button onClick={() => handleScroll("services")}>Services</button>
          <button onClick={() => handleScroll("about")}>About</button>
          {/* <button onClick={() => handleScroll("download-forms")}>
            Download Forms
          </button> */}
          {/* <button onClick={() => handleScroll("industries")}>
            Industries
          </button> */}
          <button onClick={() => handleScroll("certificates")}>
            Certificates
          </button>
          <button onClick={() => handleScroll("team")}>Team</button>
          <button onClick={() => handleScroll("contact")}>Contact</button>
        </div>
      </div>

      {/* ================= OVERLAY ================= */}
      {isMenuOpen && (
        <div className="overlay" onClick={toggleMenu}></div>
      )}
    </header>
  );
}

export default Header;