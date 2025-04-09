/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: dereks-blog.vercel.app        ,
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
