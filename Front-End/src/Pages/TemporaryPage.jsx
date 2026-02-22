import logo from "../assets/logo.png";
import Footer from "../components/HomeComponents/Footer";

function TemporaryPage() {
  return (
    <main>
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to right, #092e73ff, #4b74baff)",
          color: "white",
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <img
            src={logo}
            alt="TIC Engineering Logo"
            style={{
              width: "clamp(120px, 40vw, 260px)",
              height: "auto",
              marginBottom: "20px",
            }}
          />
          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              fontWeight: "bold",
              marginBottom: "20px",
              color: "#ffcc00",
            }}
          >
            TIC-Engineering
          </h1>

          <h2
            style={{
              fontSize: "clamp(1.2rem, 4vw, 2rem)",
              marginBottom: "15px",
            }}
          >
            🚧 Website Coming Soon
          </h2>

          <p
            style={{
              fontSize: "clamp(1rem, 3.5vw, 1.5rem)",
              marginBottom: "10px",
            }}
          >
            We are currently improving our website.
          </p>

          <p style={{ opacity: 0.9 }}>Thank you for your patience.</p>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default TemporaryPage;
