'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const metrics = [
  { label: 'Years Experience', value: 8, suffix: '+', duration: 2 },
  { label: 'Projects Delivered', value: 50, suffix: '+', duration: 2.5 },
  { label: 'Lines of Code', value: 500, suffix: 'K+', duration: 3 },
  { label: 'Avg. SEO Growth', value: 200, suffix: '%', duration: 2.5 },
];

function CounterAnimation({ end, duration, suffix }: { end: number; duration: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-2 rounded-full border border-accent-gold/30 text-accent-gold text-sm font-mono mb-6">
          BY THE NUMBERS
        </span>
        <h2 className="section-heading">Growth You Can Measure</h2>
        <p className="section-subheading mx-auto">
          Data-driven results that speak louder than buzzwords.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center premium-card"
          >
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-3">
              <CounterAnimation 
                end={metric.value} 
                duration={metric.duration} 
                suffix={metric.suffix}
              />
            </div>
            <div className="text-sm text-dark-text-secondary font-mono">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
