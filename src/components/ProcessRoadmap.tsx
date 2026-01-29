'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, PenTool, Code, Gauge, TrendingUp } from 'lucide-react';

const roadmap = [
  {
    step: '01',
    icon: Search,
    title: 'Audit',
    description: 'Deep dive into your current tech stack, SEO performance, and growth blockers.',
    deliverable: 'Technical & SEO audit report',
  },
  {
    step: '02',
    icon: PenTool,
    title: 'Architect',
    description: 'Design a scalable solution with proper database schema, API structure, and SEO strategy.',
    deliverable: 'System design document',
  },
  {
    step: '03',
    icon: Code,
    title: 'Build',
    description: 'Develop with clean, maintainable code following industry best practices and modern frameworks.',
    deliverable: 'Production-ready application',
  },
  {
    step: '04',
    icon: Gauge,
    title: 'Optimize',
    description: 'Fine-tune performance, implement caching, compress assets, and ensure Core Web Vitals compliance.',
    deliverable: 'Lighthouse 100/100 score',
  },
  {
    step: '05',
    icon: TrendingUp,
    title: 'Scale',
    description: 'Monitor analytics, run A/B tests, and iterate based on real user data to maximize ROI.',
    deliverable: 'Growth metrics dashboard',
  },
];

export default function ProcessRoadmap() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-2 rounded-full border border-accent-purple/30 text-accent-purple text-sm font-mono mb-6">
          PROCESS
        </span>
        <h2 className="section-heading">The Roadmap to Success</h2>
        <p className="section-subheading mx-auto">
          A proven 5-step framework that transforms ideas into market leaders.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan via-accent-purple to-accent-pink md:left-1/2" />

        {roadmap.map((item, index) => {
          const Icon = item.icon;
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-16 md:mb-24 flex items-center ${
                isEven ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Step number indicator */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center shadow-glow-md">
                  <span className="font-bold text-white text-lg">{item.step}</span>
                </div>
              </div>

              {/* Content card */}
              <div className={`ml-28 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                <div className="premium-card">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent-cyan/20 border border-accent-cyan/30">
                      <Icon className="w-5 h-5 text-accent-cyan" />
                    </div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
                  <p className="text-dark-text-secondary mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-accent-cyan">→</span>
                    <span className="text-dark-text-muted font-mono">
                      Deliverable: <span className="text-accent-purple">{item.deliverable}</span>
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
