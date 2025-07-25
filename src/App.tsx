import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-orange-50">
      <Header />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;