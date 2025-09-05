import PropTypes from "prop-types";
import "./RegisterForm.css";

export default function RegisterForm({ handleSubmit }) {
  return (
    <form className="auth-form register-form" onSubmit={handleSubmit}>
      <label htmlFor="userName" className="form-label">
        User Name
      </label>
      <input
        id="userName"
        name="userName"
        type="text"
        className="form-input"
        required
      />

      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        id="email"
        name="email"
        type="email"
        className="form-input"
        required
      />

      <label htmlFor="password" className="form-label">
        Password
      </label>
      <input
        id="password"
        name="password"
        type="password"
        className="form-input"
        required
      />
      <label htmlFor="confirmPassword" className="form-label">
        Confirm Password
      </label>
      <input
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        className="form-input"
        required
      />

      <button type="submit" className="primary-btn">
        Sign up
      </button>
    </form>
  );
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
