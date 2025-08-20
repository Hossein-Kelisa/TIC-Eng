import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import AuthToggle from "../components/AuthToggle";
import { useAuth } from "../hooks/useAuth";
import ForgotPass from "../components/ForgotPass";
import { useState } from "react";
import "./AuthPage.css";

export default function AuthPage() {
  // Destructure the necessary functions and state from the useAuth hook
  const { isLogin, toggleMode, handleSubmit } = useAuth();
  const [showForgotForm, setShowForgotForm] = useState(false);

  return (
    <>
      <Header />
      <div className="auth-container">
        {/*Dynamic title based on login or register mode*/}
        <h2>{isLogin ? "Login" : "Register"}</h2>
        {/* Render the appropriate form based on the isLogin state */}
        {showForgotForm ? (
          <ForgotPass handleBack={() => setShowForgotForm(false)} />
        ) : isLogin ? (
          <LoginForm
            handleSubmit={handleSubmit}
            onForgotClick={() => setShowForgotForm(true)}
          />
        ) : (
          <RegisterForm handleSubmit={handleSubmit} />
        )}

        {/* Toggle between login and registration modes */}
        <AuthToggle isLogin={isLogin} toggleMode={toggleMode} />
      </div>
      <Footer />
    </>
  );
}