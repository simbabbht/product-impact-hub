import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

interface ProjectData {
  title: string;
  image: string;
  overview: string;
  keyFeatures: string[];
  strategies: string[];
  technologies: string;
  results: string[];
  challenges: string[];
  outcome: string;
}

const projectsData: Record<string, ProjectData> = {
  'refonte-home-espace-client': {
    title: 'Refonte homepage & activation espace client',
    image: '/placeholder.svg',
    overview: `La homepage de l'espace client n'avait plus évolué depuis longtemps et devait être alignée avec la charte groupe Allianz, sans "casser" les habitudes d'un univers historique très différent. Le défi était d'autant plus particulier que le produit s'adresse à un périmètre défense & sécurité, avec des profils et une appétence digitale très hétérogènes.

L'enjeu : réussir une transition hybride (continuité + modernisation), améliorer la lisibilité des informations clés, et renforcer l'activation / l'usage de l'espace client sur tout le portefeuille (environ 330 000 personnes concernées).

J'ai piloté la refonte de bout en bout : cadrage produit, conception avec le design, tests utilisateurs, priorisation, recette et delivery jusqu'à la mise en production.`,
    keyFeatures: [
      'Nouvelle hiérarchie d\'information et structure de homepage (accès plus direct aux actions clés)',
      'Harmonisation UI selon charte groupe (composants, accessibilité/contrastes, cohérence globale)',
      'Optimisation de la lisibilité et des repères (éviter la perte d\'habitude lors de la transition)',
      'Parcours d\'activation et première connexion clarifiés',
      'Itérations post-release basées sur retours utilisateurs et signaux d\'usage',
    ],
    strategies: [
      'Approche "transition contrôlée" : conserver les repères essentiels tout en modernisant l\'expérience',
      'Priorisation orientée impact : focus sur la homepage (zone la plus vue) et les frictions les plus fréquentes',
      'User testing terrain : participation aux tests utilisateurs pour sécuriser les choix clés',
      'Alignement transverse : coordination directions métier / IT / design sur une cible partagée',
      'Delivery end-to-end : backlog, user stories, recette, release plan, suivi post-déploiement',
      'Accompagnement adoption : contribution aux moyens de communication pour maximiser l\'activation',
    ],
    technologies: 'Jira, Confluence, Figma, recette / UAT, dashboards KPI.',
    results: [
      'Activation : environ 50% → 65–70% du portefeuille (sur ~330 000 personnes)',
      'Usage : hausse de l\'utilisation de l\'espace client et des demandes en ligne (au détriment du papier / autres canaux)',
      'Mobile : +10% d\'usage sur mobile suite à la montée en adoption de l\'espace personnel',
      'Base produit plus cohérente et scalable pour les évolutions futures',
    ],
    challenges: [
      'Concilier charte groupe et héritage historique sans désorienter les utilisateurs',
      'Adapter l\'expérience à une population aux profils très contrastés (appétence digitale variable)',
      'Levier clé : combiner refonte + accompagnement adoption (communication) pour amplifier les résultats',
    ],
    outcome: 'La homepage est passée d\'un univers vieillissant et hétérogène à une expérience cohérente, modernisée et plus lisible, tout en respectant les repères historiques. Le gain d\'activation et la progression mobile ont transformé l\'espace client en canal nettement plus utilisé, et ont posé une base solide pour les prochaines améliorations produit.',
  },
  'declaration-sinistre-en-ligne': {
    title: 'Optimisation du parcours de déclaration de sinistre',
    image: '/placeholder.svg',
    overview: `Le parcours de déclaration de sinistre devait gagner en simplicité et fiabilité pour accélérer la prise en charge côté gestion, réduire les frictions côté client, et favoriser le canal digital. Sur une base d'environ 200 000 utilisateurs, les demandes en ligne ont fortement progressé (~5 000 → ~8 000), rendant la qualité du parcours encore plus critique.

Objectif : permettre à un assuré de déclarer un sinistre plus rapidement (en moyenne 10 min → 8 min) tout en limitant les erreurs, les blocages et les sollicitations inutiles.

J'ai coordonné la refonte "dépoussiérage" en mode quick wins, avec une priorisation stricte (contraintes de planning), et un travail étroit avec IT et l'équipe indemnisation.`,
    keyFeatures: [
      'Simplification UX (réduction des frictions, clarification des étapes, microcopy plus utile)',
      'Optimisation du téléchargement de pièces (gestion des blocages fréquents liés à la taille des documents)',
      'Amélioration de la sélection de date (réduction des erreurs de saisie)',
      'Mise en place d\'un web callback pour être recontacté / aiguillé vers le bon service en cas de blocage',
      'Renforcement recette / UAT sur scénarios réels',
    ],
    strategies: [
      'Audit des frictions : identification et priorisation des irritants (client + gestion)',
      'Fiabilité d\'abord : sécuriser les points bloquants avant d\'élargir le scope',
      'Quick wins pilotés : maximiser l\'impact sous contrainte de délai',
      'Collaboration tripartite : IT + gestion/indemnisation + produit pour arbitrer vite et bien',
      'Optimisation orientée temps client : réduire l\'effort et accélérer la complétion',
      'Boucle de feedback : itérations basées sur retours terrain et incidents récurrents',
    ],
    technologies: 'Jira, Confluence, Figma, recette / UAT, dashboards KPI.',
    results: [
      'Volume : ~5 000 → ~8 000 demandes en ligne (adoption canal digital)',
      'Temps moyen : 10 minutes → 8 minutes pour compléter une déclaration',
      'Impact opérationnel : demandes reçues plus vite → traitement plus rapide côté gestion / indemnisation',
      'Parcours plus robuste sur les points historiquement bloquants (pièces, dates, accompagnement)',
    ],
    challenges: [
      'Contrôle du scope : sous contrainte de planning, la priorisation est clé (quick wins à fort impact)',
      'Importance des "petits détails UX" (upload, dates, messages d\'erreurs) : ce sont eux qui font exploser la friction',
      'L\'accompagnement (callback) est un vrai levier anti-abandon quand le self-serve atteint ses limites',
    ],
    outcome: 'Le parcours sinistre est devenu plus rapide, plus simple et mieux assisté, soutenant l\'augmentation du digital et améliorant l\'efficacité côté gestion. Les quick wins ont modernisé l\'expérience sans refonte lourde, tout en renforçant la fiabilité sur les points critiques.',
  },
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectsData[slug] : null;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <ScrollToTop />
        <div className="container-custom section pt-[120px] text-center">
          <h1 className="text-h2 mb-4">Projet non trouvé</h1>
          <Link to="/" className="btn-primary">
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-[100px] pb-16">
        <div className="container-custom">
          {/* Back link */}
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>

          {/* Title */}
          <h1 className="text-h1 mb-8">{project.title}</h1>

          {/* Hero image placeholder */}
          <div className="mb-12 rounded-xl overflow-hidden border border-border bg-surface-2 flex items-center justify-center">
            <div className="w-full h-[300px] md:h-[400px] flex items-center justify-center text-muted-foreground">
              <span className="text-small">Image à venir</span>
            </div>
          </div>

          {/* Content sections */}
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-h2 mb-4">Overview</h2>
              <p className="text-muted-foreground whitespace-pre-line">{project.overview}</p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-h2 mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Strategies */}
            <section>
              <h2 className="text-h2 mb-4">Strategies Implemented</h2>
              <ul className="space-y-2">
                {project.strategies.map((strategy, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>{strategy}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technologies */}
            <section>
              <h2 className="text-h2 mb-4">Technologies / Tools Used</h2>
              <p className="text-muted-foreground">{project.technologies}</p>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-h2 mb-4">Results</h2>
              <ul className="space-y-2">
                {project.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="text-h2 mb-4">Challenges & Learning</h2>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Outcome */}
            <section className="glass-card p-6">
              <h2 className="text-h2 mb-4">Outcome</h2>
              <p className="text-accent font-medium">{project.outcome}</p>
            </section>
          </div>

          {/* Back CTA */}
          <div className="text-center mt-12">
            <Link to="/" className="btn-secondary">
              <ArrowLeft className="w-4 h-4" />
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
