import { MapPin, Briefcase, Bot, ArrowRight, GraduationCap } from 'lucide-react';

const locations = ['Nouvelle-Calédonie', 'France'];

const productItems = [
  { title: 'Cadrage stratégique', desc: 'Vision, objectifs, alignement des parties prenantes' },
  { title: 'Delivery end-to-end', desc: 'Backlog, user stories, recette UAT, release' },
  { title: 'Pilotage de la performance', desc: 'KPI, data visualisation, adoption et autonomie' },
];

const automationItems = [
  { title: 'Audit des processus métiers', desc: 'Analyse des flux existants et identification des points de friction' },
  { title: 'Workflows automatisés', desc: 'Mise en place d\'automatisations fiables et adaptées aux usages réels' },
  { title: 'Approche orientée ROI', desc: 'Optimisation du temps et des coûts, principalement pour les PME' },
];

export function Freelance() {
  return (
    <section id="accompagnement" className="section bg-surface-2/30">
      <div className="container-custom">
        <div className="w-full max-w-4xl mx-auto text-center px-0">
          {/* Location chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {locations.map((location) => (
              <div key={location} className="inline-flex items-center gap-2 chip">
                <MapPin className="w-4 h-4" />
                {location}
              </div>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-h2 mb-4">Mon accompagnement</h2>
          
          {/* Introduction */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Basé entre la Nouvelle-Calédonie et la France, j'accompagne des équipes sur site ou à distance 
            autour de deux expertises complémentaires : Product Management et Automation & IA.
          </p>

          {/* Two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Product Management Card */}
            <div className="glass-card p-6 text-left hover:border-accent/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              
              <h3 className="text-h3 mb-4 text-center md:text-left">Product Management</h3>
              
              <div className="space-y-4 mb-6">
                {productItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-accent mt-1">→</span>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-small text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center md:justify-start">
                <a 
                  href="/product-owner"
                  className="inline-flex items-center justify-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group w-full md:w-auto"
                >
                  Découvrir l'accompagnement Product
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Automation & IA Card */}
            <div className="glass-card p-6 text-left hover:border-accent/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Bot className="w-6 h-6 text-accent" />
              </div>
              
              <h3 className="text-h3 mb-4 text-center md:text-left">Automation & IA</h3>
              
              <div className="space-y-4 mb-4">
                {automationItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-accent mt-1">→</span>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-small text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Badge formation */}
              <div className="flex justify-center md:justify-start">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-xs text-accent mb-4">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Formation avancée Automation & IA — Le Wagon
                </div>
              </div>
              
              <div className="flex justify-center md:justify-start">
                <a 
                  href="/ops-builder"
                  className="inline-flex items-center justify-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors group w-full md:w-auto"
                >
                  Découvrir l'offre Automation & IA
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
