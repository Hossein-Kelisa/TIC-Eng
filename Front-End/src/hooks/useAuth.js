import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { loginUser, registerUser } from "../services/authService";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const toggleMode = () => setIsLogin((prev) => !prev);

  const handleSubmit = async (e) => {
    e.preventDefault();

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

    const result = isLogin
      ? await loginUser(formData)
      : await registerUser(formData);

    if (!result.success) {
      throw new Error(result.message);
    }

    // ✅ update AuthContext only when success
    login(result.data);

    // ✅ navigate on success
    navigate("/");

    return result;
  };

  return { isLogin, toggleMode, handleSubmit };
};
