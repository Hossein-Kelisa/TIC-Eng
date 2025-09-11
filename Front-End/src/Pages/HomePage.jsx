import TopBar from "../components/HomeComponents/TopBar";
import Header from "../components/HomeComponents/Header";
import Hero from "../components/HomeComponents/Hero";
import Services from "../components/HomeComponents/Services";
import About from "../components/HomeComponents/About";
import DownloadForms from "../components/HomeComponents/DownloadForms";
import Industries from "../components/HomeComponents/Industries";
import Team from "../components/HomeComponents/Team";
import FAQ from "../components/HomeComponents/FAQ";
import Contact from "../components/HomeComponents/Contact";
import Footer from "../components/HomeComponents/Footer";

function HomePage() {
  return (
    <main>
      <TopBar />
      <Header />
      <Hero />
      <Services />
      <About />
      <DownloadForms />
      <Industries />
      <Team />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default HomePage;
