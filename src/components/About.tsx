import { useState } from 'react';
import { Bike, Dumbbell, Palette, Crown, Music, X, ExternalLink } from 'lucide-react';

interface HobbyData {
  icon: typeof Bike;
  label: string;
  images: string[];
  links: { label: string; url: string }[];
}

const hobbies: HobbyData[] = [
  { 
    icon: Bike, 
    label: 'Triathlon / Vélo / Running',
    images: ['/placeholder.svg', '/placeholder.svg'],
    links: [
      { label: 'Mon profil Strava', url: 'https://strava.com' },
    ],
  },
  { 
    icon: Dumbbell, 
    label: 'Musculation',
    images: ['/placeholder.svg', '/placeholder.svg'],
    links: [
      { label: 'Programme d\'entraînement', url: '#' },
    ],
  },
  { 
    icon: Palette, 
    label: 'Design & cultures',
    images: ['/placeholder.svg', '/placeholder.svg'],
    links: [
      { label: 'Mon Pinterest', url: 'https://pinterest.com' },
      { label: 'Dribbble likes', url: 'https://dribbble.com' },
    ],
  },
  { 
    icon: Crown, 
    label: 'Échecs',
    images: ['/placeholder.svg', '/placeholder.svg'],
    links: [
      { label: 'Mon profil Chess.com', url: 'https://chess.com' },
    ],
  },
  { 
    icon: Music, 
    label: 'Musique',
    images: ['/placeholder.svg', '/placeholder.svg'],
    links: [
      { label: 'Ma playlist Spotify', url: 'https://spotify.com' },
      { label: 'Last.fm', url: 'https://last.fm' },
    ],
  },
];

export function About() {
  const [expandedHobby, setExpandedHobby] = useState<string | null>(null);

  const handleHobbyClick = (label: string) => {
    setExpandedHobby(expandedHobby === label ? null : label);
  };

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

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {hobbies.map((hobby) => (
              <button 
                key={hobby.label}
                onClick={() => handleHobbyClick(hobby.label)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-small cursor-pointer transition-all duration-300 ${
                  expandedHobby === hobby.label 
                    ? 'bg-accent text-accent-foreground border-accent' 
                    : 'bg-surface border-border hover:border-accent/50 hover:bg-accent-muted'
                }`}
              >
                <hobby.icon className="w-4 h-4" />
                <span>{hobby.label}</span>
              </button>
            ))}
          </div>

          {/* Expanded hobby content */}
          {expandedHobby && (
            <div className="glass-card p-6 animate-fade-in-up relative">
              <button 
                onClick={() => setExpandedHobby(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              {hobbies.filter(h => h.label === expandedHobby).map((hobby) => (
                <div key={hobby.label}>
                  <h3 className="text-h3 mb-4 flex items-center justify-center gap-2">
                    <hobby.icon className="w-5 h-5 text-accent" />
                    {hobby.label}
                  </h3>

                  {/* Images grid */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                    {hobby.images.map((img, idx) => (
                      <div key={idx} className="aspect-square rounded-lg overflow-hidden border border-border">
                        <img 
                          src={img} 
                          alt={`${hobby.label} ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {hobby.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-small text-accent hover:text-accent/80 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
