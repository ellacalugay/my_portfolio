import { portfolioData } from '../data/portfolioData';

export default function Services() {
  const services = portfolioData.services;

  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-low" id="services">
      <div className="max-w-container-max mx-auto">
        <div className="grid md:grid-cols-3 gap-gutter">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-10 glass-panel border border-outline-variant/20 hover:border-primary transition-all"
            >
              <span 
                className="material-symbols-outlined text-primary text-[48px] mb-8 block"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {service.icon}
              </span>
              <h4 className="font-headline-md text-headline-md mb-4">
                {service.title}
              </h4>
              <p className="text-on-secondary-fixed-variant font-body-md">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
