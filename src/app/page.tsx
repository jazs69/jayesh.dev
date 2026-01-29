import Hero from '@/components/Hero';
import Services from '@/components/Services';
import TrustBar from '@/components/TrustBar';
import Metrics from '@/components/Metrics';
import Projects from '@/components/Projects';
import ProcessRoadmap from '@/components/ProcessRoadmap';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustBar />
      <Services />
      <Metrics />
      <Projects />
      <ProcessRoadmap />
    </main>
  );
}
