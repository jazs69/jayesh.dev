import type { Metadata } from 'next';
import { metadata } from '@/lib/seo';
import '@/styles/globals.css';
import Script from 'next/script';

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* JSON-LD Schema Markup */}
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Jayesh',
              jobTitle: 'Software Architect & SEO Strategist',
              description: 'Full-stack developer specializing in scalable digital products and data-driven SEO.',
              url: 'https://jayesh.dev',
              sameAs: [
                'https://github.com/jayesh',
                'https://linkedin.com/in/jayesh',
                'https://twitter.com/jayesh',
              ],
              knowsAbout: [
                'Full-Stack Development',
                'SEO Optimization',
                'Software Architecture',
                'Next.js',
                'React',
                'Node.js',
              ],
            }),
          }}
        />
        
        <Script
          id="schema-service"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Jayesh - Software Architecture & SEO Services',
              description: 'Premium full-stack development and SEO optimization services.',
              url: 'https://jayesh.dev',
              priceRange: '$$$',
              areaServed: 'Worldwide',
              serviceType: [
                'Full-Stack Development',
                'SEO Optimization',
                'Software Architecture',
                'Performance Engineering',
              ],
            }),
          }}
        />
      </head>
      <body className="custom-scrollbar antialiased">
        {children}
      </body>
    </html>
  );
}
