import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthContext } from "../../contexts/AuthContext";

const API_URL = import.meta.env.VITE_API_URL;
const MySwal = withReactContent(Swal);

const ProtectedRoute = ({ children }) => {
  const { user, logout, loading: authLoading } = useContext(AuthContext); // need loading in context
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (authLoading) return; // wait for AuthContext

      const token = localStorage.getItem("token");

      // Show loading spinner
      MySwal.fire({
        title: "Checking access...",
        text: "Please wait",
        allowOutsideClick: false,
        allowEscapeKey: false,
        showConfirmButton: false,
        didOpen: () => Swal.showLoading(),
      });

      // Quick check
      if (!user || !token) {
        Swal.close();
        MySwal.fire({
          icon: "info",
          title: "You must be logged in",
          text: "Redirecting to login...",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/Auth", { replace: true });
        return;
      }

      // Backend verify
      try {
        const res = await fetch(`${API_URL}/auth/verify`, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        Swal.close();

        if (!res.ok) throw new Error("Invalid or expired token");

        // Token valid → render children
        setChecking(false);
      } catch (error) {
        console.error("Auth verification failed:", error);
        logout();
        Swal.close();
        MySwal.fire({
          icon: "warning",
          title: "Session expired",
          text: "Redirecting to login...",
          timer: 1800,
          showConfirmButton: false,
        });
        navigate("/Auth", { replace: true });
      }
    };

    checkAuth();
  }, [user, authLoading, navigate, logout]);

  if (authLoading || checking) return null; // wait until all checks done

  return children;
};

export default ProtectedRoute;
