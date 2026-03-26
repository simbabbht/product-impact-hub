import { MapPin, Briefcase, Bot, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageProvider';

const locations = ['Nouvelle-Calédonie', 'France'];

export function Freelance() {
  const { t } = useLanguage();

  const productItems = [
    { title: t('accompagnement.product.item1.title'), desc: t('accompagnement.product.item1.desc') },
    { title: t('accompagnement.product.item2.title'), desc: t('accompagnement.product.item2.desc') },
    { title: t('accompagnement.product.item3.title'), desc: t('accompagnement.product.item3.desc') },
  ];

  const automationItems = [
    { title: t('accompagnement.automation.item1.title'), desc: t('accompagnement.automation.item1.desc') },
    { title: t('accompagnement.automation.item2.title'), desc: t('accompagnement.automation.item2.desc') },
    { title: t('accompagnement.automation.item3.title'), desc: t('accompagnement.automation.item3.desc') },
  ];

  return (
    <section id="accompagnement" className="section bg-surface-2/30">
      <div className="container-custom">
        <div className="w-full max-w-4xl mx-auto text-center px-0">
          {/* Location chips */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {locations.map((location) => (
              <div key={location} className="inline-flex items-center gap-2 chip">
                <MapPin className="w-4 h-4" />
                {location}
              </div>
            ))}
          </div>

          <h2 className="text-h2 mb-4">{t('accompagnement.title')}</h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('accompagnement.intro')}
          </p>

          {/* Two cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Product Management Card */}
            <div className="glass-card p-6 text-left hover:border-accent/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              
              <h3 className="text-h3 mb-4 text-center md:text-left">{t('accompagnement.product.title')}</h3>
              
              <div className="space-y-4 mb-6">
                {productItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-accent mt-1">→</span>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-small text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a 
                href="/product-owner"
                className="btn-primary w-full justify-center text-base py-3 mt-2"
              >
                {t('accompagnement.product.cta')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Automation & IA Card */}
            <div className="glass-card p-6 text-left hover:border-accent/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Bot className="w-6 h-6 text-accent" />
              </div>
              
              <h3 className="text-h3 mb-4 text-center md:text-left">{t('accompagnement.automation.title')}</h3>
              
              <div className="space-y-4 mb-4">
                {automationItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="text-accent mt-1">→</span>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-small text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a 
                href="/ops-builder"
                className="btn-primary w-full justify-center text-base py-3 mt-2"
              >
                {t('accompagnement.automation.cta')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
