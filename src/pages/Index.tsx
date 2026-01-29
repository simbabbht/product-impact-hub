import { Hero } from '@/components/Hero';
import { Freelance } from '@/components/Freelance';
import { ProductApproach } from '@/components/ProductApproach';
import { Experience } from '@/components/Experience';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { BottomNav } from '@/components/BottomNav';

const Index = () => {
  return (
    <div className="min-h-screen pb-24">
      <main>
        <Hero />
        <Freelance />
        <ProductApproach />
        <Experience />
        <About />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
