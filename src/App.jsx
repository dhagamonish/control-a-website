
import React from 'react';
import './index.css';

import Hero from './components/Hero';
import Stats from './components/Stats';
import Process from './components/Process';
import Creatives from './components/Creatives';
import Results from './components/Results';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Stats />
      <Process />
      <Creatives />
      <Results />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
