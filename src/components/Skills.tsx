const hardSkills = [
  'Agile / Scrum',
  'Backlog & user stories',
  'UX/UI (Figma)',
  'Jira / Confluence',
  'Data visualisation (Power BI)',
  'Recette & UAT',
];

const softSkills = [
  'Leadership collaboratif',
  'Communication claire',
  'Adaptabilité',
  'Curiosité & apprentissage',
];

export function Skills() {
  return (
    <section id="competences" className="section py-12 bg-surface-2/30">
      <div className="container-custom">
        <h2 className="text-h2 text-center mb-6">Compétences</h2>

        <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {/* Hard Skills */}
          <div className="glass-card p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-h3 mb-4 text-center">Hard skills</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {hardSkills.map((skill, index) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-full bg-surface border border-border text-small font-medium hover:border-accent/50 hover:bg-accent-muted transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass-card p-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-h3 mb-4 text-center">Soft skills</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {softSkills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 rounded-full bg-surface border border-border text-small font-medium hover:border-accent/50 hover:bg-accent-muted transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
              {/* Easter egg chip */}
              <span 
                className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-small font-medium hover:border-accent/50 hover:bg-accent/15 transition-all duration-200 cursor-default"
              >
                Always smiling 🙂
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
