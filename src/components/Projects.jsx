import { useState, useRef, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const projects = portfolioData.projects;
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    let animationFrameId;
    
    const scroll = () => {
      if (scrollRef.current && !isHovered && !isDragging) {
        scrollRef.current.scrollLeft += 1;
        // Reset to start if reached the end
        if (scrollRef.current.scrollLeft >= (scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 1)) {
          scrollRef.current.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered, isDragging]);

  const scrollBy = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  // Drag to scroll
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  
  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false);
  };
  
  const handleMouseUp = () => {
    setIsDragging(false);
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="pt-16 pb-32 bg-surface relative w-full" id="work">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="relative z-10 max-w-[960px] mx-auto text-center mb-20">
          {/* Small uppercase label */}
          <h2 className="inline-block font-label-caps text-[10px] text-primary mb-3 tracking-[0.3em] uppercase font-semibold px-3 py-1 rounded-full border border-primary/30 bg-primary/5 shadow-[0_0_15px_rgba(244,166,193,0.2)]">
            FEATURED PROJECTS
          </h2>
          
          {/* Main Heading */}
          <h3 className="font-headline-md text-3xl md:text-4xl lg:text-5xl text-white font-bold tracking-tight">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Artifacts</span>
          </h3>
        </div>
      </div>

      <div className="group/carousel relative w-full flex items-center justify-center">
        {/* Left Navigation Arrow */}
        <button 
          onClick={() => scrollBy(-400)}
          className="absolute left-2 md:left-6 lg:left-12 z-30 p-3 md:p-4 rounded-full bg-[#0a0a0a]/90 backdrop-blur border border-primary/40 text-primary hover:bg-primary/20 hover:scale-110 hover:border-primary/70 transition-all duration-300 shadow-[0_0_15px_rgba(244,166,193,0.2)] hover:shadow-[0_0_25px_rgba(244,166,193,0.4)]"
          aria-label="Previous projects"
        >
           <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
        </button>

        <div className="w-full max-w-[1920px] mx-auto px-12 md:px-24 lg:px-32">
          {/* Carousel Container */}
          <div 
            ref={scrollRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsHovered(true)}
            onTouchEnd={() => setIsHovered(false)}
            className="flex w-full gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory py-24 md:py-32 -my-24 md:-my-32 px-2 md:px-4 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`
              .flex::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`glass-panel group relative flex-none w-full md:w-[calc((100%-32px)/2)] lg:w-[calc((100%-64px)/3)] snap-center ${index % 2 === 1 ? 'md:translate-y-12' : ''}`}
              >
                <div className="aspect-[3/4] relative overflow-hidden rounded-2xl">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 scale-125 group-hover:scale-150 opacity-60" 
                    data-alt={project.imageAlt}
                    src={project.imageUrl}
                    alt={project.title}
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent p-6 md:p-8 flex flex-col justify-end">
                    <div className="font-label-caps text-xs md:text-sm text-primary mb-3 border border-primary/30 w-fit px-3 py-1 rounded">
                      {project.tag}
                    </div>
                    <h4 className="font-headline-md text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white mb-3">
                      {project.title}
                    </h4>
                    <p className="text-lg md:text-xl text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Navigation Arrow */}
        <button 
          onClick={() => scrollBy(400)}
          className="absolute right-2 md:right-6 lg:right-12 z-30 p-3 md:p-4 rounded-full bg-[#0a0a0a]/90 backdrop-blur border border-primary/40 text-primary hover:bg-primary/20 hover:scale-110 hover:border-primary/70 transition-all duration-300 shadow-[0_0_15px_rgba(244,166,193,0.2)] hover:shadow-[0_0_25px_rgba(244,166,193,0.4)]"
          aria-label="Next projects"
        >
           <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_forward</span>
        </button>
      </div>
    </section>
  );
}
