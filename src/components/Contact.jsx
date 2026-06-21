import { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { email, location, personal } = portfolioData;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="pt-stack-lg pb-16 px-margin-mobile md:px-margin-desktop bg-surface" id="contact">
      <div className="max-w-container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-stack-md">
          {/* Contact Info */}
          <div>
            <h2 className="font-label-caps text-label-caps text-primary mb-6">
              GET IN TOUCH
            </h2>
            <h3 className="font-display-lg text-headline-md mb-8">
              Let's build the future together.
            </h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
              I'm always open to discussing innovative projects or freelance opportunities. Feel free to reach out via the form or my social handles.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-on-surface hover:text-primary transition-colors cursor-pointer group">
                <span 
                  className="material-symbols-outlined text-primary border border-primary/20 p-2 group-hover:bg-primary/10"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  mail
                </span>
                <span className="font-label-caps text-label-caps">
                  {portfolioData.personal.email}
                </span>
              </div>
              <div className="flex items-center gap-4 text-on-surface hover:text-primary transition-colors cursor-pointer group">
                <span 
                  className="material-symbols-outlined text-primary border border-primary/20 p-2 group-hover:bg-primary/10"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  near_me
                </span>
                <span className="font-label-caps text-label-caps">
                  {portfolioData.personal.location}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-10 neon-border">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input 
                  className="w-full bg-transparent border-0 border-b border-outline-variant/30 text-on-surface font-label-caps text-label-caps py-4 focus:ring-0 focus:border-primary transition-all placeholder:text-on-secondary-fixed-variant"
                  placeholder="YOUR NAME"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <input 
                  className="w-full bg-transparent border-0 border-b border-outline-variant/30 text-on-surface font-label-caps text-label-caps py-4 focus:ring-0 focus:border-primary transition-all placeholder:text-on-secondary-fixed-variant"
                  placeholder="YOUR EMAIL"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="relative">
                <textarea 
                  className="w-full bg-transparent border-0 border-b border-outline-variant/30 text-on-surface font-label-caps text-label-caps py-4 focus:ring-0 focus:border-primary transition-all placeholder:text-on-secondary-fixed-variant resize-none"
                  placeholder="TELL ME ABOUT YOUR PROJECT"
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-primary/10 border border-primary text-primary font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all tracking-[0.3em] uppercase"
              >
                Initialize Project
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
