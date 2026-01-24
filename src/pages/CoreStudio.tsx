import { Globe, Workflow, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const offers = [
  {
    icon: Globe,
    title: 'PO/AMOA',
    description: 'Cadrage, specs, suivi delivery sur vos projets digitaux.',
    details: [
      'Cadrage des besoins & définition du périmètre',
      'Rédaction des user stories & spécifications',
      'Coordination équipes dev & suivi delivery',
      'Recette, UAT, déploiement',
    ],
  },
  {
    icon: Workflow,
    title: 'Automatisation de process',
    description: 'Workflows, no-code, optimisation des tâches répétitives & IA.',
    details: [
      'Audit des processus existants',
      'Mise en place de workflows automatisés',
      'Intégration d\'outils no-code / low-code',
      'Optimisation via IA pragmatique',
    ],
  },
];

export default function CoreStudio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-6 border-b border-border/50">
        <div className="container-custom">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="container-custom">
          {/* Hero */}
          <div className="max-w-2xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 chip mb-6">
              <span className="text-accent font-semibold">Core Studio</span>
            </div>
            
            <h1 className="text-h1 mb-6">Core Studio</h1>
            
            <p className="text-body text-muted-foreground">
              Offre freelance en product management, automatisation & IA.
            </p>
          </div>

          {/* Offers */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
            {offers.map((offer) => (
              <div 
                key={offer.title}
                className="glass-card p-8 hover:border-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center mb-6">
                  <offer.icon className="w-6 h-6 text-accent" />
                </div>
                
                <h2 className="text-h3 mb-3">{offer.title}</h2>
                <p className="text-muted-foreground text-small mb-6">{offer.description}</p>
                
                <ul className="space-y-2">
                  {offer.details.map((detail) => (
                    <li key={detail} className="text-small text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <a 
              href="/#contact" 
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Me contacter
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
