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

      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));

      await showSuccessAlert(isLogin);
      navigate("/");
    } catch (error) {
      if (error.message.includes("email")) {
        showEmailExistsAlert();
      } else {
        showErrorAlert(error.message || "Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return { isLogin, toggleMode, handleSubmit, loading };
};
