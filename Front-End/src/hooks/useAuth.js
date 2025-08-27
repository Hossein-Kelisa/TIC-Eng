import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginUser, registerUser } from "../services/authService";
import {
  showSuccessAlert,
  showErrorAlert,
  showEmailExistsAlert,
} from "./showAlert";

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleMode = () => setIsLogin((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = isLogin
      ? {
          email: e.target.email.value,
          password: e.target.password.value,
        }
      : {
          userName: e.target.userName.value,
          email: e.target.email.value,
          password: e.target.password.value,
          confirmPassword: e.target.confirmPassword.value,
        };

    try {
      const result = isLogin
        ? await loginUser(formData)
        : await registerUser(formData);

      // Save user info
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result));

      // Stop loader immediately
      setLoading(false);

      // Show success alert (do NOT await)
      showSuccessAlert(isLogin);

      // Navigate to home
      navigate("/");
    } catch (error) {
      // Stop loader on error
      setLoading(false);

      if (!isLogin) {
        // Registration
        if (error.message.includes("email")) {
          showEmailExistsAlert();
          return;
        }
      }
      // All other errors
      showErrorAlert(error.message || "Something went wrong");
    }
  };

  return { isLogin, toggleMode, handleSubmit, loading };
};
