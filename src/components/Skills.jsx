import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function SkillCard({ skill }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group w-full aspect-[2/1] rounded-2xl transition-all duration-500 cursor-default"
      style={{
        transform: isHovered ? 'translateY(-6px) scale(1.02)' : 'translateY(0) scale(1)',
      }}
    >
      {/* Outer Glowing Border Effect */}
      <div 
        className={`absolute inset-0 rounded-2xl transition-all duration-500 blur-[4px] -z-10 ${
          isHovered ? 'bg-gradient-to-br from-[#ff479b] to-[#FFD6E8] opacity-50' : 'bg-[#ff479b] opacity-0'
        }`}
      ></div>

      {/* Actual Glassmorphism Card */}
      <div className="relative h-full w-full bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 lg:p-5 flex flex-col items-start gap-3 overflow-hidden transition-all duration-500 hover:border-[#ff479b]/50 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
        
        {/* Soft Pink Ambient Glow inside card */}
        <div 
          className="absolute -top-8 -right-8 w-32 h-32 bg-[#ff479b]/10 rounded-full blur-[40px] pointer-events-none transition-all duration-500"
          style={{ opacity: isHovered ? 1 : 0.3 }}
        />

        {/* Icon Container */}
        <div className={`p-2.5 rounded-xl border transition-all duration-500 flex items-center justify-center ${
          isHovered ? 'border-[#ff479b]/80 bg-[#ff479b]/10 shadow-[0_0_20px_rgba(255,71,155,0.3)]' : 'border-white/10 bg-white/5'
        }`}>
          <span 
            className="material-symbols-outlined text-[24px] transition-colors duration-500"
            style={{ 
              fontVariationSettings: "'FILL' 1",
              color: isHovered ? '#FFD6E8' : '#ff479b',
              textShadow: isHovered ? '0 0 20px rgba(255, 71, 155, 0.6)' : 'none'
            }}
          >
            {skill.icon}
          </span>
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col gap-1 z-10">
          <h4 className="font-headline-md text-[15px] md:text-[16px] text-white font-medium tracking-wide">
            {skill.name}
          </h4>
          <p className="font-body-md text-[#a1a1aa] text-[12px] leading-relaxed transition-colors duration-500 group-hover:text-[#d1d5db]">
            {skill.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  const skills = portfolioData.skills;

  return (
    <section className="relative py-16 px-margin-mobile md:px-margin-desktop overflow-hidden bg-[#050505]">
      
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Radial Pink Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(255,71,155,0.08)_0%,transparent_70%)] blur-[80px]"></div>
        
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
        <h2 className="inline-block font-label-caps text-[10px] text-[#ff479b] mb-3 tracking-[0.3em] uppercase font-semibold px-3 py-1 rounded-full border border-[#ff479b]/30 bg-[#ff479b]/5 shadow-[0_0_15px_rgba(255,71,155,0.2)]">
          TECHNICAL STACK
        </h2>
        
        {/* Main Heading */}
        <h3 className="font-headline-md text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3 tracking-tight">
          Precision <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff479b] to-[#FFD6E8]">Tools.</span>
        </h3>

        {/* Professional Subtitle */}
        <p className="font-body-lg text-sm md:text-base text-[#a1a1aa] max-w-2xl mx-auto font-light">
          The technologies and tools I use to bring ideas to life.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-[960px] mx-auto">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </section>
  );
}
