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
  'refonte-home-espace-client': {
    title: 'Refonte Home Espace Client',
    image: '/placeholder.svg',
    overview: '',
    keyFeatures: [],
    strategies: [],
    results: '',
    challenges: '',
    outcome: '',
  },
  'declaration-sinistre-en-ligne': {
    title: 'Déclaration de sinistre en ligne',
    image: '/placeholder.svg',
    overview: '',
    keyFeatures: [],
    strategies: [],
    results: '',
    challenges: '',
    outcome: '',
  },
  'changer-mon-rib': {
    title: 'Changer mon RIB',
    image: '/placeholder.svg',
    overview: '',
    keyFeatures: [],
    strategies: [],
    results: '',
    challenges: '',
    outcome: '',
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
              <p className="text-muted-foreground">{project.overview || 'Contenu à venir...'}</p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-h2 mb-4">Key Features</h2>
              {project.keyFeatures.length > 0 ? (
                <ul className="space-y-2">
                  {project.keyFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">Contenu à venir...</p>
              )}
            </section>

            {/* Strategies */}
            <section>
              <h2 className="text-h2 mb-4">Strategies Implemented</h2>
              {project.strategies.length > 0 ? (
                <ul className="space-y-2">
                  {project.strategies.map((strategy) => (
                    <li key={strategy} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{strategy}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">Contenu à venir...</p>
              )}
            </section>

            {/* Results */}
            <section>
              <h2 className="text-h2 mb-4">Results</h2>
              <p className="text-muted-foreground">{project.results || 'Contenu à venir...'}</p>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="text-h2 mb-4">Challenges & Learning</h2>
              <p className="text-muted-foreground">{project.challenges || 'Contenu à venir...'}</p>
            </section>

            {/* Outcome */}
            <section className="glass-card p-6">
              <h2 className="text-h2 mb-4">Outcome</h2>
              <p className="text-accent font-medium">{project.outcome || 'Contenu à venir...'}</p>
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
