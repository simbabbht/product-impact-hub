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
  results: string;
  challenges: string;
  outcome: string;
}

const projectsData: Record<string, ProjectData> = {
  'optimisation-parcours-sinistre': {
    title: 'Optimisation parcours sinistre',
    image: '/placeholder.svg',
    overview: 'Simplification du parcours de déclaration de sinistre pour améliorer l\'expérience client et réduire le temps de traitement des demandes.',
    keyFeatures: [
      'Formulaire de déclaration simplifié en 5 étapes',
      'Upload de documents intuitif avec OCR',
      'Suivi en temps réel de l\'avancement',
      'Notifications push et email personnalisées',
    ],
    strategies: [
      'Discovery approfondie via interviews utilisateurs et analyse des irritants',
      'Ateliers de co-création avec les équipes métier, tech et design',
      'Prototypage rapide et tests utilisateurs itératifs',
      'Déploiement progressif avec A/B testing',
    ],
    results: 'Réduction significative du temps moyen de déclaration et amélioration mesurable de la satisfaction client sur ce parcours clé.',
    challenges: 'L\'intégration avec les systèmes legacy a nécessité une approche progressive et une coordination étroite avec les équipes IT. La gestion du changement auprès des équipes support a également été un enjeu important.',
    outcome: 'Le nouveau parcours est désormais la référence pour les autres produits d\'assurance du groupe, avec une adoption complète par les utilisateurs.',
  },
  'refonte-onboarding': {
    title: 'Refonte onboarding',
    image: '/placeholder.svg',
    overview: 'Modernisation complète de l\'expérience d\'inscription pour les nouveaux clients, avec un focus sur la conversion et la rétention.',
    keyFeatures: [
      'Parcours personnalisé selon le profil utilisateur',
      'Authentification simplifiée (email, SSO)',
      'Onboarding progressif avec tooltips contextuels',
      'Tableau de bord de bienvenue interactif',
    ],
    strategies: [
      'Mapping détaillé du parcours actuel et identification des points de friction',
      'Benchmark concurrentiel et analyse des meilleures pratiques',
      'Design thinking workshops avec les parties prenantes',
      'Tests A/B sur les différentes variantes du parcours',
    ],
    results: 'Augmentation notable du taux de complétion du parcours d\'inscription et réduction du temps d\'onboarding.',
    challenges: 'Équilibrer simplicité et collecte des informations nécessaires. Maintenir la cohérence de l\'expérience sur tous les devices.',
    outcome: 'Le nouvel onboarding a permis d\'améliorer significativement l\'activation des nouveaux utilisateurs et leur engagement initial.',
  },
  'amelioration-espace-documents': {
    title: 'Amélioration espace documents',
    image: '/placeholder.svg',
    overview: 'Centralisation et simplification de l\'accès aux documents clients pour une meilleure autonomie et une réduction des sollicitations support.',
    keyFeatures: [
      'Interface de gestion documentaire unifiée',
      'Recherche intelligente avec filtres avancés',
      'Notifications pour les nouveaux documents',
      'Export et partage sécurisé',
    ],
    strategies: [
      'Analyse des besoins via data analytics et feedback utilisateurs',
      'Définition des specs fonctionnelles en collaboration avec les équipes juridiques',
      'Architecture information repensée pour une navigation intuitive',
      'Tests d\'utilisabilité avant chaque release',
    ],
    results: 'Réduction significative des appels au support concernant l\'accès aux documents et meilleure autonomie client.',
    challenges: 'Gestion de la diversité des types de documents et des contraintes de sécurité/confidentialité.',
    outcome: 'L\'espace documents est devenu une fonctionnalité clé de l\'espace client, avec un usage en forte croissance.',
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
            to="/#projets" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux projets
          </Link>

          {/* Title */}
          <h1 className="text-h1 mb-8">{project.title}</h1>

          {/* Hero image */}
          <div className="mb-12 rounded-xl overflow-hidden border border-border">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>

          {/* Content sections */}
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-h2 mb-4">Overview</h2>
              <p className="text-muted-foreground">{project.overview}</p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-h2 mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-muted-foreground">
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
                {project.strategies.map((strategy) => (
                  <li key={strategy} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>{strategy}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-h2 mb-4">Results</h2>
              <p className="text-muted-foreground">{project.results}</p>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="text-h2 mb-4">Challenges & Learning</h2>
              <p className="text-muted-foreground">{project.challenges}</p>
            </section>

            {/* Outcome */}
            <section className="glass-card p-6">
              <h2 className="text-h2 mb-4">Outcome</h2>
              <p className="text-accent font-medium">{project.outcome}</p>
            </section>
          </div>

          {/* Back CTA */}
          <div className="text-center mt-12">
            <Link to="/#projets" className="btn-secondary">
              <ArrowLeft className="w-4 h-4" />
              Voir tous les projets
            </Link>
          </div>
        </div>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
