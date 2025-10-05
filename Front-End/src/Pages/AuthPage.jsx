import Header from "../components/HomeComponents/Header";
import Footer from "../components/HomeComponents/Footer";
import RegisterForm from "../components/AuthComponents/RegisterForm";
import LoginForm from "../components/AuthComponents/LoginForm";
import AuthToggle from "../components/AuthComponents/AuthToggle";
import ForgotPass from "../components/AuthComponents/ForgotPass";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import Swal from "sweetalert2";
import "./AuthPage.css";
import { useTranslation } from "react-i18next";
import Fades from "../components/RestComponents/Fades";

export default function AuthPage() {
  const { isLogin, toggleMode, handleSubmit } = useAuth();
  const [showForgotForm, setShowForgotForm] = useState(false);
  const { t } = useTranslation();

  // Wrap handleSubmit to show SweetAlert loading
  const handleSubmitWithLoading = async (e) => {
    e.preventDefault();

    Swal.fire({
      title: isLogin ? "Logging in..." : "Registering...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    try {
      const result = await handleSubmit(e); // call useAuth hook
      Swal.close();

      await Swal.fire({
        title: result.message,
        icon: "success",
        confirmButtonText: "OK",
        showConfirmButton: false,
        timer: 1800,
        timerProgressBar: true,
        background: "#f0fdf4", // light green
        color: "#166534", // dark green
      });
    } catch (err) {
      Swal.close();
      await Swal.fire({
        title: "Error!",
        text: err.message || "Something went wrong.",
        icon: "error",
        confirmButtonText: "OK",
        confirmButtonColor: "#dc2626",
        background: "#fef2f2",
        color: "#991b1b",
      });
    }
  };

  return (
    <div id="AuthPage">
      <Header />
      <Fades animationType="fadeDown">
      <main className="auth-page">
        <div className="auth-container">
          <h2 className="auth-title">{isLogin ? t("auth.login") : t("auth.signUp")}</h2>

          {showForgotForm ? (
            <ForgotPass handleBack={() => setShowForgotForm(false)} />
          ) : isLogin ? (
            <LoginForm
              handleSubmit={handleSubmitWithLoading}
              onForgotClick={() => setShowForgotForm(true)}
            />
          ) : (
            <RegisterForm handleSubmit={handleSubmitWithLoading} />
          )}
          {/* Only show toggle if NOT on forgot password */}
          {!showForgotForm && (
            <AuthToggle isLogin={isLogin} toggleMode={toggleMode} />
          )}
        </div>
      </main>
      </Fades>
      <Footer />
    </div>
  );
}
