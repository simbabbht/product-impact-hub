import { Hero } from '@/components/Hero';
import { Freelance } from '@/components/Freelance';
import { ProductApproach } from '@/components/ProductApproach';
import { Experience } from '@/components/Experience';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Navbar } from '@/components/Navbar';
import { MobileNav } from '@/components/MobileNav';

const Index = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      <MobileNav />
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
