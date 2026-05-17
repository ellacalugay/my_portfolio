import { portfolioData } from '../data/portfolioData';

export default function Testimonials() {
  const { quote, author } = portfolioData.testimonial;

  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto text-center">
        <h2 className="font-label-caps text-label-caps text-primary mb-16">
          CLIENT WHISPERS
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-panel p-12 relative">
            <span 
              className="material-symbols-outlined text-primary/20 text-[120px] absolute top-4 left-4 pointer-events-none"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              format_quote
            </span>
            <p className="font-headline-md text-headline-md italic mb-8 relative z-10">
              "{quote}"
            </p>
            <div className="font-label-caps text-label-caps text-on-surface uppercase tracking-widest">
              — {author}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
