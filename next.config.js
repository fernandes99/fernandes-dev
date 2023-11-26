/** @type {import('next').NextConfig} */
const nextConfig = {
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
