import { ArrowRight, CheckCircle, Bot } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const items = [
  "Audit des processus métiers existants",
  "Identification de leviers d'automatisation",
  "Approche orientée ROI et efficacité opérationnelle",
];

export default function OpsBuilder() {
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
                Automation & IA orientées ROI pour les PME
              </p>
            </div>
          </div>
        </section>

        {/* Contenu */}
        <section className="section bg-surface-2/30">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <p className="text-body text-muted-foreground mb-8 text-center">
                Je finalise actuellement cette offre autour de l'automatisation des processus et de l'IA
                (formation avancée en cours, premiers cas d'usage en préparation).
                <br /><br />
                En attendant, je peux déjà vous aider à identifier des quick wins et des opportunités d'optimisation.
              </p>

              <div className="glass-card p-6 mb-8">
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/#contact" className="btn-primary">
                  Parlons de votre projet
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="/product-owner" className="btn-secondary">
                  Découvrir mon accompagnement Product
                  <ArrowRight className="w-4 h-4" />
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
