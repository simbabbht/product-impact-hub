import { useState, FormEvent } from 'react';
import { Mail, Linkedin, Calendar, Send, CheckCircle } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    profession: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', profession: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-h2 mb-3">{t('contact.title')}</h2>
          <p className="text-muted-foreground mb-8">{t('contact.subtitle')}</p>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <a href="mailto:simonbabouhot.pro@gmail.com" className="btn-primary">
              <Mail className="w-4 h-4" />
              Email
            </a>
            <a href="https://www.linkedin.com/in/simonbabouhot/" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="https://calendly.com/simonbabouhot-pro/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Calendar className="w-4 h-4" />
              Calendly
            </a>
          </div>

          {/* Contact form */}
          <div className="glass-card p-6 md:p-8 text-left">
            <h3 className="text-h3 mb-4 text-center">{t('contact.form.title')}</h3>
            
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-accent">
                <CheckCircle className="w-12 h-12 mb-3" />
                <p className="font-medium">{t('contact.form.success')}</p>
                <p className="text-small text-muted-foreground">{t('contact.form.successDetail')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-small font-medium mb-1">{t('contact.form.name')}</label>
                  <input type="text" id="name" required maxLength={100} value={formState.name} onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))} className="w-full px-4 py-3 rounded-md bg-surface border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-body" placeholder={t('contact.form.namePlaceholder')} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-small font-medium mb-1">{t('contact.form.email')}</label>
                  <input type="email" id="email" required maxLength={255} value={formState.email} onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))} className="w-full px-4 py-3 rounded-md bg-surface border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-body" placeholder={t('contact.form.emailPlaceholder')} />
                </div>
                <div>
                  <label htmlFor="profession" className="block text-small font-medium mb-1">{t('contact.form.profession')}</label>
                  <input type="text" id="profession" maxLength={100} value={formState.profession} onChange={(e) => setFormState(prev => ({ ...prev, profession: e.target.value }))} className="w-full px-4 py-3 rounded-md bg-surface border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-body" placeholder={t('contact.form.professionPlaceholder')} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-small font-medium mb-1">{t('contact.form.message')}</label>
                  <textarea id="message" required maxLength={1000} rows={4} value={formState.message} onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))} className="w-full px-4 py-3 rounded-md bg-surface border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors text-body resize-none" placeholder={t('contact.form.messagePlaceholder')} />
                </div>
                <button type="submit" className="btn-primary w-full">
                  <Send className="w-4 h-4" />
                  {t('contact.form.send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
