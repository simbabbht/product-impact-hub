import { Building2, ArrowRight, TrendingUp, Calendar, Target, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const experiences = [
  {
    title: 'Allianz France',
    role: 'Product Owner, Espace Client digital',
    period: 'Depuis 2021',
    highlights: [
      { text: '+200K utilisateurs' },
      { text: 'Backlog & priorisation : cadrage des besoins clients, arbitrages avec métier / IT, animation en agile' },
      { text: 'Delivery end-to-end : user stories, suivi dev, recette/UAT, déploiement & release' },
      { text: 'Mesure & amélioration continue : tests utilisateurs + dashboards KPI pour piloter la performance' },
    ],
    relatedProjects: [
      { label: "Moderniser et harmoniser l'Espace Client — une refonte à fort enjeu d'adoption", href: '/work/refonte-home-espace-client' },
      { label: "Optimiser la déclaration de sinistre en ligne — moins de friction, plus d'autonomie", href: '/work/declaration-sinistre-en-ligne' },
    ],
  },
  {
    title: 'Allianz France',
    role: 'Business Developer, Affiliation & E-partenariat',
    period: '2020–2021',
    highlights: [
      { text: "Campagnes d'acquisition : display, affiliation, emailing, SEA" },
      { text: 'Pilotage performance : analyse, optimisation continue et reporting' },
      { text: 'Refonte des communications : kits & assets de campagne' },
    ],
    results: [
      '+130 000 leads/an',
      '+100 campagnes',
      '+3 partenariats stratégiques',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <h2 className="text-h2 text-center mb-10">Expériences</h2>

        <div className="flex flex-col gap-4 w-full max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={exp.role} 
              className="glass-card p-4 sm:p-6 w-full opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent-muted flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                  <Building2 className="w-6 h-6 text-accent" />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row flex-wrap items-center sm:items-start gap-1 sm:gap-2 mb-1">
                    <h3 className="text-h3">{exp.title}</h3>
                    <span className="text-small text-muted-foreground">— {exp.role}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs text-accent">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Two-column layout on desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                {/* Left column: Missions */}
                <div className="lg:col-span-3">
                  <ul className="space-y-2 w-full">
                    {exp.highlights.map((item) => (
                      <li key={item.text} className="flex items-start gap-2 text-small w-full">
                        <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0 hidden md:block" />
                        <span className="w-full break-words">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right column: Results + Projects */}
                <div className="lg:col-span-2 flex flex-col gap-3">
                  {exp.results && (
                    <div className="pt-3 lg:pt-0 border-t lg:border-t-0 lg:border-l border-border lg:pl-4">
                      <div className="flex items-center gap-2 mb-2 justify-center lg:justify-start">
                        <Target className="w-4 h-4 text-accent" />
                        <span className="text-small font-semibold">Résultats</span>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                        {exp.results.map((result) => (
                          <span key={result} className="chip text-xs">
                            {result}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {exp.relatedProjects && (
                    <div className="pt-3 lg:pt-0 border-t lg:border-t-0 lg:border-l border-border lg:pl-4">
                      <div className="flex items-center gap-2 mb-2 justify-center lg:justify-start">
                        <FolderOpen className="w-4 h-4 text-accent" />
                        <span className="text-small font-semibold">Projets liés</span>
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        {exp.relatedProjects.map((project) => (
                          <Link
                            key={project.href}
                            to={project.href}
                            className="flex items-start gap-1 text-small text-accent hover:text-accent/80 transition-colors w-full break-words"
                          >
                            <ArrowRight className="w-3 h-3 flex-shrink-0 mt-0.5" />
                            <span className="break-words">{project.label}</span>
                          </Link>
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
