import { useState, useContext, useEffect } from "react";
import AuthButton from "../AuthComponents/AuthButton";
import { AuthContext } from "../../contexts/AuthContext";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import "./TopBar.css";
import { useTranslation } from "react-i18next";

export default function TopBar() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || "en");
  const { user, logout } = useContext(AuthContext);

  const toggleLanguage = () => {
    i18n.changeLanguage(language === "en" ? "fa" : "en");
  };

  // Keep local state in sync with i18n
  useEffect(() => {
    const handleLangChange = (lng) => setLanguage(lng);
    i18n.on("languageChanged", handleLangChange);
    return () => {
      i18n.off("languageChanged", handleLangChange);
    };
  }, [i18n]);

  return (
    <div className="top-bar" dir="ltr">
      {/* Left: Language and Auth */}
      <div className="top-bar-left">
        <button onClick={toggleLanguage} className="lang-btn">
          <img
            src={language === "en" ? "Flags/EN.png" : "Flags/FA.png"}
            alt="flag"
            className="flag-icon"
          />
        </button>
        <AuthButton
          className="auth-button"
          isLoggedIn={user !== null}
          onLogout={logout}
        />
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
