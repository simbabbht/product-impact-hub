import { ArrowRight, Calendar } from "lucide-react";
import profilePhoto from "@/assets/SB_Profil2.png";

const chips = ["Product", "Automation & IA", "Customer Experience"];

export function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center section pt-[120px]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">
          {/* Left column - All content */}
          <div className="order-2 lg:order-1">
            {/* H1 */}
            <h1 className="text-h1 mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Créer des expériences simples et <span className="gradient-text">utiles.</span>
            </h1>

            {/* Paragraph */}
            <p
              className="text-body md:text-h3 font-normal text-muted-foreground max-w-2xl mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Je suis Simon, Product Owner pour le groupe Allianz. Je pilote l'ensemble de l'espace client (environ 200K utilisateurs). En parallèle, je travaille sur des projets autour de l'automatisation et de l'IA.
            </p>

            {/* Chips */}
            <div
              className="flex flex-wrap gap-2 mb-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              {chips.map((chip) => (
                <span key={chip} className="chip">
                  {chip}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a href="#contact" className="btn-primary">
                Me contacter
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://calendly.com/simonbabouhot-pro/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Calendar className="w-4 h-4" />
                Prendre rendez-vous
              </a>
            </div>
          </div>

          {/* Right column - Photo only */}
          <div className="flex flex-col items-center order-1 lg:order-2 lg:mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-surface-2 border-2 border-border flex items-center justify-center overflow-hidden mb-4 shadow-lg">
              <img 
                src={profilePhoto} 
                alt="Simon Babouot - Product Owner" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-body font-semibold">Simon Babouot</p>
            <p className="text-muted-foreground text-small">Product Owner</p>
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
