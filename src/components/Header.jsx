import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import resumePdf from '../assets/RESUME.pdf';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState('');

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

      // Determine active section
      const sections = ['work', 'expertise', 'experience', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if the section is in the top portion of the viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
          }
        }
      }
      
      if (current) {
        setActiveSection(current);
      } else if (currentScrollY < 200) {
        // Clear active section if at the very top of the page
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Call once to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', id: 'work' },
    { name: 'Expertise', id: 'expertise' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-6 left-4 right-4 md:left-8 md:right-8 max-w-7xl mx-auto bg-black/40 backdrop-blur-xl z-[100] border border-primary/20 shadow-[0_8px_32px_rgba(244,166,193,0.1)] h-20 flex justify-between items-center px-8 rounded-full transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-32 opacity-0'
    }`}>
      <Link to="/" className="font-display-lg text-headline-md tracking-tight text-white hover:text-primary transition-colors font-medium">
        Ella Lureen
      </Link>
      
      <nav className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`font-body-lg text-body-lg transition-colors ${
              activeSection === link.id
                ? 'text-primary font-bold border-b-2 border-primary pb-1 hover:opacity-80'
                : 'text-gray-300 hover:text-primary'
            }`}
          >
            {link.name}
          </a>
        ))}
        <a 
          href={resumePdf} 
          target="_blank" 
          rel="noopener noreferrer"
          className="ml-4 px-6 py-2 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary hover:text-background transition-all active:scale-95 rounded-full inline-flex items-center justify-center"
        >
          Resume
        </a>
      </nav>

      <button 
        className="md:hidden text-primary"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-24 left-0 right-0 bg-surface/95 backdrop-blur-xl md:hidden flex flex-col gap-4 p-6 border border-primary/20 rounded-3xl shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`font-body-lg text-body-lg transition-colors ${
                activeSection === link.id
                  ? 'text-primary font-bold hover:text-primary/80'
                  : 'text-gray-300 hover:text-primary'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-6 py-2 mt-2 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary hover:text-background transition-all rounded-full text-center block"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
