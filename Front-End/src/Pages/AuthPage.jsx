import Header from "../components/Header";
import Footer from "../components/Footer";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import AuthToggle from "../components/AuthToggle";
import ForgotPass from "../components/ForgotPass";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import "./AuthPage.css";

export default function AuthPage() {
  const { isLogin, toggleMode, handleSubmit } = useAuth();
  const [showForgotForm, setShowForgotForm] = useState(false);

  return (
    <>
      <Header />
      <main className="auth-page">
        <div className="auth-container">
          <h2 className="auth-title">
            {isLogin ? "Login" : "Register"}
          </h2>

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

          <AuthToggle isLogin={isLogin} toggleMode={toggleMode} />
        </div>
      </main>
      <Footer />
    </>
  );
}
