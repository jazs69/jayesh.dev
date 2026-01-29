'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ExternalLink, TrendingUp, Code, Zap } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    category: string;
    image: string;
    businessProblem: string;
    technicalSolution: string[];
    results: {
      metric: string;
      value: string;
      description: string;
    }[];
    technologies: string[];
    link?: string;
  };
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.4 },
    },
  };

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: { 
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.article
      ref={ref}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      whileHover="hover"
      className="premium-card group cursor-pointer h-full"
    >
      {/* Project Image with Overlay */}
      <div className="relative overflow-hidden rounded-xl mb-6 aspect-video bg-dark-border">
        <motion.div variants={imageVariants} className="w-full h-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        
        {/* Gradient overlay on hover */}
        <motion.div
          variants={overlayVariants}
          className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/50 to-transparent flex items-end p-6"
        >
          <div className="flex items-center gap-2 text-accent-cyan font-mono text-sm">
            <ExternalLink className="w-4 h-4" />
            <span>View Project</span>
          </div>
        </motion.div>

        {/* Category badge */}
        <div className="absolute top-4 right-4">
          <span className="glass px-4 py-2 rounded-full text-xs font-mono border border-accent-cyan/30">
            {project.category}
          </span>
        </div>
      </div>

      {/* Project Title */}
      <h3 className="text-2xl font-bold mb-3 group-hover:text-accent-cyan transition-colors">
        {project.title}
      </h3>

      {/* Business Problem (STAR - Situation) */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-4 h-4 text-accent-purple" />
          <h4 className="text-sm font-semibold text-accent-purple uppercase tracking-wider">
            Business Challenge
          </h4>
        </div>
        <p className="text-dark-text-secondary leading-relaxed">
          {project.businessProblem}
        </p>
      </div>

      {/* Technical Solution (STAR - Action) */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Code className="w-4 h-4 text-accent-cyan" />
          <h4 className="text-sm font-semibold text-accent-cyan uppercase tracking-wider">
            Technical Solution
          </h4>
        </div>
        <ul className="space-y-2">
          {project.technicalSolution.map((solution, idx) => (
            <li key={idx} className="flex items-start gap-2 text-dark-text-secondary text-sm">
              <span className="text-accent-cyan mt-1">▹</span>
              <span>{solution}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Results (STAR - Result) */}
      <div className="mb-6 pb-6 border-b border-dark-border">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="w-4 h-4 text-accent-gold" />
          <h4 className="text-sm font-semibold text-accent-gold uppercase tracking-wider">
            Measurable Impact
          </h4>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {project.results.map((result, idx) => (
            <div key={idx} className="text-center glass p-4 rounded-lg">
              <div className="text-2xl font-bold gradient-text mb-1">
                {result.value}
              </div>
              <div className="text-xs text-dark-text-muted font-mono">
                {result.metric}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Stack */}
      <div>
        <h4 className="text-xs font-mono text-dark-text-muted uppercase tracking-wider mb-3">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-dark-bg border border-dark-border rounded-full text-xs font-mono text-dark-text-secondary hover:border-accent-cyan/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Hover effect border glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent-cyan/20 transition-all duration-500 pointer-events-none" />
    </motion.article>
  );
}
