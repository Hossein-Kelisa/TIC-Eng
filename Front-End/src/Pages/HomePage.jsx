import TopBar from "../components/HomeComponents/TopBar";
import Header from "../components/HomeComponents/Header";
import Hero from "../components/HomeComponents/Hero";
import Services3 from "../components/HomeComponents/Services3";
import About2 from "../components/HomeComponents/About2";
// import DownloadForms from "../components/HomeComponents/DownloadForms";
// import Industries from "../components/HomeComponents/Industries";
import Certificates from "../components/HomeComponents/Certificates";
// import Team from "../components/HomeComponents/Team";
import FAQ from "../components/HomeComponents/FAQ";
import Contact from "../components/HomeComponents/Contact";
import Footer from "../components/HomeComponents/Footer";

function HomePage() {
  return (
    <main>
      <TopBar />
      <Header />
      <Hero />
      <Services3 />
      <About2 />
      {/* <DownloadForms /> */}
      {/* <Industries /> */}
      <Certificates />
      {/* <Team /> */}
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default HomePage;
