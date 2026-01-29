# Folder Structure Documentation

## Overview
This is a production-ready Next.js 14 portfolio with Express backend for a Software Architect & SEO Strategist.

## Frontend Structure (`/src`)

### `/app` - Next.js App Router
- `layout.tsx` - Root layout with SEO metadata and JSON-LD schema
- `page.tsx` - Main single-page application

### `/components` - React Components
- `Hero.tsx` - Hero section with scroll-triggered animations
- `Services.tsx` - "Logic & Magic" service offerings
- `Projects.tsx` - Project grid container
- `ProjectCard.tsx` - Individual project cards (STAR framework)
- `TrustBar.tsx` - Scrolling tech stack marquee
- `Metrics.tsx` - Animated growth metrics
- `ProcessRoadmap.tsx` - 5-step process visualization

### `/data` - Static Data
- `projects.ts` - Project case studies with business problems, solutions, and results

### `/lib` - Utilities
- `seo.ts` - SEO configuration and metadata

### `/styles` - Styling
- `globals.css` - Global styles with Cyber-Premium theme

## Backend Structure (`/server`)

### Root
- `index.js` - Express API server with routes for contact, projects, and testimonials

### `/models` - MongoDB Schemas
- `Contact.js` - Contact form submissions
- `Project.js` - Project data
- `Testimonial.js` - Client testimonials

## Public Assets (`/public`)

### `/schema` - JSON-LD Schema Markup
- `person.json` - Person schema for SEO
- `service.json` - ProfessionalService schema for SEO

## Configuration Files

- `package.json` - Dependencies and scripts
- `next.config.js` - Next.js configuration with performance optimizations
- `tailwind.config.js` - Tailwind CSS with Cyber-Premium color palette
- `tsconfig.json` - TypeScript configuration
- `.env.local` - Environment variables (not in repo)
- `postcss.config.js` - PostCSS configuration

## Key Features

### Frontend
✅ Next.js 14 with App Router
✅ Server-Side Generation (SSG) for SEO
✅ Framer Motion scroll animations
✅ Tailwind CSS with custom theme
✅ JSON-LD schema markup
✅ Core Web Vitals optimized

### Backend
✅ Express API server
✅ MongoDB with Mongoose
✅ Contact form with Nodemailer
✅ Projects and testimonials API

### SEO
✅ Semantic HTML5
✅ Open Graph and Twitter cards
✅ Schema.org markup
✅ Optimized images
✅ Sitemap ready
