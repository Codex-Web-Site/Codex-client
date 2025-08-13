import type { NextConfig } from "next";

// Déclaration pour TypeScript
declare const process: {
  env: {
    [key: string]: string | undefined;
    NEXT_PUBLIC_API_URL?: string;
  };
};

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'camrppywkhkihnrggzrv.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
                destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/:path*`, // Ajoute le préfixe /api
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;