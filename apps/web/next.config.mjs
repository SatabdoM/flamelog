/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@workspace/ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'q74m5lh3o9.ufs.sh',
      },
      {
        protocol: 'https',
        hostname: 'q74m5lh3o9.ufs.sh',
      },
    ],
  },
};

export default nextConfig;
