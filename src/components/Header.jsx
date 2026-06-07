import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-surface/70 backdrop-blur-md z-[100] border-b border-outline-variant/30 shadow-[0_0_30px_rgba(255,45,149,0.15)] h-20 flex justify-between items-center px-margin-mobile md:px-margin-desktop">
      <Link to="/" className="font-display-lg text-headline-md tracking-tight text-on-surface hover:text-primary transition-colors">
        Ella Lureen
      </Link>
      
      <nav className="hidden md:flex gap-gutter items-center">
        <a href="#work" className="font-body-lg text-body-lg text-primary font-bold border-b-2 border-primary pb-1 hover:text-on-surface-variant transition-colors">Work</a>
        <a href="#expertise" className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors">Expertise</a>
        <a href="#experience" className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors">Experience</a>
        <a href="#contact" className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors">Contact</a>
        <button className="ml-4 px-6 py-2 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary/10 transition-all active:scale-95">
          Resume
        </button>
      </nav>

      <button 
        className="md:hidden text-primary"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-surface/95 backdrop-blur-md md:hidden flex flex-col gap-4 p-4 border-b border-outline-variant/30">
          <a href="#work" className="font-body-lg text-body-lg text-primary hover:text-on-surface-variant transition-colors">Work</a>
          <a href="#expertise" className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors">Expertise</a>
          <a href="#experience" className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="font-body-lg text-body-lg text-on-surface-variant hover:text-primary transition-colors">Contact</a>
        <button
          onClick={() => window.open('/resume.pdf', '_blank')}
          className="px-6 py-2 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary/10 transition-all"
        >
          Resume
        </button>
        </div>
      )}
    </header>
  );
}
