import { FileText, LayoutDashboard, Folder, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    icon: FileText,
    slug: 'optimisation-parcours-sinistre',
    title: 'Optimisation parcours sinistre',
    context: 'Simplification du parcours de déclaration pour les clients.',
    role: [
      'Cadrage des irritants via discovery',
      'Priorisation avec métier & tech',
      'Suivi delivery jusqu\'à production',
    ],
    impact: 'Réduction du temps moyen de déclaration, meilleure satisfaction client.',
  },
  {
    icon: LayoutDashboard,
    slug: 'refonte-onboarding',
    title: 'Refonte onboarding',
    context: 'Modernisation de l\'expérience d\'inscription nouveaux clients.',
    role: [
      'Mapping du parcours actuel',
      'Ateliers UX avec design',
      'Tests utilisateurs itératifs',
    ],
    impact: 'Augmentation du taux de complétion du parcours.',
  },
  {
    icon: Folder,
    slug: 'amelioration-espace-documents',
    title: 'Amélioration espace documents',
    context: 'Centralisation et accès simplifié aux documents clients.',
    role: [
      'Analyse des besoins utilisateurs',
      'Définition des specs fonctionnelles',
      'Coordination équipe dev',
    ],
    impact: 'Réduction des appels au support, meilleure autonomie client.',
  },
];

export function Projects() {
  return (
    <section id="projets" className="section bg-surface-2/30">
      <div className="container-custom">
        <h2 className="text-h2 text-center mb-10">Projets sélectionnés</h2>

        <div className="grid md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-card p-6 hover:border-accent/30 transition-all duration-300 opacity-0 animate-fade-in-up group flex flex-col"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <project.icon className="w-5 h-5 text-accent" />
              </div>
              
              <h3 className="text-h3 mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-small mb-4">{project.context}</p>
              
              <ul className="space-y-1 mb-4">
                {project.role.map((item) => (
                  <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-3 border-t border-border mb-4">
                <p className="text-xs text-accent font-medium">{project.impact}</p>
              </div>

              <div className="mt-auto">
                <Link 
                  to={`/projet/${project.slug}`}
                  className="inline-flex items-center gap-2 text-small font-medium text-accent hover:text-accent/80 transition-colors"
                >
                  Voir le projet
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
