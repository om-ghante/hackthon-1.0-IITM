// App.jsx
import { useEffect, useState } from 'react';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FaqSection from './components/FaqSection';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden font-sans">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600"
          style={{
            transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px) rotate(${scrollPosition * 0.01}deg)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div className="absolute inset-0 opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white blur-xl"
              style={{
                width: `${Math.random() * 400 + 100}px`,
                height: `${Math.random() * 400 + 100}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5,
                animation: `float ${Math.random() * 10 + 10}s infinite linear alternate`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <Sponsors />
          <FaqSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;