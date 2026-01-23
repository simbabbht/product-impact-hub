import { Bike, Dumbbell, Palette, Crown } from 'lucide-react';

const hobbies = [
  { icon: Bike, label: 'Triathlon / Vélo / Running' },
  { icon: Dumbbell, label: 'Musculation' },
  { icon: Palette, label: 'Design & cultures' },
  { icon: Crown, label: 'Échecs' },
];

export function About() {
  return (
    <section id="about" className="section bg-surface-2/30">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-h2 mb-6">À propos</h2>
          
          <p className="text-muted-foreground mb-8">
            Passionné par le produit digital et l'efficacité. 
            Quand je ne suis pas sur un backlog, vous me trouverez sur un vélo, 
            devant un échiquier ou à explorer de nouveaux designs.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {hobbies.map((hobby) => (
              <div 
                key={hobby.label}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-border text-small"
              >
                <hobby.icon className="w-4 h-4 text-accent" />
                <span>{hobby.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
