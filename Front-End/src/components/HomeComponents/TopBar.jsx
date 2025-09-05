import { useState } from "react";
// import { Sun, Moon } from "lucide-react";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./TopBar.css";

export default function TopBar({ onLanguageChange }) {
//   const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     document.documentElement.classList.toggle("dark");
//   };

  const toggleLanguage = () => {
    const newLang = language === "en" ? "fa" : "en";
    setLanguage(newLang);
    if (typeof onLanguageChange === "function") {
      onLanguageChange(newLang); // Safe call
    }
  };

  return (
    <div className="top-bar">
      {/* Left: Language & Dark Mode */}
      <div className="top-bar-left">
        <button onClick={toggleLanguage} className="lang-btn">
          <img
            src={language === "en" ? "Flags/EN.png" : "Flags/FA.png"}
            alt="flag"
            className="flag-icon"
          />
        </button>
        {/* <button onClick={toggleDarkMode} className="dark-btn">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button> */}
      </div>

      {/* Right: Social Icons */}
      <div className="social-icons">
        <FaFacebook />
        <FaLinkedin />
        <FaInstagram />
        <FaWhatsapp />
      </div>
    </div>
  );
}
