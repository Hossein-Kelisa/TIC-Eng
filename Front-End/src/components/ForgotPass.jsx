import { useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import axios from "axios";
import "./ForgotPass.css";

export default function ForgotPass({ handleBack }) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/forgot-password", { email });
      Swal.fire({
        icon: "success",
        title: "Check your email",
        text: `A reset link has been sent to ${email} (simulated)`,
      });
      setEmail("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.response?.data?.msg || "Failed to send reset link.",
      });
    }
  };

  return (
    <form className="auth-form forgot-pass-form" onSubmit={handleSubmit}>
      <label htmlFor="forgot-email" className="form-label">
        Enter your email
      </label>
      <input
        id="forgot-email"
        name="email"
        type="email"
        className="form-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit" className="primary-btn">
        Send Reset Link
      </button>

      <button type="button" className="secondary-btn" onClick={handleBack}>
        Back to login
      </button>
    </form>
  );
}

ForgotPass.propTypes = {
  handleBack: PropTypes.func.isRequired,
};
