import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Freelance } from '@/components/Freelance';
import { ProductApproach } from '@/components/ProductApproach';
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
        <Freelance />
        <ProductApproach />
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
