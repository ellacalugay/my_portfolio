import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { hero, description } = portfolioData.personal;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative pt-20 px-margin-mobile md:px-margin-desktop text-center md:text-left bg-background overflow-hidden">
      
      {/* Premium Dark Pastel Pink Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Blurred Gradient Blobs */}
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
        <div className="absolute top-[20%] -right-[10%] w-[45%] h-[60%] bg-primary-container rounded-full mix-blend-screen filter blur-[140px] opacity-10"></div>
        <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-surface-tint rounded-full mix-blend-screen filter blur-[150px] opacity-10"></div>
        <div className="absolute bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-primary rounded-full mix-blend-screen filter blur-[100px] opacity-10"></div>
        <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-primary-fixed rounded-full mix-blend-screen filter blur-[130px] opacity-10"></div>

        {/* Geometric Tech-Inspired Lines / Particles */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(244, 166, 193, 0.15) 1px, transparent 1px),
              linear-gradient(to right, rgba(244, 166, 193, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(244, 166, 193, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px, 80px 80px, 80px 80px',
            backgroundPosition: '0 0, 0 0, 0 0'
          }}
        ></div>

        {/* SVG Connection Lines */}
        <svg className="absolute w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 120 0 L 0 0 0 120" fill="none" stroke="rgba(244, 166, 193, 0.05)" strokeWidth="1"/>
              <circle cx="120" cy="120" r="2" fill="rgba(244, 166, 193, 0.15)" />
              <circle cx="0" cy="0" r="2" fill="rgba(244, 166, 193, 0.15)" />
              <line x1="0" y1="0" x2="120" y2="120" stroke="rgba(244, 166, 193, 0.03)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>

        {/* Frosted Glass Overlay for airy, soft finish */}
        <div className="absolute inset-0 backdrop-blur-[2px] bg-black/40"></div>
      </div>

      <div className="max-w-container-max mx-auto grid md:grid-cols-2 items-center gap-stack-md w-full relative z-10">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <h2 className="font-label-caps text-label-caps text-primary mb-4 tracking-[0.3em] font-medium drop-shadow-sm">
            {hero.subtitle}
          </h2>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-none text-white">
            Software <span className="text-primary text-glow-pink">Developer</span>
            <br />
            &amp; UI Designer
          </h1>
          <p className="font-body-lg text-body-lg text-gray-400 max-w-lg mb-10 font-light leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-gutter">
            <a 
              href="#work" 
              className="px-10 py-4 glass-panel text-primary font-label-caps text-label-caps text-center uppercase tracking-widest cursor-pointer"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 border border-primary/20 text-gray-300 font-label-caps text-label-caps text-center hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all uppercase tracking-widest cursor-pointer rounded-2xl bg-surface/30 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border border-primary/30 shadow-[0_20px_50px_rgba(244,166,193,0.15)] backdrop-blur-sm">
            <img 
              alt={hero.imageAlt}
              className="w-full h-full object-cover filter hover:scale-105 transition-all duration-700" 
              data-alt={hero.imageAlt}
              src={hero.imageUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
