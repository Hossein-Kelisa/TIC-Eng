import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
import RequestForm from "./Pages/RequestForm";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/request" element={<RequestForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
