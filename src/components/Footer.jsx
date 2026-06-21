import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { name } = portfolioData.personal;
  const { socials } = portfolioData;

  return (
    <footer className="bg-background border-t border-outline-variant/20 py-8 md:py-10">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center px-margin-desktop gap-gutter">
        <div className="font-display-lg text-body-lg text-on-surface mb-4 md:mb-0">
          {name}
        </div>
        
        <div className="flex gap-8">
          {socials.map((social, index) => (
            <a 
              key={index}
              className="font-label-caps text-label-caps text-on-secondary-fixed-variant hover:text-primary transition-colors"
              href={social.href}
            >
              {social.name}
            </a>
          ))}
        </div>

        <p className="font-label-caps text-label-caps text-on-secondary-fixed-variant mt-8 md:mt-0">
          © 2024 Ella Lureen C. Calugay. Crafted with precision.
        </p>
      </div>
    </footer>
  );
}
