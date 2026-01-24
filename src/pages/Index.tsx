import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Freelance } from '@/components/Freelance';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Freelance />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Index;
