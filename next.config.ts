import type { NextConfig } from "next";

process.env.NEXT_PRIVATE_WORKER_CORES = "1";
process.env.NEXT_CPU_NUM = "1";

const nextConfig: NextConfig = {
  experimental: {
    cpus: 1,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "ozzonehair.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/service/',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/solution/',
        destination: '/solutions/',
        permanent: true,
      },
      {
        source: '/product/',
        destination: '/products/',
        permanent: true,
      },
      {
        source: '/hair-fixing-in-trivandrum/',
        destination: '/hair-fixing-trivandrum/',
        permanent: true,
      },
      {
        source: '/hair-fixing-in-bangalore/',
        destination: '/hair-fixing-bangalore/',
        permanent: true,
      },
      {
        source: '/hair-fixing-bengaluru/',
        destination: '/hair-fixing-bangalore/',
        permanent: true,
      },
      {
        source: '/hair-fixing/',
        destination: '/solutions/',
        permanent: true,
      },
      {
        source: '/hair-patch-trivandrum/',
        destination: '/hair-fixing-trivandrum/',
        permanent: true,
      },
      {
        source: '/hair-patch-bangalore/',
        destination: '/hair-fixing-bangalore/',
        permanent: true,
      },
      {
        source: '/pricing/',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/faq/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blog/hair-fixing-cost-in-trivandrum/',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/blog/hair-fixing-cost-in-trivandrum',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/blog/understanding-hair-patch-pricing-in-kerala/',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/blog/how-to-care-for-hair-patch-kerala-climate/',
        destination: '/blog/hair-patch-care-in-humid-climate/',
        permanent: true,
      },
      {
        source: '/hair-patch/',
        destination: '/services/',
        permanent: true,
      },
      {
        source: '/hair-replacement/',
        destination: '/services/',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/sitemap_index.xml',
        destination: '/sitemap_index.xml',
      },
      {
        source: '/image/product/:path*',
        destination: '/images/products/:path*',
      },
      {
        source: '/images/product/:path*',
        destination: '/images/products/:path*',
      },
      {
        source: '/image/:path*',
        destination: '/images/:path*',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
};

export default nextConfig;
