import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AuthPage from "./Pages/AuthPage";
// import TestLoader from "./Pages/TestLoader";
// import GlobalLoader from "./components/GlobalLoader";

function App() {
  return (
    <Router>
      {/* <GlobalLoader /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        {/* <Route path="/test-loader" element={<TestLoader />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
