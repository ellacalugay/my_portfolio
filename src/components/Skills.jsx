import { portfolioData } from '../data/portfolioData';

function SkillCard({ skill }) {
  return (
    <div className="group relative flex flex-col h-full w-full transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] cursor-default">
      
      {/* Enhanced outer glow on hover */}
      <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-[#ff479b]/30 to-[#FFD6E8]/10 blur-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      
      {/* Main Glassmorphism Card */}
      <div className="relative flex flex-col h-full w-full bg-white/[0.03] backdrop-blur-xl border border-[#ff479b]/20 rounded-[24px] p-6 lg:p-8 gap-6 overflow-hidden transition-all duration-500 group-hover:border-[#ff479b]/50 group-hover:bg-white/[0.05] group-hover:shadow-[0_15px_40px_-10px_rgba(255,71,155,0.3)] shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
        
        {/* Internal ambient light */}
        <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#ff479b]/10 rounded-full blur-[40px] pointer-events-none transition-opacity duration-500 group-hover:opacity-100 opacity-40" />

        {/* Icon Container */}
        <div className="w-[72px] h-[72px] rounded-[20px] border border-[#ff479b]/30 bg-[#ff479b]/10 flex items-center justify-center transition-all duration-500 group-hover:border-[#ff479b]/80 group-hover:bg-[#ff479b]/20 group-hover:shadow-[0_0_25px_rgba(255,71,155,0.4)]">
          <span 
            className="material-symbols-outlined text-[36px] text-[#ff479b] transition-all duration-500 group-hover:text-[#FFD6E8] group-hover:drop-shadow-[0_0_15px_rgba(255,71,155,0.8)]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {skill.icon}
          </span>
        </div>
        
        {/* Text Content */}
        <div className="flex flex-col gap-3 z-10 mt-auto">
          <h4 className="font-headline-md text-xl md:text-2xl text-white font-medium tracking-wide">
            {skill.name}
          </h4>
          <p className="font-body-md text-[#a1a1aa] text-sm md:text-[15px] leading-relaxed transition-colors duration-500 group-hover:text-[#e4e4e7]">
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

      {/* Enhanced Card Area Container with Background Effects */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 py-10 mt-4">
        
        {/* Background Enhancements behind the cards ONLY */}
        <div className="absolute inset-0 pointer-events-none -z-10 rounded-[40px] overflow-hidden">
          {/* Subtle radial pink lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(255,71,155,0.08)_0%,transparent_60%)] blur-[50px]" />
          
          {/* Soft gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff479b]/[0.02] to-transparent" />
          
          {/* Very light noise texture */}
          <div 
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
          />

          {/* Ambient glow elements for depth */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#ff479b]/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff479b]/5 rounded-full blur-[80px]" />
        </div>

        {/* Responsive Grid Layout */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.5rem)] flex-none">
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
