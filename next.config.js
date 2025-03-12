// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
//   // swcMinify: true,
//   images: {
//     domains: ["localhost", "res.cloudinary.com"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "cdn.sanity.io",
//         port: "",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  output: "standalone", // Ensures proper deployment on Vercel
  images: {
    domains: ["localhost", "res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0, must-revalidate", // Prevents caching in production
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
