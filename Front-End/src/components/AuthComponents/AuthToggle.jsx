import PropTypes from "prop-types";
import "./AuthToggle.css";

export default function AuthToggle({ isLogin, toggleMode }) {
  return (
    <div className="auth-toggle">
      <span className="auth-toggle-text">
        {isLogin ? "Don’t have an account?" : "Already have an account?"}
      </span>
      <button className="auth-toggle-btn" onClick={toggleMode}>
        {isLogin ? "Sign up" : "Sign in"}
      </button>
    </div>
  );
}

AuthToggle.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  toggleMode: PropTypes.func.isRequired,
};
