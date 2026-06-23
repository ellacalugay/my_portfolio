import React, { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function SkillCard({ skill, index }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div 
      ref={cardRef}
      className={`group relative flex flex-col w-full h-[150px] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-default
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
      `}
      style={{ 
        transitionDelay: `${index * 120}ms`,
        animation: isVisible ? `float ${5 + (index % 3)}s ease-in-out infinite alternate` : 'none',
        animationDelay: `${index * 0.15}s`
      }}
      onMouseMove={handleMouseMove}
    >
      
      {/* Enhanced outer glow on hover */}
      <div className="absolute inset-0 rounded-[16px] bg-gradient-to-br from-primary/20 to-primary-container/10 blur-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out -z-10"></div>
      
      {/* Main Glassmorphism Card */}
      <div className="relative flex flex-col h-full w-full bg-white/[0.02] backdrop-blur-xl border border-primary/15 rounded-[16px] p-5 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:border-primary/40 group-hover:bg-white/[0.04] group-hover:shadow-[0_15px_40px_-10px_rgba(244,166,193,0.2)] shadow-[0_8px_30px_rgba(0,0,0,0.4)] group-hover:-translate-y-2 group-hover:scale-[1.02]">
        
        {/* Parallax Glow Effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen"
          style={{
            background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(244,166,193,0.15), transparent 40%)`,
          }}
        />

        {/* Internal ambient light (static fallback) */}
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-primary/10 rounded-full blur-[30px] pointer-events-none transition-opacity duration-700 group-hover:opacity-80 opacity-30" />

        <div className="flex flex-col justify-center z-10 h-full gap-3">
          {/* Icon Container */}
          <div className="w-[42px] h-[42px] shrink-0 rounded-[10px] border border-primary/20 bg-primary/10 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:border-primary/60 group-hover:bg-primary/20 group-hover:shadow-[0_0_20px_rgba(244,166,193,0.3)]">
            <span 
              className="material-symbols-outlined text-[22px] text-primary transition-all duration-700 group-hover:text-primary-container group-hover:drop-shadow-[0_0_12px_rgba(244,166,193,0.6)]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {skill.icon}
            </span>
          </div>
          
          {/* Text Content */}
          <div className="flex flex-col gap-1">
            <h4 className="font-headline-md text-[15px] md:text-[16px] text-white font-medium tracking-wide leading-none">
              {skill.name}
            </h4>
            <p className="font-body-md text-[#a1a1aa] text-[12px] md:text-[13px] leading-snug transition-colors duration-700 group-hover:text-[#e4e4e7] line-clamp-2">
              {skill.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const skills = portfolioData.skills;

  return (
    <section className="relative py-16 px-margin-mobile md:px-margin-desktop overflow-hidden bg-background">
      
      {/* Inject custom animations */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
        `}
      </style>

      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Radial Pink Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(244,166,193,0.08)_0%,transparent_70%)] blur-[80px]"></div>
        
        {/* Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
        ></div>

        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-[960px] mx-auto text-center mb-10">
        {/* Small uppercase label */}
        <h2 className="inline-block font-label-caps text-[10px] text-primary mb-3 tracking-[0.3em] uppercase font-semibold px-3 py-1 rounded-full border border-primary/30 bg-primary/5 shadow-[0_0_15px_rgba(244,166,193,0.2)]">
          TECHNICAL STACK
        </h2>
        
        {/* Main Heading */}
        <h3 className="font-headline-md text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3 tracking-tight">
          Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container">Tools</span>
        </h3>

        {/* Professional Subtitle */}
        <p className="font-body-lg text-sm md:text-base text-[#a1a1aa] max-w-2xl mx-auto font-light">
          The technologies and tools I use to bring ideas to life.
        </p>
      </div>

      {/* Enhanced Card Area Container with Background Effects */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-10 mt-4">
        
        {/* Background Enhancements behind the cards ONLY */}
        <div className="absolute inset-0 pointer-events-none -z-10 rounded-[40px] overflow-hidden">
          {/* Subtle radial pink lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(244,166,193,0.08)_0%,transparent_60%)] blur-[50px]" />
          
          {/* Soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
          
          {/* Very light noise texture */}
          <div 
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
          />

          {/* Ambient glow elements for depth */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[80px]" />
        </div>

        {/* Responsive Flex Layout */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)] flex-none">
              <SkillCard skill={skill} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
