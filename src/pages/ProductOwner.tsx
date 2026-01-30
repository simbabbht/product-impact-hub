import { ArrowRight, Users, Target, BarChart3, CheckCircle, Briefcase, Building2, Smartphone, Settings, RefreshCw } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const contexts = [
  { icon: Building2, label: "Espaces clients (banque, assurance, services)" },
  { icon: Smartphone, label: "Applications web et mobiles" },
  { icon: Settings, label: "Produits internes et outils métiers" },
  { icon: Users, label: "Parcours self-care et digitalisation de processus existants" },
  { icon: RefreshCw, label: "Produits en refonte ou en phase de structuration" },
];

const roleItems = [
  "Clarifier les besoins et les objectifs",
  "Prioriser ce qui crée le plus de valeur",
  "Aligner les parties prenantes",
  "Sécuriser la delivery",
  "Mesurer l'impact réel du produit",
];

const accompagnementBlocs = [
  {
    icon: Target,
    title: "Cadrage stratégique",
    items: [
      "Compréhension des besoins utilisateurs et métier",
      "Définition de la vision produit",
      "Objectifs clairs et mesurables",
      "Alignement des parties prenantes",
    ],
  },
  {
    icon: Briefcase,
    title: "Delivery end-to-end",
    items: [
      "Backlog et priorisation",
      "Rédaction de user stories claires",
      "Travail en environnement agile",
      "Recette, UAT et mise en production",
    ],
  },
  {
    icon: BarChart3,
    title: "Pilotage de la performance",
    items: [
      "Suivi des KPI produits",
      "Analyse des usages et des frictions",
      "Amélioration continue",
      "Adoption et autonomie des utilisateurs",
    ],
  },
];

const projets = [
  "Refonte d'un espace client à fort enjeu d'adoption",
  "Optimisation d'un parcours de déclaration de sinistre en ligne",
];

const environnement = [
  "Environnements agiles",
  "Collaboration étroite avec design, tech et métiers",
  "Contextes grands groupes et PME",
  "Produits à forte audience et contraintes de fiabilité élevées",
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
                Concevoir et faire évoluer des produits digitaux utiles, adoptés et performants.
              </p>
            </div>
          </div>
        </section>

        {/* Contextes */}
        <section className="section bg-surface-2/30">
          <div className="container-custom">
            <h2 className="text-h2 mb-8 text-center">Pour quels contextes j'interviens</h2>
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

        {/* Accompagnement bout en bout */}
        <section className="section bg-surface-2/30">
          <div className="container-custom">
            <h2 className="text-h2 mb-8 text-center">Un accompagnement de bout en bout</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {accompagnementBlocs.map((bloc) => (
                <div key={bloc.title} className="glass-card p-6 text-center md:text-left">
                  <div className="w-12 h-12 rounded-full bg-accent-muted flex items-center justify-center mb-4 mx-auto md:mx-0">
                    <bloc.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-h3 mb-4">{bloc.title}</h3>
                  <ul className="space-y-2">
                    {bloc.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-left">
                        <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                        <span className="text-small text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Exemples de projets */}
        <section className="section">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-h2 mb-6">Exemples de projets</h2>
              <div className="glass-card p-6 mb-6">
                <ul className="space-y-3 text-left">
                  {projets.map((projet) => (
                    <li key={projet} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-body">{projet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a href="/#experience" className="btn-secondary">
                Voir les études de cas
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Environnement */}
        <section className="section bg-surface-2/30">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-h2 mb-6 text-center">Environnement de travail</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {environnement.map((item) => (
                  <div key={item} className="glass-card p-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-small">{item}</span>
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
