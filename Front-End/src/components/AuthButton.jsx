import { LogIn, LogOut } from "lucide-react";

function AuthButton({ isLoggedIn, onLogin, onLogout }) {
  return (
    <div>
      {isLoggedIn ? (
        <button
          onClick={onLogout}
          className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-200 transition"
        >
          <LogOut size={22} />
          Logout
        </button>
      ) : (
        <button
          onClick={onLogin}
          className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-200 transition"
        >
          <LogIn size={22} />
          Login
        </button>
      )}
    </div>
  );
}

export default AuthButton;
