import React from 'react';
import './App.css';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Services from './Components/Services';
import About from './Components/About';
import Industries from './Components/Industries';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <Industries />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
