import { Building2, Users, ArrowUpRight } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <h2 className="text-h2 text-center mb-10">Expérience</h2>

        <div className="glass-card p-6 md:p-8 max-w-2xl mx-auto">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent-muted flex items-center justify-center flex-shrink-0">
              <Building2 className="w-6 h-6 text-accent" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-h3">Allianz</h3>
                <span className="text-small text-muted-foreground">— Product Owner</span>
              </div>
              
              <p className="text-muted-foreground text-small mb-4">
                Espace Client Digital
              </p>

              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-small">
                  <Users className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Produit à forte audience (+200k utilisateurs actifs)</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <ArrowUpRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Coordination métier / tech / design sur features critiques</span>
                </li>
                <li className="flex items-start gap-2 text-small">
                  <ArrowUpRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Amélioration continue des parcours utilisateurs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
