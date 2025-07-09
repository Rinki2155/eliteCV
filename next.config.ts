// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: [],
//   },
//   eslint: {
//     ignoreDuringBuilds: true, 
//   },
// };

// export default nextConfig;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
