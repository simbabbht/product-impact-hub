import { Globe, Workflow, LayoutTemplate, MapPin } from 'lucide-react';

const locations = ['Nouvelle-Calédonie', 'France', 'Australie & Nouvelle-Zélande'];

const offers = [
  {
    icon: Globe,
    title: 'PO / AMOA digital',
    description: 'Cadrage, specs, suivi delivery sur vos projets digitaux.',
  },
  {
    icon: Workflow,
    title: 'Automatisation de process',
    description: 'Workflows, no-code, optimisation des tâches répétitives.',
  },
  {
    icon: LayoutTemplate,
    title: 'Organisation produit',
    description: 'Rituels, templates, dashboards pour structurer vos équipes.',
  },
];

export function Freelance() {
  return (
    <section id="freelance" className="section">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {locations.map((location) => (
              <div key={location} className="inline-flex items-center gap-2 chip">
                <MapPin className="w-4 h-4" />
                {location}
              </div>
            ))}
          </div>
          <h2 className="text-h2 mb-3">Disponible pour des missions freelance</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Basé en Nouvelle-Calédonie, je propose des missions à distance 
            en product management et automatisation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {offers.map((offer) => (
            <div 
              key={offer.title}
              className="glass-card p-6 text-center hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center mx-auto mb-4">
                <offer.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-body font-semibold mb-2">{offer.title}</h3>
              <p className="text-small text-muted-foreground">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
