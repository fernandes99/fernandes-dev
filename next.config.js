/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
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
