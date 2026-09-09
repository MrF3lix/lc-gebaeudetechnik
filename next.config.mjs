const pocketbaseUrl = process.env.POCKETBASE_URL ? new URL(process.env.POCKETBASE_URL) : null;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: pocketbaseUrl
      ? [
          {
            protocol: pocketbaseUrl.protocol.replace(":", ""),
            hostname: pocketbaseUrl.hostname,
            port: pocketbaseUrl.port,
            pathname: "/api/files/**",
          },
        ]
      : [],
  },
};

export default nextConfig;
