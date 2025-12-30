
import React from 'react';
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

function App() {
  const [isBookingOpen, setIsBookingOpen] = React.useState(false);

  // Close booking page when Escape is pressed
  React.useEffect(() => {
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
      <Navbar />

      {isBookingOpen && <BookingPage onClose={() => setIsBookingOpen(false)} />}

      {!isBookingOpen && (
        <>
          <Hero onBook={() => setIsBookingOpen(true)} />
          <Stats />
          <Process onBook={() => setIsBookingOpen(true)} />
          <Creatives />
          <Results />
          <Pricing onBook={() => setIsBookingOpen(true)} />
          <Contact onBook={() => setIsBookingOpen(true)} />
        </>
      )}

      <Footer />
    </div>
  );
}

export default App;
