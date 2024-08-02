// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     images:{
//       remotePatterns:[
//         {hostname: "disciplined-caterpillar-347.convex.cloud "}
//       ]
//     }
// };

// export default nextConfig;

// module.exports = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: 'https',
//           hostname: 'assets.example.com',
//           port: '',
//           pathname: '/account123/**',
//         },
//       ],
//     },
//   }

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['disciplined-caterpillar-347.convex.cloud'],
    },
  }
  export default nextConfig;
