import { ArrowRight, CheckCircle, Smartphone, Settings, Users, RefreshCw, Layers, Circle, Building2 } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useLanguage } from '@/components/LanguageProvider';

const contextIcons = [Building2, Smartphone, Settings, Users, RefreshCw, Layers];
const contextKeys = ['po.ctx1', 'po.ctx2', 'po.ctx3', 'po.ctx4', 'po.ctx5', 'po.ctx6'] as const;
const whenKeys = ['po.when1', 'po.when2', 'po.when3', 'po.when4', 'po.when5'] as const;

const projets = [
  { labelKey: 'po.project1' as const, slug: 'refonte-home-espace-client' },
  { labelKey: 'po.project2' as const, slug: 'declaration-sinistre-en-ligne' },
];

// ProductOwner page component
export default function ProductOwner() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="min-h-[50vh] flex items-center section pt-32 md:pt-36 lg:pt-32">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-h1 mb-4 animate-fade-in-up">{t('po.heroTitle')}</h1>
              <p className="text-h3 text-muted-foreground font-normal animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                {t('po.heroSubtitle')}
              </p>
            </div>
          </div>
        </section>

        {/* Quand faire appel + Contextes */}
        <section className="section bg-surface-2/30">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h2 mb-6 text-center">{t('po.whenTitle')}</h2>
              <div className="glass-card p-6 mb-6">
                <ul className="space-y-3">
                  {whenKeys.map((key) => (
                    <li key={key} className="flex items-start gap-3">
                      <Circle className="w-2 h-2 text-accent flex-shrink-0 mt-2 fill-accent" />
                      <span className="text-body">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="text-h3 mb-3 text-center">{t('po.contextsTitle')}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {contextKeys.map((key, i) => {
                  const Icon = contextIcons[i];
                  return (
                    <div key={key} className="chip flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      <span>{t(key)}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Mes projets */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-h2 mb-6">{t('po.projectsTitle')}</h2>
              <div className="space-y-4">
                {projets.map((projet) => (
                  <div key={projet.slug} className="glass-card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-body text-left">{t(projet.labelKey)}</span>
                    </div>
                    <a href={`/projet/${projet.slug}`} className="btn-secondary text-sm whitespace-nowrap">
                      {t('po.viewCaseStudy')}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section bg-surface-2/30">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-h3 mb-6">{t('po.ctaText')}</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/#contact" className="btn-primary">
                  {t('po.ctaPrimary')}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://calendly.com/simonbabouhot-pro/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  📅 {t('po.ctaSecondary')}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
