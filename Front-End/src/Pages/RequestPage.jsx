import RequestForm from "../components/ServiceComponents/RequestForm";
import Header from "../components/HomeComponents/Header";
import Footer from "../components/HomeComponents/Footer";
import "./RequestPage.css";
import Fades from "../components/RestComponents/Fades";

export default function RequestPage() {
  return (
    <div id="RequestForm">
      <Header />
      <Fades animationType="fadeDown">
        <RequestForm />
      </Fades>
      <Footer />
    </div>
  );
}
