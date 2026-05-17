import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { hero, description } = portfolioData.personal;

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative pt-20 px-margin-mobile md:px-margin-desktop text-center md:text-left">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 items-center gap-stack-md w-full">
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <h2 className="font-label-caps text-label-caps text-primary mb-4 tracking-[0.3em]">
            {hero.subtitle}
          </h2>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-none">
            Software <span className="text-primary-container">Developer</span>
            <br />
            &amp; UI Designer
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg mb-10">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-gutter">
            <a 
              href="#work" 
              className="px-10 py-4 glass-panel border border-primary text-primary font-label-caps text-label-caps text-center hover:bg-primary/20 transition-all uppercase tracking-widest cursor-pointer"
            >
              View Projects
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 border border-outline text-on-surface font-label-caps text-label-caps text-center hover:border-primary transition-all uppercase tracking-widest cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_50px_rgba(255,45,149,0.2)]">
            <img 
              alt={hero.imageAlt}
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700" 
              data-alt={hero.imageAlt}
              src={hero.imageUrl}
            />
          </div>
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>
    </section>
  );
}
