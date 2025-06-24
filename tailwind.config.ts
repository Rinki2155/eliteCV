import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4EEFF", // Soft lavender
        primary: "#845EC2", // Deep violet
        secondary: "#FF6F61", // Coral (CTA)
        offWhite: "#FAFAFF", // Section BG
        text: "#2D2D2D", // Default text
        muted: "#666666", // Subtitle text
        lightBlue: "#B3E5FC", // Border highlight
      },
    },
  },
  plugins: [],
};
export default config;
