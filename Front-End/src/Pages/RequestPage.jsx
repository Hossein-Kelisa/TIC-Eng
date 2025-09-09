import RequestForm from "../components/ServiceComponents/RequestForm";
import "./RequestPage.css";
import Header from "../components/HomeComponents/Header";
import Footer from "../components/HomeComponents/Footer";
import "./RequestPage.css";

export default function RequestPage() {
  return (
    <div id="RequestForm">
      <Header />
      <RequestForm />
      <Footer />
    </div>
  );
}
