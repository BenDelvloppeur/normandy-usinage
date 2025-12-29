import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Force rebuild - cache clear attempt
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
