import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Industries from '../components/Industries';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Team from '../components/Team';
// import Comment from '../components/Comment';
import FAQ from '../components/FAQ';

function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <Industries />
      <Team />
      {/* <Comment /> */}
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default HomePage;
