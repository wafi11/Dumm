/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint : {
        ignoreDuringBuilds : true
    },
    images : {
        remotePatterns : [
            {
                hostname : "facebook-opal.vercel.app"
            }
        ]
    }
};

export default nextConfig;
