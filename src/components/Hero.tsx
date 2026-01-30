'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid"
      id="home"
    >
      {/* Premium background glow */}
      <div className="absolute inset-0 bg-premium-glow opacity-40" />
      
      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-20 right-20 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />

      <motion.div
        className="section-container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8">
            <div className="glass px-6 py-3 rounded-full border border-blue-500/30 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-mono text-dark-text-secondary">
                Available for High-Impact Projects
              </span>
            </div>
          </motion.div>

          {/* Main Headline - The Hook */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            Building{' '}
            <span className="gradient-text">Scalable Digital Products</span>
            <br />
            That Rank <span className="text-blue-400">#1</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-dark-text-secondary mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Full-stack development meets data-driven SEO.
            <br />
            <span className="text-dark-text-primary font-semibold">
              I help brands scale from zero to global visibility.
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#projects" className="btn-primary group">
              View Case Studies
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-secondary">
              Let's Talk Growth
            </a>
          </motion.div>

          {/* Social Proof - Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {[
              { value: '200+%', label: 'Avg. Traffic Growth' },
              { value: '< 1.0s', label: 'Page Load Time' },
              { value: '50+', label: 'Projects Delivered' },
              { value: '100/100', label: 'Lighthouse Score' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-dark-text-secondary font-mono">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-dark-text-muted font-mono uppercase tracking-wider">
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-blue-500/30 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-blue-400 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
