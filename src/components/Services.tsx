'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Rocket, Target, LineChart, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Brain,
    category: 'THE LOGIC',
    title: 'Technical Strategy',
    description: 'Architecture audits, tech stack selection, and scalability planning for high-growth products.',
    features: ['System Design', 'Performance Audits', 'Cloud Architecture', 'Database Optimization'],
  },
  {
    icon: Rocket,
    category: 'THE MAGIC',
    title: 'Full-Stack Development',
    description: 'Building lightning-fast web applications with modern frameworks and best practices.',
    features: ['Next.js/React', 'Node.js APIs', 'MongoDB/PostgreSQL', 'Real-time Features'],
  },
  {
    icon: Target,
    category: 'THE LOGIC',
    title: 'SEO Strategy',
    description: 'Data-driven optimization that turns search engines into your primary growth channel.',
    features: ['Technical SEO', 'Schema Markup', 'Content Strategy', 'Competitor Analysis'],
  },
  {
    icon: LineChart,
    category: 'THE MAGIC',
    title: 'Performance Engineering',
    description: 'Making your site faster than 95% of the web with Core Web Vitals optimization.',
    features: ['Speed Optimization', 'Lighthouse 100', 'Image Optimization', 'Caching Strategy'],
  },
  {
    icon: Shield,
    category: 'THE LOGIC',
    title: 'Security & Compliance',
    description: 'Enterprise-grade security implementation and GDPR/accessibility compliance.',
    features: ['OWASP Standards', 'Authentication', 'WCAG 2.1 AA', 'Data Protection'],
  },
  {
    icon: Zap,
    category: 'THE MAGIC',
    title: 'Conversion Optimization',
    description: 'A/B testing, analytics, and UX improvements that turn visitors into customers.',
    features: ['A/B Testing', 'Analytics Setup', 'Funnel Optimization', 'User Research'],
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-2 rounded-full border border-accent-cyan/30 text-accent-cyan text-sm font-mono mb-6">
          SERVICES
        </span>
        <h2 className="section-heading">Logic & Magic</h2>
        <p className="section-subheading mx-auto">
          Strategy meets execution. I don't just build—I architect growth engines.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent-cyan/20 to-accent-purple/20 border border-accent-cyan/30">
                  <Icon className="w-6 h-6 text-accent-cyan" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-mono text-dark-text-muted">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold mt-1 group-hover:text-accent-cyan transition-colors">
                    {service.title}
                  </h3>
                </div>
              </div>

              <p className="text-dark-text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-dark-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 glass rounded-2xl p-8 overflow-x-auto"
      >
        <h3 className="text-2xl font-bold mb-8 text-center gradient-text">
          Standard Website vs. Optimized Build
        </h3>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-dark-border">
              <th className="pb-4 text-dark-text-secondary font-mono text-sm">Feature</th>
              <th className="pb-4 text-dark-text-secondary font-mono text-sm">Standard Website</th>
              <th className="pb-4 text-accent-cyan font-mono text-sm">Your Build (Optimized)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-border">
            {[
              ['Page Speed', '3.5s+ (Slow)', '< 1.0s (Instant) ⚡'],
              ['Mobile UX', 'Basic', 'Mobile-First Adaptive 📱'],
              ['Structure', 'Div Soup', 'Semantic HTML5 🎯'],
              ['SEO Ready', 'Hidden', 'Schema & Meta Ready 🚀'],
              ['Performance', 'C Grade', 'Lighthouse 100/100 💯'],
              ['Scalability', 'Limited', 'Cloud-Native Architecture ☁️'],
            ].map(([feature, standard, optimized], idx) => (
              <tr key={idx}>
                <td className="py-4 font-semibold">{feature}</td>
                <td className="py-4 text-dark-text-muted">{standard}</td>
                <td className="py-4 text-accent-cyan font-semibold">{optimized}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
