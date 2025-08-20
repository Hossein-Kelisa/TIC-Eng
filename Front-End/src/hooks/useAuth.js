
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  showSuccessAlert,
  showErrorAlert,
  showEmailExistsAlert,
} from "./showAlert";

export const useAuth = () => {
  // State to toggle between login and registration modes
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const toggleMode = () => setIsLogin((prev) => !prev);
  // Function to handle form submission for both login and registration
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract form values
    const formData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    // Define the API endpoint based on the mode
    const url = isLogin ? "/api/auth/login" : "/api/auth/register";

    try {
      // Send the form data to the server
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      // Check if the response is successful
      if (isLogin) {
        if (response.ok) {
          localStorage.setItem("token", result.token);
          localStorage.setItem("user", JSON.stringify(result.user));
          await showSuccessAlert(isLogin);
          navigate("/");
        } else {
          // Handle other errors, such as incorrect password or email
          showErrorAlert("Password or email is incorrect.");
        }
      } else {
        if (response.ok) {
          await showSuccessAlert(isLogin);
          navigate("/");
        } else {
          // Handle email already registered error
          if (!isLogin && result.error?.toLowerCase().includes("email")) {
            showEmailExistsAlert();
          }
        }
      }
    } catch (error) {
      // Handle network errors
      console.error("❌ Network error:", error);
      showErrorAlert("Please check your connection and try again.");
    }
  };

  return { isLogin, toggleMode, handleSubmit };
};
