import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { sectionLabel, title, paragraphs, stats } = portfolioData.about;

  return (
    <section className="py-stack-lg px-margin-mobile md:px-margin-desktop bg-surface-container-lowest/50" id="expertise">
      <div className="max-w-container-max mx-auto">
        <div className="grid md:grid-cols-12 gap-gutter">
          {/* Left Column */}
          <div className="md:col-span-5">
            <h2 className="font-label-caps text-label-caps text-primary mb-6">
              {sectionLabel}
            </h2>
            <h3 className="font-display-lg-mobile md:font-display-lg text-headline-md md:text-headline-md mb-8">
              {title}
            </h3>
          </div>

          {/* Right Column */}
          <div className="md:col-span-7 space-y-6">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {paragraph.includes('Polytechnic University of the Philippines') ? (
                  <>
                    {paragraph.split('Polytechnic University of the Philippines')[0]}
                    <span className="text-on-surface font-bold">Polytechnic University of the Philippines</span>
                    {paragraph.split('Polytechnic University of the Philippines')[1]}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-primary font-display-lg text-headline-md">
                    {stat.number}
                  </div>
                  <div className="font-label-caps text-label-caps text-on-secondary-fixed-variant uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
