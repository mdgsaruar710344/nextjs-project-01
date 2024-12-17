/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.ibb.co.com',
          port: '',
          pathname: '/**',
          search: '',
        },
      ],
    },
  
};

export default nextConfig;