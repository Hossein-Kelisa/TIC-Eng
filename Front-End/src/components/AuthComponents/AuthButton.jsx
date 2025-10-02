import { User2 } from "lucide-react";
import "./AuthButton.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";

function AuthButton({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Stay logged in",
      reverseButtons: true,
      confirmButtonColor: "#1f7840ff", // green
      cancelButtonColor: "#aa1d1dff",  // red
      background: "#fefce8",          // light background
      color: "#111827",               // dark text
    }).then((result) => {
      if (result.isConfirmed) {
        onLogout();
        navigate("/"); // go to home page after logout

        // non-blocking toast instead of modal
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Logged out successfully",
          showConfirmButton: false,
          timer: 1800,
          timerProgressBar: true,
          background: "#f0fdf4",
          color: "#166534",
        });
      }
    });
  };

  return (
    <div>
      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="Auth-Logout"
          aria-label="Logout from your account"
        >
          <User2 size={22} className="UserIcon-Logout" aria-hidden="true" />
          {t("auth.logout")}
        </button>
      ) : (
        <button
          onClick={() => navigate("/auth")} // navigate to login page
          className="Auth-Login"
          aria-label="Login to your account"
        >
          <User2 size={22} className="UserIcon-Login" aria-hidden="true" />
          {t("auth.login")}
        </button>
      )}
    </div>
  );
}

export default AuthButton;
