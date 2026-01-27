import { Target, Layers, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Target,
    title: 'Cadrage & stratégie produit',
    description: 'Transformer un besoin flou en vision claire, MVP et roadmap réaliste.',
    bullets: ['Discovery (interviews, irritants, data)', 'Story mapping & priorisation', 'Alignement stakeholders'],
  },
  {
    icon: Layers,
    title: 'Delivery & qualité d\'exécution',
    description: 'Piloter la livraison de bout en bout, sans surprise : backlog, dépendances, recette, release.',
    bullets: ['Scrum / rituels & synchronisation', 'User stories + critères d\'acceptance', 'QA, UAT, suivi post-prod'],
  },
  {
    icon: TrendingUp,
    title: 'Adoption & impact mesuré',
    description: 'Réduire la friction, augmenter l\'autonomie, et prouver l\'impact via KPI.',
    bullets: ['Optimisation parcours & accessibilité', 'KPI / dashboards & itérations', 'Boucle feedback → amélioration continue'],
  },
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container-custom">
        <h2 className="text-h2 text-center mb-10">Mes services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glass-card p-4 sm:p-6 w-full hover:border-accent/30 transition-all duration-300 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent-muted flex items-center justify-center mb-4 mx-auto md:mx-0">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-h3 mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-small mb-3">{service.description}</p>
              <ul className="space-y-1">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="text-muted-foreground text-small flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
