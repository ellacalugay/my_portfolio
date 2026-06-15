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
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest" id="work">
      <div className="max-w-container-max mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-label-caps text-label-caps text-primary mb-4">
              FEATURED PROJECTS
            </h2>
            <h3 className="font-display-lg-mobile md:font-display-lg text-headline-md md:text-headline-md">
              Digital Artifacts.
            </h3>
          </div>

        </div>

        <div className="relative group/carousel flex items-center">
          {/* Side Navigation Arrows */}
          <button 
            onClick={() => scrollBy(-400)}
            className="absolute left-2 md:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#0a0a0a]/80 backdrop-blur border border-primary/30 text-primary hover:bg-primary/20 transition-all shadow-[0_0_15px_rgba(255,71,155,0.2)]"
            aria-label="Previous projects"
          >
             <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_back</span>
          </button>
          <button 
            onClick={() => scrollBy(400)}
            className="absolute right-2 md:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-[#0a0a0a]/80 backdrop-blur border border-primary/30 text-primary hover:bg-primary/20 transition-all shadow-[0_0_15px_rgba(255,71,155,0.2)]"
            aria-label="Next projects"
          >
             <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>arrow_forward</span>
          </button>

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
            className="flex gap-gutter overflow-x-auto snap-x snap-mandatory pb-8 cursor-grab active:cursor-grabbing"
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
                className={`glass-panel group overflow-hidden relative flex-none w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-center ${index % 2 === 1 ? 'lg:translate-y-12' : ''}`}
              >
                <div className="aspect-[4/3] relative">
                  <img 
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110 opacity-60" 
                    data-alt={project.imageAlt}
                    src={project.imageUrl}
                    alt={project.title}
                    draggable="false"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent p-8 flex flex-col justify-end">
                    <div className="font-label-caps text-[10px] text-primary mb-2 border border-primary/30 w-fit px-2">
                      {project.tag}
                    </div>
                    <h4 className="font-headline-md text-headline-md text-on-surface mb-2">
                      {project.title}
                    </h4>
                    <p className="text-on-secondary-fixed-variant group-hover:text-on-surface transition-colors">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
