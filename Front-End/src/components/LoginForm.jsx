import PropTypes from "prop-types";
import "./LoginForm.css";

export default function LoginForm({ handleSubmit, onForgotClick }) {
  return (
    <form className="auth-form login-form" onSubmit={handleSubmit}>
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input id="email" name="email" type="email" className="form-input" required />

      <label htmlFor="password" className="form-label">
        Password
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
        Forgot password?
      </div>

      <button type="submit" className="primary-btn">Sign in</button>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onForgotClick: PropTypes.func.isRequired,
};
