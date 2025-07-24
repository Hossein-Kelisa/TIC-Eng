import React from "react";
import "./Header.css";
import logo from "../assets/Logo.jpg";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="TIC Engineering Logo" className="logo" />
        <span className="logo-text">Test-Inspection-Certification</span>{" "}
      </div>
      <nav>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
