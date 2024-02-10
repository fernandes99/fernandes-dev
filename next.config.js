/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.datocms-assets.com'
            }
        ]
    },
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/',
                    destination: '/home'
                }
            ]
        };
    }
};

module.exports = nextConfig;
