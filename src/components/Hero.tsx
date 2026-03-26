import { ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/SB_Profil2.png";
import { useLanguage } from '@/components/LanguageProvider';

const chips = ["Transformation digitale", "Expérience client & collaborateur", "Product & Ops"];

export function Hero() {
  const { t } = useLanguage();

  const descriptionLines = t('hero.description').split('\n\n');

  return (
    <section id="hero" className="min-h-[85vh] flex items-center section pt-32 md:pt-36 lg:pt-32">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="order-2 lg:order-1">
            <h1 className="text-h1 mb-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {t('hero.title')}
            </h1>

            <p className="text-h3 text-accent font-semibold mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              {t('hero.subtitle')}
            </p>

            <div
              className="text-small md:text-body font-normal text-muted-foreground max-w-2xl mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {descriptionLines.map((line, i) => (
                <p key={i} className={i > 0 ? 'mt-4' : ''}>{line}</p>
              ))}
            </div>

            {/* Chips */}
            <div
              className="flex flex-wrap gap-2 mb-8 opacity-0 animate-fade-in-up justify-center md:justify-start"
              style={{ animationDelay: "0.3s" }}
            >
              {chips.map((chip) => (
                <span key={chip} className="chip">{chip}</span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up justify-center md:justify-start"
              style={{ animationDelay: "0.4s" }}
            >
              <a href="#contact" className="btn-primary">
                {t('hero.cta.contact')}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://calendly.com/simonbabouhot-pro/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                📅 {t('hero.cta.appointment')}
              </a>
            </div>
          </div>

          {/* Right column - Photo */}
          <div className="flex flex-col items-center order-1 lg:order-2 lg:mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-surface-2 border-2 border-border flex items-center justify-center overflow-hidden shadow-lg">
              <img src={profilePhoto} alt="Simon Babouhot - Product Owner" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 opacity-0 animate-fade-in text-center" style={{ animationDelay: "0.6s" }}>
          <div className="w-6 h-10 mx-auto border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
