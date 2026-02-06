import { Leaf } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-small text-muted-foreground">
            © {currentYear} Portfolio PO. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-2 text-small text-muted-foreground">
            <Leaf className="w-4 h-4 text-accent" />
            <span>{t('footer.greenIt')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
