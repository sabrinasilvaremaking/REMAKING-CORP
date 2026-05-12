import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Showcase from '../components/Showcase';
import Partnership from '../components/Partnership';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Marquee from '../components/Marquee';
import Process from '../components/Process';
import CustomCursor from '../components/CustomCursor';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="min-h-screen bg-[#F8F9FA] selection:bg-primary/20 selection:text-primary-light">

      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Showcase />
      <Partnership />
      <Contact />
      <Footer />
    </main>
    </>
  );
}
