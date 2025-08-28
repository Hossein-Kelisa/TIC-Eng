import { LogIn, LogOut } from "lucide-react";
import "./AuthButton.css";

function AuthButton({ isLoggedIn, onLogin, onLogout }) {
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
          onClick={onLogin}
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
