import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-low" id="experience">
      <div className="max-w-container-max mx-auto">
        <h2 className="font-label-caps text-label-caps text-primary mb-16 text-center">
          EXPERIENCE JOURNEY
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-outline-variant/30 -translate-x-1/2"></div>

          {/* Experience Items */}
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className={`relative mb-24 md:mb-32 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 shadow-[0_0_15px_rgba(244,166,193,0.5)] z-10"></div>

              {/* Content */}
              <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'md:w-1/2 md:pr-16 md:text-right' : 'md:w-1/2 md:pl-16 md:ml-auto'}`}>
                <div className="font-label-caps text-label-caps text-primary-container mb-2">
                  {experience.period}
                </div>
                <h4 className="font-headline-md text-headline-md text-on-surface mb-2">
                  {experience.company}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant font-medium mb-4">
                  {experience.position}
                </p>
                <p className="font-body-md text-body-md text-on-secondary-fixed-variant">
                  {experience.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
