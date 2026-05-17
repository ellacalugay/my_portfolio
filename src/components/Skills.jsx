import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const skills = portfolioData.skills;

  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop overflow-hidden">
      <div className="max-w-container-max mx-auto text-center mb-16">
        <h2 className="font-label-caps text-label-caps text-primary mb-4">
          TECHNICAL STACK
        </h2>
        <h3 className="font-headline-md text-headline-md">
          Precision Tools.
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="px-8 py-4 glass-panel border border-outline-variant/30 flex items-center gap-3 hover:border-primary/50 transition-colors"
          >
            <span 
              className="material-symbols-outlined text-primary text-[24px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {skill.icon}
            </span>
            <span className="font-label-caps text-label-caps uppercase">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
