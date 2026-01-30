import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TrustBar from '@/components/TrustBar';
import Metrics from '@/components/Metrics';
import Projects from '@/components/Projects';
import ProcessRoadmap from '@/components/ProcessRoadmap';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <TrustBar />
        <Services />
        <Metrics />
        <Projects />
        <ProcessRoadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
