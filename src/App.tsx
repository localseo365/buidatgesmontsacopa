import React from 'react';
import Navbar from './components/navigation/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen pt-20">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <CookieBanner />
    </div>
  );
}

export default App;