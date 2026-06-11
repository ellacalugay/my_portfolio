import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import bgImage from './assets/image.png';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Services />
      <Contact />
    </>
  );
}

export default function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);

  // Custom Cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll Progress Bar
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="dark bg-background text-on-surface font-body-md overflow-x-hidden relative min-h-screen">
        {/* Interactive Spotlight Glow */}
        <div 
          className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300 mix-blend-screen"
          style={{
            background: `radial-gradient(400px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(255, 71, 155, 0.25) 0%, rgba(255, 71, 155, 0.12) 25%, rgba(255, 71, 155, 0.05) 50%, transparent 80%)`
          }}
        ></div>

        {/* Background Gradient Image */}
        <div 
          className="fixed inset-0 z-[-1] opacity-30 bg-cover bg-center pointer-events-none mix-blend-screen"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* Custom Cursor */}
        <div 
          className="custom-cursor hidden md:block" 
          style={{
            left: `${cursorPos.x}px`,
            top: `${cursorPos.y}px`,
          }}
        ></div>

        {/* Scroll Progress Bar */}
        <div 
          className="scroll-progress" 
          style={{ width: `${scrollProgress}%` }}
        ></div>

        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
