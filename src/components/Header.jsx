import React from 'react';
import './Header.css'; 
import logo from '../assets/logo.jpg'; 

function Header() {
  return (
    <header>
      <img src={logo} alt="TIC Engineering Logo" className="logo" />
      <nav>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
