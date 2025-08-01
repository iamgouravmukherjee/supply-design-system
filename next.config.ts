import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/supply-design-system" : "",
  assetPrefix: isProd ? "/supply-design-system/" : "",
};

export default nextConfig;
