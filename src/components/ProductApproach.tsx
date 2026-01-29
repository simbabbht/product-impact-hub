import { Target, Layers, TrendingUp } from 'lucide-react';

const approachBlocks = [
  {
    icon: Target,
    title: 'Stratégie & cadrage',
    description: 'Vision, objectifs, priorisation, alignement stakeholders',
  },
  {
    icon: Layers,
    title: 'Delivery end-to-end',
    description: 'Backlog, user stories, agile, recette/UAT, release & suivi',
  },
  {
    icon: TrendingUp,
    title: 'Impact & amélioration',
    description: 'KPI, frictions, itérations, adoption & autonomie',
  },
];

const skills = [
  'Agile / Scrum',
  'Backlog & User Stories',
  'UX/UI (Figma)',
  'Jira / Confluence',
  'Data & KPI',
  'Recette & UAT',
  'Leadership collaboratif',
  'Communication claire',
  'Adaptabilité',
];

export function ProductApproach() {
  return (
    <section id="approche" className="section py-12 bg-surface-2/30">
      <div className="container-custom">
        <h2 className="text-h2 text-center mb-8">Mon approche produit</h2>

        {/* Approach blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto mb-8">
          {approachBlocks.map((block, index) => (
            <div
              key={block.title}
              className="glass-card p-4 sm:p-5 w-full hover:border-accent/30 transition-all duration-300 opacity-0 animate-fade-in-up text-center"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-lg bg-accent-muted flex items-center justify-center mb-3 mx-auto">
                <block.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-body font-semibold mb-1">{block.title}</h3>
              <p className="text-muted-foreground text-small">{block.description}</p>
            </div>
          ))}
        </div>

        {/* Unified skills chips */}
        <div className="glass-card p-4 w-full max-w-3xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded-full bg-surface border border-border text-xs font-medium hover:border-accent/50 hover:bg-accent-muted transition-all duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
            {/* Easter egg chip */}
            <span
              className="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/30 text-xs font-medium hover:border-accent/50 hover:bg-accent/15 transition-all duration-200 cursor-default"
            >
              Always smiling 🙂
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
