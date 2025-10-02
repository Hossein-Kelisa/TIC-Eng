import PropTypes from "prop-types";
import "./AuthToggle.css";
import { useTranslation } from "react-i18next";

export default function AuthToggle({ isLogin, toggleMode }) {
  const { t } = useTranslation();
  
  return (
    <div className="auth-toggle">
      <span className="auth-toggle-text">
        {isLogin ? t("auth.dontHaveAccount") : t("auth.alreadyHaveAccount")}
      </span>
      <button className="auth-toggle-btn" onClick={toggleMode}>
        {isLogin ? t("auth.signUp") : t("auth.signIn")}
      </button>
    </div>
  );
}

AuthToggle.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
