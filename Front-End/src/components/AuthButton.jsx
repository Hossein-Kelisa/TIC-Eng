import { LogIn, LogOut } from "lucide-react";
import "./AuthButton.css";
import { useNavigate } from "react-router-dom";

function AuthButton({ isLoggedIn, onLogin, onLogout }) {
  const navigate = useNavigate();

  return (
    <div>
      {isLoggedIn ? (
        <button
          onClick={onLogout}
          className="Auth-Logout"
        >
          <LogOut size={22} />
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            onLogin();
            navigate("/auth");
          }}
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
