import { ArrowRight, Users, Target, BarChart3, CheckCircle, Briefcase, Building2, Smartphone, Settings, RefreshCw, Layers } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const contexts = [
  { icon: Building2, label: "Espace client" },
  { icon: Smartphone, label: "Applications web et mobile" },
  { icon: Settings, label: "Produits internes & outils métiers" },
  { icon: Users, label: "Parcours self-care" },
  { icon: RefreshCw, label: "Digitalisation de processus existants" },
  { icon: Layers, label: "Produits en refonte ou en phase de structuration" },
];

const roleItems = [
  "Clarifier les besoins et les objectifs",
  "Prioriser ce qui crée le plus de valeur",
  "Aligner les parties prenantes",
  "Sécuriser la delivery",
  "Mesurer l'impact réel du produit",
];

const projets = [
  {
    label: "Refonte d'un espace client à fort enjeu d'adoption",
    slug: "refonte-home-espace-client",
  },
  {
    label: "Optimisation d'un parcours de déclaration de sinistre en ligne",
    slug: "declaration-sinistre-en-ligne",
  },
];

export default function ProductOwner() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="min-h-[50vh] flex items-center section pt-32 md:pt-36 lg:pt-32">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-h1 mb-4 animate-fade-in-up">Product Owner</h1>
              <p className="text-h3 text-muted-foreground font-normal animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                Concevoir et faire évoluer des produits digitaux
              </p>
            </div>
          </div>
        </section>

        {/* Contextes */}
        <section className="section bg-surface-2/30">
          <div className="container-custom">
            <h2 className="text-h2 mb-8 text-center">Contextes et types de produits sur lesquels j'interviens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {contexts.map((ctx) => (
                <div key={ctx.label} className="glass-card p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-muted flex items-center justify-center flex-shrink-0">
                    <ctx.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-small">{ctx.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mon rôle */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-h2 mb-6 text-center">Mon rôle au cœur du produit</h2>
              <p className="text-body text-muted-foreground mb-8 text-center">
                En tant que Product Owner, je fais le lien entre les besoins utilisateurs, les enjeux métier et les contraintes techniques.
                <br /><br />
                Mon objectif est de transformer des problématiques complexes en solutions simples, utiles et mesurables.
              </p>
              <div className="glass-card p-6">
                <ul className="space-y-3">
                  {roleItems.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mes projets */}
        <section className="section bg-surface-2/30">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-h2 mb-6">Mes projets</h2>
              <div className="space-y-4">
                {projets.map((projet) => (
                  <div key={projet.slug} className="glass-card p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-body text-left">{projet.label}</span>
                    </div>
                    <a
                      href={`/projet/${projet.slug}`}
                      className="btn-secondary text-sm whitespace-nowrap"
                    >
                      Voir la case study
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-h3 mb-6">
                Vous avez un produit à concevoir, structurer ou améliorer ?
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="/#contact" className="btn-primary">
                  Parlons de votre projet
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="https://calendly.com/simonbabouhot-pro/30min" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  📅 Prendre rendez-vous
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
