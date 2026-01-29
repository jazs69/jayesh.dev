/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "res.cloudinary.com"],
    formats: ["image/avif", "image/webp"],
  },
  // Enable ISR and SSG for optimal SEO
  // experimental: {
  //   optimizeCss: true, // Requires 'critters' package - install with: npm install critters
  // },
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  // Headers for security and performance
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
