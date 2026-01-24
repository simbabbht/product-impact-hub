const skills = [
  'Vision Produit',
  'Discovery & Delivery',
  'Priorisation stratégique',
  'Design UX/UI (Figma)',
  'Automatisation & IA',
  'Analyse & KPIs',
  'Agilité & collaboration équipe',
  'Pilotage roadmap',
  'Coordination inter-projets',
];

export function Skills() {
  return (
    <section id="competences" className="section py-12 bg-surface-2/30">
      <div className="container-custom">
        <h2 className="text-h2 text-center mb-6">Compétences</h2>

        <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <span 
              key={skill}
              className="px-4 py-2 rounded-full bg-surface border border-border text-small font-medium hover:border-accent/50 hover:bg-accent-muted transition-all duration-200 cursor-default opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
