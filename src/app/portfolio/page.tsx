import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              My Portfolio
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore all my projects and see how I've helped businesses grow through innovative web solutions
            </p>
          </div>
        </div>
        <Projects showMoreButton={false} />
      </main>
      <Footer />
    </>
  );
}