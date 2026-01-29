'use client';

import { motion } from 'framer-motion';

const technologies = [
  'Next.js', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB',
  'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'AWS', 'Vercel', 'Docker',
  'GraphQL', 'REST APIs', 'Redis', 'Prisma', 'tRPC', 'Jest',
];

const clients = [
  'Google', 'Microsoft', 'Amazon', 'Shopify', 'Stripe', 'OpenAI',
];

export default function TrustBar() {
  return (
    <section className="py-16 border-y border-dark-border overflow-hidden bg-dark-card/30">
      {/* Technologies Marquee */}
      <div className="mb-8">
        <p className="text-center text-dark-text-muted font-mono text-xs uppercase tracking-wider mb-6">
          Technologies I Master
        </p>
        <div className="relative">
          <div className="flex gap-8 animate-marquee">
            {[...technologies, ...technologies].map((tech, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 px-6 py-3 glass rounded-lg border border-accent-cyan/20 hover:border-accent-cyan/50 transition-colors"
              >
                <span className="font-mono text-sm text-dark-text-primary whitespace-nowrap">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Logos */}
      <div>
        <p className="text-center text-dark-text-muted font-mono text-xs uppercase tracking-wider mb-6">
          Trusted By Industry Leaders
        </p>
        <div className="flex justify-center items-center gap-12 flex-wrap max-w-4xl mx-auto px-6">
          {clients.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-dark-text-muted/50 hover:text-accent-cyan transition-colors cursor-default"
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
