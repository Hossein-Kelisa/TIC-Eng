import PropTypes from "prop-types";
import "./LoginForm.css";
import { useTranslation } from "react-i18next";

export default function LoginForm({ handleSubmit, onForgotClick }) {
  const { t } = useTranslation();

  return (
    <form className="auth-form login-form" onSubmit={handleSubmit}>
      <label htmlFor="email" className="form-label">
        {t("auth.email")}
      </label>
      <input id="email" name="email" type="email" className="form-input" required />

      <label htmlFor="password" className="form-label">
        {t("auth.password")}
      </label>
      <input
        id="password"
        name="password"
        type="password"
        className="form-input"
        required
        autoComplete="current-password"
      />

      <div className="forgot-password" onClick={onForgotClick}>
        {t("auth.forgotPassword")}
      </div>

      <button type="submit" className="primary-btn">{t("auth.signIn")}</button>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onForgotClick: PropTypes.func.isRequired,
};
