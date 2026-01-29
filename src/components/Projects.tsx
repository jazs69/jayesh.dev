'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import { projectsData, type Project } from '@/data/projects';

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="section-container relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent pointer-events-none" />

      <motion.div
        ref={ref}
        variants={headerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="text-center mb-16 relative z-10"
      >
        <span className="inline-block px-4 py-2 rounded-full border border-accent-purple/30 text-accent-purple text-sm font-mono mb-6">
          PORTFOLIO
        </span>
        <h2 className="section-heading">
          Proof of Growth, Not Just Code
        </h2>
        <p className="section-subheading mx-auto">
          Every project follows the STAR framework: Situation → Task → Action → Result.
          <br />
          <span className="text-accent-cyan font-semibold">Real metrics. Real impact.</span>
        </p>
      </motion.div>

      {/* Dynamic Project Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 relative z-10">
        {projectsData.map((project: Project, index: number) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        variants={headerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="text-center mt-16"
      >
        <a href="#contact" className="btn-primary inline-block">
          Let's Build Your Next Success Story
        </a>
      </motion.div>
    </section>
  );
}
