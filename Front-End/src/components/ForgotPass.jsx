import { useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import axios from "axios";

export default function ForgotPass({ handleBack }) {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/api/auth/forgot-password", { email });
      console.log("Reset link sent to:", email); // Simulated success
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
    <form className="auth-form" onSubmit={handleSubmit}>
      <label htmlFor="forgot-email">Enter your email</label>
      <input
        id="forgot-email"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit">Send Reset Link</button>

      <button type="button" onClick={handleBack}>
        Back to login
      </button>
    </form>
  );
}

ForgotPass.propTypes = {
  handleBack: PropTypes.func.isRequired,
};