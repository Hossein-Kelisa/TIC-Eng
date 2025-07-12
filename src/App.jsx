import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Industries />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
