import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import DownloadForms from "../components/DownloadForms";
import Industries from "../components/Industries";
import Team from "../components/Team";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
