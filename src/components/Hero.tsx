import { ArrowRight } from "lucide-react";
import profilePhoto from "@/assets/SB_Profil2.png";

const chips = ["Product", "Automation & IA", "Customer Experience"];

export function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center section pt-28 md:pt-32 lg:pt-28">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-start">
          {/* Left column - All content */}
          <div className="order-2 lg:order-1">
            {/* H1 */}
            <h1 className="text-h1 mb-2 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Simon Babou
            </h1>

            {/* Subtitle */}
            <p className="text-h3 text-accent font-semibold mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Product Owner
            </p>

            {/* Paragraph */}
            <p
              className="text-body md:text-h3 font-normal text-muted-foreground max-w-2xl mb-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Product Owner avec plus de 5 ans d'expérience, notamment au sein du groupe Allianz.
              <br /><br />
              J'accompagne la conception et le développement de produits digitaux centrés utilisateurs (espaces clients, applications, parcours self-care), ainsi que la simplification et l'automatisation des processus métiers, avec une approche orientée efficacité et ROI.
            </p>

            {/* Chips */}
            <div
              className="flex flex-wrap gap-2 mb-8 opacity-0 animate-fade-in-up justify-center md:justify-start"
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
              className="flex flex-wrap gap-3 opacity-0 animate-fade-in-up justify-center md:justify-start"
              style={{ animationDelay: "0.4s" }}
            >
              <a href="#contact" className="btn-primary">
                Parlons de votre projet
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://calendly.com/simonbabouhot-pro/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                📅 Prendre rendez-vous
              </a>
            </div>
          </div>

          {/* Right column - Photo only (no name/title to avoid duplication) */}
          <div className="flex flex-col items-center order-1 lg:order-2 lg:mt-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-surface-2 border-2 border-border flex items-center justify-center overflow-hidden shadow-lg">
              <img 
                src={profilePhoto} 
                alt="Simon Babou - Product Owner" 
                className="w-full h-full object-cover"
              />
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
