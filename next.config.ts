import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
        source: '/hair-fixing-trivandrum/',
        destination: '/solutions/',
        permanent: true,
      },
      {
        source: '/hair-fixing-in-trivandrum/',
        destination: '/solutions/',
        permanent: true,
      },
      {
        source: '/hair-fixing/',
        destination: '/solutions/',
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
        source: '/image/services/:path*',
        destination: '/images/service/:path*',
      },
      {
        source: '/images/services/:path*',
        destination: '/images/service/:path*',
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
