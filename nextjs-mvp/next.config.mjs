/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  async redirects() {
    return [
      // The retrospective writer lives under /write; /write itself starts at step 0.
      { source: '/write', destination: '/write/0', permanent: false },
      // Keep old /new/* links working.
      { source: '/new', destination: '/write/0', permanent: true },
      { source: '/new/:stepId', destination: '/write/:stepId', permanent: true },
    ];
  },
};

export default nextConfig;
