import RequestList from "../components/ServiceComponents/RequestList";
import Header from "../components/HomeComponents/Header";
import Footer from "../components/HomeComponents/Footer";
import "./DashboardPage.css";
import Fades from "../components/RestComponents/Fades";

export default function DashboardPage() {
  return (
    <div id="DashboardPage">
      <Header />
      <Fades animationType="fadeDown">
        <RequestList />
      </Fades>
      <Footer />
    </div>
  );
}
