import { ArrowRight, CheckCircle, Bot, Search, Settings, TrendingUp, FileText } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { useLanguage } from '@/components/LanguageProvider';

const whatKeys = [
  { titleKey: 'ops.what1.title' as const, descKey: 'ops.what1.desc' as const, Icon: Search },
  { titleKey: 'ops.what2.title' as const, descKey: 'ops.what2.desc' as const, Icon: Settings },
  { titleKey: 'ops.what3.title' as const, descKey: 'ops.what3.desc' as const, Icon: TrendingUp },
];

const offerKeys = ['ops.offer1', 'ops.offer2', 'ops.offer3'] as const;

export default function OpsBuilder() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="min-h-[50vh] flex items-center section pt-32 md:pt-36 lg:pt-32">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-14 h-14 rounded-full bg-accent-muted flex items-center justify-center mx-auto mb-6 animate-fade-in-up">
                <Bot className="w-7 h-7 text-accent" />
              </div>
              <h1 className="text-h1 mb-4 animate-fade-in-up">{t('ops.heroTitle')}</h1>
              <p className="text-h3 text-muted-foreground font-normal animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                {t('ops.heroSubtitle')}
              </p>
              <p className="text-small text-muted-foreground/70 mt-3 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                {t('ops.roiNote')}
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section bg-surface-2/30">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-h2 mb-4 text-center">{t('ops.introTitle')}</h2>
              <p className="text-body text-muted-foreground text-center">
                {t('ops.introText')}
              </p>
            </div>
          </div>
        </section>

        {/* Ce que je mets en place */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h2 mb-8 text-center">{t('ops.whatTitle')}</h2>
              <div className="space-y-4">
                {whatKeys.map(({ titleKey, descKey, Icon }) => (
                  <div key={titleKey} className="glass-card p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent-muted flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t(titleKey)}</p>
                      <p className="text-small text-muted-foreground">{t(descKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/#contact" className="btn-primary">
                  {t('ops.ctaPrimary')}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://calendly.com/simonbabouhot-pro/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  📅 {t('ops.ctaSecondary')}
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
