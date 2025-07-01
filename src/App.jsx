import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './App.css';

import Home from './components/home';
import HomePhone from './components/home_phone';

function App() {
  const homeRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen size and switch
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  // ✅ GSAP entry animation
  useEffect(() => {
    if (homeRef.current) {
      gsap.fromTo(
        homeRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
      );
    }
  }, []);

  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      <div ref={homeRef}>
        {isMobile ? <HomePhone /> : <Home />}
      </div>
    </div>
  );
}

export default App;
