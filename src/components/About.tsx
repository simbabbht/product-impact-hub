import { useState } from 'react';
import { Dumbbell, Music as MusicIcon, Sparkles, X, ExternalLink, Globe } from 'lucide-react';
import albumLZ from '@/assets/hobbies/LZ.jpg';
import albumRHCP from '@/assets/hobbies/RHCP.jpg';
import albumOcean from '@/assets/hobbies/OCEAN.jpg';
import sportRun from '@/assets/hobbies/Sport_Run.jpeg';
import sportBike from '@/assets/hobbies/Sport_Bike.jpeg';
import { WorldMap } from './WorldMap';
import { useLanguage } from './LanguageProvider';

interface AlbumCover {
  src: string;
  alt: string;
  label: string;
}

interface HobbyData {
  icon: typeof Dumbbell;
  labelKey: string;
  content: {
    titleKey: string;
    images?: string[];
    links?: { labelKey: string; url: string; icon?: string }[];
    textKey?: string;
    list?: string[];
    albums?: AlbumCover[];
    customComponent?: 'worldMap';
  };
}

const hobbies: HobbyData[] = [
  { 
    icon: Dumbbell, 
    labelKey: 'about.sport',
    content: {
      titleKey: 'about.sport',
      images: [sportRun, sportBike],
      links: [
        { labelKey: 'about.strava', url: 'https://www.strava.com/athletes/sbabouhot', icon: 'strava' },
      ],
      textKey: 'about.sportContent',
    },
  },
  { 
    icon: MusicIcon, 
    labelKey: 'about.music',
    content: {
      titleKey: 'about.music',
      links: [
        { labelKey: 'about.spotify', url: 'https://open.spotify.com/playlist/6nFxzlAX37LwJJsEI9HTmk?si=e99629903b6a418d', icon: 'spotify' },
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
    icon: Globe, 
    labelKey: 'about.travel',
    content: {
      titleKey: 'about.travel',
      customComponent: 'worldMap',
    },
  },
  { 
    icon: Sparkles, 
    labelKey: 'about.misc',
    content: {
      titleKey: 'about.misc',
      textKey: 'about.miscContent',
    },
  },
];

export function About() {
  const [expandedHobby, setExpandedHobby] = useState<string | null>(null);
  const { t, language } = useLanguage();

  const handleHobbyClick = (labelKey: string) => {
    setExpandedHobby(expandedHobby === labelKey ? null : labelKey);
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
          <h2 className="text-h2 mb-6">{t('about.title')}</h2>
          
          <p className="text-muted-foreground mb-2">
            {t('about.subtitle')}
          </p>

          <p className="text-small text-muted-foreground/70 mb-8">
            {language === 'fr' ? "Cliquez sur l'icône pour en découvrir plus." : 'Click an icon to learn more.'}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {hobbies.map((hobby) => (
              <button 
                key={hobby.labelKey}
                onClick={() => handleHobbyClick(hobby.labelKey)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-small cursor-pointer transition-all duration-300 ${
                  expandedHobby === hobby.labelKey 
                    ? 'bg-accent text-accent-foreground border-accent' 
                    : 'bg-surface border-border hover:border-accent/50 hover:bg-accent-muted'
                }`}
              >
                <hobby.icon className="w-4 h-4" />
                <span>{t(hobby.labelKey)}</span>
              </button>
            ))}
          </div>

          {/* Expanded hobby content */}
          {expandedHobby && (
            <div className="glass-card p-6 animate-fade-in-up relative">
              <button 
                onClick={() => setExpandedHobby(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
                aria-label={language === 'fr' ? 'Fermer' : 'Close'}
              >
                <X className="w-5 h-5" />
              </button>

              {hobbies.filter(h => h.labelKey === expandedHobby).map((hobby) => (
                <div key={hobby.labelKey}>
                  <h3 className="text-h3 mb-4 flex items-center justify-center gap-2">
                    <hobby.icon className="w-5 h-5 text-accent" />
                    {t(hobby.content.titleKey)}
                  </h3>

                  {/* Custom component for Voyage */}
                  {hobby.content.customComponent === 'worldMap' && (
                    <WorldMap />
                  )}

                  {/* Images grid */}
                  {hobby.content.images && !hobby.content.customComponent && (
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      {hobby.content.images.map((img, idx) => (
                        <div key={idx} className="aspect-square rounded-lg overflow-hidden border border-border bg-surface-2">
                          <img 
                            src={img} 
                            alt={`Photo ${t(hobby.labelKey)} ${idx + 1}`}
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
                  {hobby.content.textKey && !hobby.content.customComponent && hobby.labelKey !== 'about.misc' && (
                    <p className="text-small text-muted-foreground mb-4">
                      {t(hobby.content.textKey)}
                    </p>
                  )}

                  {/* Text for Divers (centered) */}
                  {hobby.content.textKey && hobby.labelKey === 'about.misc' && (
                    <p className="text-muted-foreground text-center py-8">
                      {t(hobby.content.textKey)}
                    </p>
                  )}

                  {/* Top 3 list for Music */}
                  {hobby.content.list && (
                    <div className="mb-4">
                      <span className="text-small font-semibold block mb-2">Top 3 {language === 'fr' ? 'artistes' : 'artists'}</span>
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
                          key={link.labelKey}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-small text-accent hover:text-accent/80 transition-colors"
                        >
                          {link.icon === 'strava' && (
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.599h4.172L10.463 0l-7 13.828h4.169" />
                            </svg>
                          )}
                          {link.icon === 'spotify' && (
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                            </svg>
                          )}
                          {!link.icon && <ExternalLink className="w-3 h-3" />}
                          {t(link.labelKey)}
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
