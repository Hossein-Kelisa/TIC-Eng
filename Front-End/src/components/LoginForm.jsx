
import PropTypes from "prop-types";

export default function LoginForm({ handleSubmit, onForgotClick }) {
  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        required
        autoComplete="current-password"
      />

      <div className="forgot-password" onClick={onForgotClick}>
        Forgot password?
      </div>

      <button type="submit">Sign in</button>
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onForgotClick: PropTypes.func.isRequired,
};
