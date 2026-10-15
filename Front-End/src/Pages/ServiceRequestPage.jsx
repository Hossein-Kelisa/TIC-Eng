import RequestForm from "../components/ServiceRequestForm/RequestForm";
import Header from "../components/HomeComponents/Header";
import Footer from "../components/HomeComponents/Footer";
import "./ServiceRequestPage.css";
import Fades from "../components/RestComponents/Fades";

export default function ServiceRequestPage() {
  return (
    <div id="ServiceRequestPage">
      <Header />
      <Fades animationType="fadeDown">
        <RequestForm />
      </Fades>
      <Footer />
    </div>
  );
}
