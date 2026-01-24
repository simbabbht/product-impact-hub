import { MapPin, Bot, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const locations = ['Nouvelle-Calédonie', 'France', 'Australie', 'Nouvelle-Zélande'];

export function Freelance() {
  return (
    <section id="core-studio" className="section">
      <div className="container-custom">
        <div className="w-full max-w-3xl mx-auto text-center px-0">
          {/* Location chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {locations.map((location) => (
              <div key={location} className="inline-flex items-center gap-2 chip">
                <MapPin className="w-4 h-4" />
                {location}
              </div>
            ))}
          </div>

          {/* Title with Freelance highlighted */}
          <h2 className="text-h2 mb-4">
            <span className="text-accent">Freelance</span> — Core Studio
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground max-w-xl mx-auto mb-4">
            Basé entre la France et la Nouvelle-Calédonie, je propose des missions sur place ou à distance 
            en product management, automatisation & IA.
          </p>

          {/* CTA micro-line */}
          <p className="text-small text-muted-foreground mb-6">
            Pour en savoir plus : accéder à Core Studio.
          </p>

          {/* Core Studio clickable badge */}
          <Link 
            to="/core-studio"
            className="inline-flex items-center gap-3 glass-card px-5 py-3 hover:border-accent/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background group"
          >
            <Bot className="w-6 h-6 text-accent" />
            <div className="text-left">
              <span className="text-body font-semibold block">Core Studio</span>
              <span className="text-xs text-muted-foreground">Product · Automation · IA (pragmatique)</span>
            </div>
            <ArrowRight className="w-4 h-4 text-accent ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
