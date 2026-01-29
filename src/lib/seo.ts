import { Metadata } from 'next';

const siteConfig = {
  name: 'Jayesh - Software Architect & SEO Strategist',
  description: 'Full-stack development meets data-driven SEO. I help brands scale from zero to global visibility with scalable digital products that rank #1.',
  url: 'https://jayesh.dev',
  ogImage: 'https://jayesh.dev/og-image.jpg',
  author: 'Jayesh',
  keywords: [
    'Software Architect',
    'SEO Strategist',
    'Full-Stack Developer',
    'Next.js Expert',
    'React Developer',
    'Node.js Developer',
    'Technical SEO',
    'Web Performance',
    'Software Engineering',
    'Freelance Developer',
    'MERN Stack',
    'TypeScript',
    'MongoDB',
    'Performance Optimization',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  publisher: siteConfig.author,
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@jayesh',
  },
  
  // Icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  
  // Manifest
  manifest: '/site.webmanifest',
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default siteConfig;
