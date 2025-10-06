import { useState } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import axios from "axios";
import "./ForgotPass.css";
import { useTranslation } from "react-i18next";

export default function ForgotPass({ handleBack }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/forgot-password", { email });
      Swal.fire({
        icon: "success",
        title: t("sweetAlert.checkYourEmail"),
        text: t("sweetAlert.resetLinkSent", { email }),
      });
      setEmail("");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: t("sweetAlert.error"),
        text:
          error.response?.data?.msg || t("sweetAlert.failedToSendResetLink"),
      });
    }
  };

  return (
    <form className="auth-form forgot-pass-form" onSubmit={handleSubmit}>
      <label htmlFor="forgot-email" className="form-label2">
        {t("auth.email")}
      </label>
      <input
        id="forgot-email"
        name="email"
        type="email"
        className="form-input2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit" className="primary-btn2">
        {t("auth.sendResetLink")}
      </button>

      <button type="button" className="secondary-btn" onClick={handleBack}>
        {t("auth.backToLogin")}
      </button>
    </form>
  );
}

ForgotPass.propTypes = {
  handleBack: PropTypes.func.isRequired,
};
