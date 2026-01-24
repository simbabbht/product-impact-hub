import { useState } from 'react';
import { Dumbbell, Music as MusicIcon, Sparkles, X, ExternalLink } from 'lucide-react';
import albumLZ from '@/assets/hobbies/LZ.jpg';
import albumRHCP from '@/assets/hobbies/RHCP.jpg';
import albumOcean from '@/assets/hobbies/OCEAN.jpg';

interface AlbumCover {
  src: string;
  alt: string;
  label: string;
}

interface HobbyData {
  icon: typeof Dumbbell;
  label: string;
  content: {
    title: string;
    images?: string[];
    links?: { label: string; url: string }[];
    text?: string;
    list?: string[];
    albums?: AlbumCover[];
  };
}

const hobbies: HobbyData[] = [
  { 
    icon: Dumbbell, 
    label: 'Sport',
    content: {
      title: 'Sport',
      images: ['/images/hobbies-sport-1.jpg', '/images/hobbies-sport-2.jpg'],
      links: [
        { label: 'Mon profil Strava', url: 'https://www.strava.com/athletes/sbabouhot' },
      ],
      text: 'Triathlon en préparation — objectifs progressifs et régularité.',
    },
  },
  { 
    icon: MusicIcon, 
    label: 'Musique',
    content: {
      title: 'Musique',
      links: [
        { label: 'Ma playlist Spotify', url: 'https://open.spotify.com/' },
      ],
      list: ['Led Zeppelin', 'Red Hot Chili Peppers', 'Frank Ocean'],
      albums: [
        { src: albumLZ, alt: 'Led Zeppelin II album cover', label: 'Led Zeppelin II' },
        { src: albumRHCP, alt: 'Blood Sugar Sex Magik album cover', label: 'Blood Sugar Sex Magik' },
        { src: albumOcean, alt: 'Blonde album cover', label: 'Blonde' },
      ],
    },
  },
  { 
    icon: Sparkles, 
    label: 'Divers',
    content: {
      title: 'Divers',
      images: ['/images/hobbies-divers-1.jpg'],
      text: 'Je pioche des inspirations dans le design, les cultures, et les jeux de stratégie.',
    },
  },
];

export function About() {
  const [expandedHobby, setExpandedHobby] = useState<string | null>(null);

  const handleHobbyClick = (label: string) => {
    setExpandedHobby(expandedHobby === label ? null : label);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setExpandedHobby(null);
    }
  };

  return (
    <section id="about" className="section bg-surface-2/30" onKeyDown={handleKeyDown}>
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-h2 mb-6">Mes hobbies</h2>
          
          <p className="text-muted-foreground mb-8">
            Quand je ne suis pas sur un backlog, vous me trouverez à faire du sport, 
            admirer la nature, écouter de la musique — ou explorer de nouveaux designs.
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
                    {hobby.content.title}
                  </h3>

                  {/* Images grid */}
                  {hobby.content.images && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {hobby.content.images.map((img, idx) => (
                        <div key={idx} className="aspect-square rounded-lg overflow-hidden border border-border bg-surface-2">
                          <img 
                            src={img} 
                            alt={`Photo ${hobby.label} ${idx + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Text */}
                  {hobby.content.text && (
                    <p className="text-small text-muted-foreground mb-4">
                      {hobby.content.text}
                    </p>
                  )}

                  {/* Top 3 list for Music */}
                  {hobby.content.list && (
                    <div className="mb-4">
                      <span className="text-small font-semibold block mb-2">Top 3 artistes</span>
                      <div className="flex flex-wrap justify-center gap-2">
                        {hobby.content.list.map((item, idx) => (
                          <span key={item} className="chip text-xs">
                            {idx + 1}. {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Album covers for Music */}
                  {hobby.content.albums && (
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {hobby.content.albums.map((album) => (
                        <div key={album.label} className="flex flex-col items-center gap-2">
                          <div className="aspect-square w-full rounded-lg overflow-hidden glass-card border border-border/50 hover:border-accent/30 transition-colors duration-300">
                            <img 
                              src={album.src} 
                              alt={album.alt}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                const placeholder = document.createElement('div');
                                placeholder.className = 'w-full h-full flex items-center justify-center bg-surface-2';
                                placeholder.innerHTML = '<svg class="w-8 h-8 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 18V5l12-2v13M9 18c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zM21 16c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/></svg>';
                                target.parentElement?.appendChild(placeholder);
                              }}
                            />
                          </div>
                          <span className="text-xs text-muted-foreground text-center">{album.label}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Links */}
                  {hobby.content.links && (
                    <div className="flex flex-wrap justify-center gap-2">
                      {hobby.content.links.map((link) => (
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
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
