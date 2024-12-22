import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_WEATHERBIT_API_KEY: process.env.NEXT_PUBLIC_WEATHERBIT_API_KEY,
  },
  images: {
    domains: ["www.weatherbit.io"], // Allow external images from Weatherbit
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "weatherbit.io",
  //       port: "",
  //       pathname: "**",
  //       search: "",
  //     },
  //   ],
  // },
};

export default nextConfig;
