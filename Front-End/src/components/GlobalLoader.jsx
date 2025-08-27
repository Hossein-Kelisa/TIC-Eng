import "./GlobalLoader.css";
import logo from "../assets/logo.png";

export default function GlobalLoader() {
  return (
    <div className="global-loader">
      <img src={logo} alt="Logo" className="loading-logo" />
    </div>
  );
}
