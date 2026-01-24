import { ArrowRight, Calendar } from "lucide-react";

const chips = ["+200k utilisateurs", "Discovery + Delivery", "UX & coordination"];

export function Hero() {
  return (
    <section id="hero" className="min-h-[85vh] flex items-center justify-center section pt-[120px]">
      <div className="container-custom text-center">
        {/* Main heading */}
        <h1 className="text-h1 mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Product Owner — Créer des expériences simples et <span className="gradient-text">utiles.</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-body md:text-h3 font-normal text-muted-foreground max-w-3xl mx-auto mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Je suis Simon, Product Owner pour le groupe Allianz. Je pilote l'ensemble de l'Espace client (env. 200K
          utilisateurs). En parallèle, je travaille sur des projets autour de l'automatisation et de l'IA.
        </p>

        {/* Chips */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-8 opacity-0 animate-fade-in-up"
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
          className="flex flex-wrap justify-center gap-3 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a href="#contact" className="btn-primary">
            Me contacter
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            <Calendar className="w-4 h-4" />
            Réserver 15 min
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 opacity-0 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="w-6 h-10 mx-auto border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
