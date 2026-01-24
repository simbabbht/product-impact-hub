import { Globe, Workflow, MapPin, Bot } from 'lucide-react';

const locations = ['Nouvelle-Calédonie', 'France', 'Australie & Nouvelle-Zélande'];

const offers = [
  {
    icon: Globe,
    title: 'PO/AMOA',
    description: 'Cadrage, specs, suivi delivery sur vos projets digitaux.',
  },
  {
    icon: Workflow,
    title: 'Automatisation de process',
    description: 'Workflows, no-code, optimisation des tâches répétitives & IA.',
  },
];

export function Freelance() {
  return (
    <section id="freelance" className="section">
      <div className="container-custom">
        <div className="grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start">
          {/* Left column - Mascot */}
          <div className="flex justify-center lg:justify-start order-1 lg:order-1">
            <div className="glass-card p-6 w-48 h-48 md:w-56 md:h-56 flex items-center justify-center">
              <img 
                src="/images/core-studio-mascot.png" 
                alt="Mascotte 3D Core Studio"
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = '<div class="flex flex-col items-center justify-center text-muted-foreground"><svg class="w-16 h-16 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="8" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><path d="M12 3v1M18.36 5.64l-.71.71M21 12h-1M18.36 18.36l-.71-.71M12 21v-1M5.64 18.36l.71-.71M3 12h1M5.64 5.64l.71.71"/></svg><span class="text-small">Mascotte 3D</span></div>';
                }}
              />
            </div>
          </div>

          {/* Right column - Content */}
          <div className="order-2 lg:order-2">
            <div className="text-center lg:text-left mb-8">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-4">
                {locations.map((location) => (
                  <div key={location} className="inline-flex items-center gap-2 chip">
                    <MapPin className="w-4 h-4" />
                    {location}
                  </div>
                ))}
              </div>

              <h2 className="text-h2 mb-3">Disponible pour des missions freelance — Core Studio</h2>
              
              <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-4">
                Basé entre la France et la Nouvelle-Calédonie, je propose des missions sur place ou à distance 
                en product management, automatisation & IA.
              </p>

              {/* Core Studio badge */}
              <div className="inline-flex items-center gap-3 glass-card px-4 py-2 mb-6">
                <Bot className="w-5 h-5 text-accent" />
                <div className="text-left">
                  <span className="text-small font-semibold block">Core Studio</span>
                  <span className="text-xs text-muted-foreground">Product · Automation · IA (pragmatique)</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
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
        </div>
      </div>
    </section>
  );
}
