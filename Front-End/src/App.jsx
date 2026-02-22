import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./Pages/HomePage";
// import AuthPage from "./Pages/AuthPage";
// import RequestPage from "./Pages/RequestPage";
import { AuthProvider } from "./contexts/AuthContext";
// import DashboardPage from "./Pages/DashboardPage";
// import ProtectedRoute from "./components/RestComponents/ProtectedRoute";
// import ProfilePage from "./Pages/ProfilePage.jsx";
import { useEffect } from "react";
import { wakeupBackend } from "./utils/wakeupBackend";
import TemporaryPage from "./Pages/TemporaryPage";

function App() {
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    wakeupBackend(API_URL);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TemporaryPage />} />
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route
            path="/request"
            element={
              <ProtectedRoute>
                <RequestPage />
              </ProtectedRoute>
            }
          />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/team/:id" element={<ProfilePage />} /> */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
