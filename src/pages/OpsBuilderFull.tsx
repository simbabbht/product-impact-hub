import { Bot } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

export default function OpsBuilderFull() {
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
              <h1 className="text-h1 mb-4 animate-fade-in-up">Ops Builder</h1>
              <p className="text-h3 text-muted-foreground font-normal animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Automatisation & IA au service de la performance opérationnelle
              </p>
            </div>
          </div>
        </section>

        {/* Placeholder */}
        <section className="section bg-surface-2/30">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-body text-muted-foreground">
                Le contenu détaillé de cette page sera complété prochainement.
              </p>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
