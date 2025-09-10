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

export default function AuthPage() {
  const { isLogin, toggleMode, handleSubmit } = useAuth();
  const [showForgotForm, setShowForgotForm] = useState(false);

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
        title: "Success!",
        text: result.message,
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (err) {
      Swal.close();
      await Swal.fire({
        title: "Error!",
        text: err.message || "Something went wrong.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div id="AuthPage">
      <Header />
      <main className="auth-page">
        <div className="auth-container">
          <h2 className="auth-title">{isLogin ? "Login" : "Register"}</h2>

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
      <Footer />
    </div>
  );
}
