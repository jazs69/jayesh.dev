export interface Project {
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
}

export const projectsData: Project[] = [
  {
    id: 'ecommerce-seo-overhaul',
    title: 'E-Commerce SEO Overhaul',
    category: 'Full-Stack + SEO',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    businessProblem: 'A luxury fashion brand was invisible in Google search results despite having premium products. Their site had 3.5s+ load times and zero organic traffic from high-intent keywords.',
    technicalSolution: [
      'Migrated from WordPress to Next.js (SSG) for instant page loads',
      'Implemented schema markup for Product, Review, and Organization',
      'Built a custom image CDN with WebP/AVIF conversion',
      'Created semantic HTML structure with proper heading hierarchy',
    ],
    results: [
      { metric: 'Organic Traffic', value: '+312%', description: 'in 6 months' },
      { metric: 'Page Speed', value: '0.9s', description: 'LCP score' },
      { metric: 'Conversion Rate', value: '+89%', description: 'improvement' },
      { metric: 'SERP Position', value: '#1-3', description: 'top keywords' },
    ],
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'MongoDB', 'Cloudinary', 'Vercel'],
    link: 'https://example.com',
  },
  {
    id: 'saas-dashboard-rebuild',
    title: 'SaaS Analytics Dashboard',
    category: 'Full-Stack Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    businessProblem: 'A B2B analytics company had a sluggish dashboard that frustrated power users. React state management was causing 5-second render delays for data-heavy reports.',
    technicalSolution: [
      'Architected a real-time WebSocket data pipeline with Node.js',
      'Implemented React Query for optimistic updates and caching',
      'Built a custom virtualized table for 100k+ row datasets',
      'Integrated MongoDB aggregation pipelines for server-side processing',
    ],
    results: [
      { metric: 'Render Time', value: '120ms', description: 'from 5000ms' },
      { metric: 'User Retention', value: '+67%', description: 'monthly active' },
      { metric: 'API Calls', value: '-85%', description: 'efficiency gain' },
      { metric: 'Customer NPS', value: '+42', description: 'points' },
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Redis'],
    link: 'https://example.com',
  },
  {
    id: 'content-platform-seo',
    title: 'Content Platform SEO Strategy',
    category: 'SEO + Architecture',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80',
    businessProblem: 'An educational blog had 500+ articles but was ranking on page 3-5 for all target keywords. Their content wasn\'t discoverable despite high-quality writing.',
    technicalSolution: [
      'Performed a technical SEO audit and fixed 300+ crawl errors',
      'Implemented dynamic sitemap generation with priority ranking',
      'Built internal linking automation based on topic clusters',
      'Added JSON-LD schema for Article, Author, and BreadcrumbList',
    ],
    results: [
      { metric: 'Indexed Pages', value: '+420%', description: 'Google coverage' },
      { metric: 'Avg. Position', value: '3.2', description: 'from 27' },
      { metric: 'Click-Through', value: '+215%', description: 'from search' },
      { metric: 'Domain Authority', value: '+18', description: 'points' },
    ],
    technologies: ['Next.js', 'MDX', 'Contentful', 'Google Search Console', 'Vercel'],
    link: 'https://example.com',
  },
];
