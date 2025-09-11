import { useState } from "react";
import "./Header.css";
import logo from "../../assets/Logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Search from "./Search";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Smooth scroll to a section, navigating home first if needed
  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(id);
      }, 100); // wait for homepage to render
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
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="TIC Engineering Logo" className="logo" />
        </Link>
        <span className="logo-text">
          <span className="highlight">T</span>est-
          <span className="highlight">I</span>nspection-
          <span className="highlight">C</span>ertification
        </span>
      </div>

      <div className="search-container">
        <Search />
      </div>

      {/* Hamburger always visible */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Slide-out menu */}
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
          <button onClick={() => handleScroll("download-forms")}>
            Download Forms
          </button>
          <button onClick={() => handleScroll("industries")}>Industries</button>
          <button onClick={() => handleScroll("team")}>Team</button>
          <button onClick={() => handleScroll("contact")}>Contact</button>
        </div>
      </div>

      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
}

export default Header;
