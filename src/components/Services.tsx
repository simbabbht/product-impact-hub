import { Target, Layers, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Cadrage & vision produit',
    description: 'Clarifier les objectifs, définir le MVP, construire une roadmap réaliste.',
  },
  {
    icon: Layers,
    title: 'Pilotage delivery',
    description: 'Gestion du backlog, rituels agiles, suivi release, assurance qualité.',
  },
  {
    icon: TrendingUp,
    title: 'Expérience & adoption',
    description: 'Optimiser les parcours, réduire les frictions, mesurer l\'impact via KPI.',
  },
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container-custom">
        <h2 className="text-h2 text-center mb-10">Ce que je fais</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glass-card p-6 hover:border-accent/30 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent-muted flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-h3 mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-small">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
