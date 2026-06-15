import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide if scrolling down and passed the header area, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-6 left-4 right-4 md:left-8 md:right-8 max-w-7xl mx-auto bg-white/75 backdrop-blur-md z-[100] border border-[#ff479b]/20 shadow-[0_8px_32px_rgba(255,71,155,0.15)] h-20 flex justify-between items-center px-8 rounded-full transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0'
    }`}>
      <Link to="/" className="font-display-lg text-headline-md tracking-tight text-gray-800 hover:text-[#ff479b] transition-colors font-medium">
        Ella Lureen
      </Link>
      
      <nav className="hidden md:flex gap-8 items-center">
        <a href="#work" className="font-body-lg text-body-lg text-[#ff479b] font-bold border-b-2 border-[#ff479b] pb-1 hover:opacity-80 transition-colors">Work</a>
        <a href="#expertise" className="font-body-lg text-body-lg text-gray-700 hover:text-[#ff479b] transition-colors">Expertise</a>
        <a href="#experience" className="font-body-lg text-body-lg text-gray-700 hover:text-[#ff479b] transition-colors">Experience</a>
        <a href="#contact" className="font-body-lg text-body-lg text-gray-700 hover:text-[#ff479b] transition-colors">Contact</a>
        <button className="ml-4 px-6 py-2 border border-[#ff479b] text-[#ff479b] font-label-caps text-label-caps hover:bg-[#ff479b] hover:text-white transition-all active:scale-95 rounded-full">
          Resume
        </button>
      </nav>

      <button 
        className="md:hidden text-[#ff479b]"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-0 right-0 bg-white/95 backdrop-blur-md md:hidden flex flex-col gap-4 p-6 border border-[#ff479b]/20 rounded-3xl shadow-xl">
          <a href="#work" className="font-body-lg text-body-lg text-[#ff479b] font-bold hover:text-[#ff479b]/80 transition-colors" onClick={() => setMobileMenuOpen(false)}>Work</a>
          <a href="#expertise" className="font-body-lg text-body-lg text-gray-700 hover:text-[#ff479b] transition-colors" onClick={() => setMobileMenuOpen(false)}>Expertise</a>
          <a href="#experience" className="font-body-lg text-body-lg text-gray-700 hover:text-[#ff479b] transition-colors" onClick={() => setMobileMenuOpen(false)}>Experience</a>
          <a href="#contact" className="font-body-lg text-body-lg text-gray-700 hover:text-[#ff479b] transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <button
            onClick={() => {
              window.open('/resume.pdf', '_blank');
              setMobileMenuOpen(false);
            }}
            className="px-6 py-2 mt-2 border border-[#ff479b] text-[#ff479b] font-label-caps text-label-caps hover:bg-[#ff479b] hover:text-white transition-all rounded-full"
          >
            Resume
          </button>
        </div>
      )}
    </header>
  );
}
