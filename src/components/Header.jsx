import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/Logo.jpg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="TIC Engineering Logo" className="logo" />
        <span className="logo-text">Test-Inspection-Certification</span>
      </div>

      {/* Hamburger icon for mobile */}
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Normal nav for desktop */}
      <nav className="nav-links">
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#industries">Industries</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Slide-out menu for mobile */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <button
          className="close-button"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          ×
        </button>
        <a href="#services" onClick={toggleMenu}>
          Services
        </a>
        <a href="#about" onClick={toggleMenu}>
          About
        </a>
        <a href="#industries" onClick={toggleMenu}>
          Industries
        </a>
        <a href="#team" onClick={toggleMenu}>
          Team
        </a>
        <a href="#contact" onClick={toggleMenu}>
          Contact
        </a>
      </div>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
}

export default Header;
