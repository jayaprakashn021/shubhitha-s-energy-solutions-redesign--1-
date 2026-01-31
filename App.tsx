import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AICalculator from './components/AICalculator';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans text-slate-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AICalculator />
        <Stats />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;