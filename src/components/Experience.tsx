import { Building2, Users, ArrowUpRight, TrendingUp, Calendar, Target } from 'lucide-react';

const experiences = [
  {
    title: 'Allianz',
    role: 'Product Owner, espace client digital',
    subtitle: 'Espace Client Digital',
    period: 'Depuis 2021',
    highlights: [
      { icon: Users, text: 'Produit à forte audience (+200k utilisateurs actifs)' },
      { icon: ArrowUpRight, text: 'Coordination métier / tech / design sur features critiques' },
      { icon: ArrowUpRight, text: 'Amélioration continue des parcours utilisateurs' },
    ],
  },
  {
    title: 'Allianz',
    role: 'Business Developer, affiliation & e-partenariat',
    subtitle: 'Acquisition Marketing',
    period: '2020–2021',
    highlights: [
      { icon: TrendingUp, text: 'Acquisition via display, affiliation, emailing' },
      { icon: Users, text: '+200 000 leads/an générés' },
      { icon: ArrowUpRight, text: '+100 campagnes marketing pilotées' },
    ],
    results: [
      '+200 000 leads/an',
      '+100 campagnes',
      'Display, affiliation, emailing',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <h2 className="text-h2 text-center mb-10">Expérience</h2>

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.role} 
              className="glass-card p-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent-muted flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-h3">{exp.title}</h3>
                    <span className="text-small text-muted-foreground">— {exp.role}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs text-accent">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((item) => (
                      <li key={item.text} className="flex items-start gap-2 text-small">
                        <item.icon className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>

                  {exp.results && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <Target className="w-4 h-4 text-accent" />
                        <span className="text-small font-semibold">Résultats</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {exp.results.map((result) => (
                          <span key={result} className="chip text-xs">
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
