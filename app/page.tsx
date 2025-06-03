import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import Membership from '@/components/Membership';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Testimonial from '@/components/Testimonials';
import ScrollToTop from '@/components/ScrollToTop';


export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Pricing />
      <Membership />
      <Testimonial/>
      <About />
      <Contact />
      <ScrollToTop/>
      <Footer />
    </main>
  );
}