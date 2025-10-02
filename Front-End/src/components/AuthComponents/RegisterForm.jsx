import PropTypes from "prop-types";
import "./RegisterForm.css";
import { useTranslation } from "react-i18next";

export default function RegisterForm({ handleSubmit }) {
  const { t } = useTranslation();

  return (
    <form className="auth-form register-form" onSubmit={handleSubmit}>
      <label htmlFor="firstName" className="form-label">
        {t("auth.firstName")}
      </label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        className="form-input"
        required
      />

      <label htmlFor="lastName" className="form-label">
        {t("auth.lastName")}
      </label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        className="form-input"
        required
      />

      <label htmlFor="email" className="form-label">
        {t("auth.email")}
      </label>
      <input
        id="email"
        name="email"
        type="email"
        className="form-input"
        required
      />

      <label htmlFor="password" className="form-label">
        {t("auth.password")}
      </label>
      <input
        id="password"
        name="password"
        type="password"
        className="form-input"
        required
      />
      <label htmlFor="confirmPassword" className="form-label">
        {t("auth.confirmPassword")}
      </label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        className="form-input"
        required
      />

      <button type="submit" className="primary-btn">
        {t("auth.signUp")}
      </button>
    </form>
  );
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
