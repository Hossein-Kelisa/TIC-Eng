import { LogIn, LogOut } from "lucide-react";
import "./AuthButton.css";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function AuthButton({ isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "No, stay logged in",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        onLogout();
        navigate("/"); // go to home page after logout
        Swal.fire("Logged out!", "You have successfully logged out.", "success");
      }
    });
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout} className="Auth-Logout">
          <LogOut size={22} />
          Logout
        </button>
      ) : (
        <button
          onClick={() => navigate("/auth")} // navigate to login page
          className="Auth-Login"
        >
          <LogIn size={22} />
          Login
        </button>
      )}
    </div>
  );
}

export default AuthButton;