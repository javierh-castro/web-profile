/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'flagcdn.com'
            }
        ]
    }
};

export default nextConfig;
