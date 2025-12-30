import React, { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import './index.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Process from './components/Process';
import Creatives from './components/Creatives';
import Results from './components/Results';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import Reveal from './components/Motion/Reveal';
import CustomCursor from './components/Motion/CustomCursor';

function App() {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);

  // Smooth Scroll Initialization
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // Close booking page when Escape is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        setIsBookingOpen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="App">
      <CustomCursor />
      <Navbar />

      {isBookingOpen && <BookingPage onClose={() => setIsBookingOpen(false)} />}

      {!isBookingOpen && (
        <>
          <Hero onBook={() => setIsBookingOpen(true)} />
          <Reveal><Stats /></Reveal>
          <Reveal><Process onBook={() => setIsBookingOpen(true)} /></Reveal>
          <Reveal><Creatives /></Reveal>
          <Reveal><Results /></Reveal>
          <Reveal><Pricing onBook={() => setIsBookingOpen(true)} /></Reveal>
          <Reveal><Contact onBook={() => setIsBookingOpen(true)} /></Reveal>
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
