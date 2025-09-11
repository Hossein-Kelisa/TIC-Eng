import RequestList from "../components/ServiceComponents/RequestList";
import Header from "../components/HomeComponents/Header";
import Footer from "../components/HomeComponents/Footer";
import "./DashboardPage.css";

export default function DashboardPage() {
  return (
    <div id="DashboardPage">
      <Header />
      <RequestList />
      <Footer />
    </div>
  );
}
