import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const projects = portfolioData.projects;

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`glass-panel group overflow-hidden relative ${index === 1 ? 'lg:translate-y-12' : ''}`}
            >
              <div className="aspect-[4/5] relative">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" 
                  data-alt={project.imageAlt}
                  src={project.imageUrl}
                  alt={project.title}
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
    </section>
  );
}
