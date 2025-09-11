import { useState } from "react";
// import { useContext } from "react";
// import AuthButton from "../AuthComponents/AuthButton";
// import { AuthContext } from "../../contexts/AuthContext";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./TopBar.css";

export default function TopBar({ onLanguageChange }) {
  const [language, setLanguage] = useState("en");
  // const { user, logout } = useContext(AuthContext); //  use global auth

  const toggleLanguage = () => {
    const newLang = language === "en" ? "fa" : "en";
    setLanguage(newLang);
    if (typeof onLanguageChange === "function") {
      onLanguageChange(newLang); // Safe call
    }
  };

  return (
    <div className="top-bar">
      {/* Left: Language and Auth */}
      <div className="top-bar-left">
        <button onClick={toggleLanguage} className="lang-btn">
          <img
            src={language === "en" ? "Flags/EN.png" : "Flags/FA.png"}
            alt="flag"
            className="flag-icon"
          />
        </button>
          {/* <AuthButton
            className="auth-button"
            isLoggedIn={user !== null}
            onLogout={logout}
          /> */}
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
