/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F4EEFF",
        primary: "#845EC2",
        secondary: "#FF6F61",
        offWhite: "#FAFAFF",
        text: "#2D2D2D",
        muted: "#666666",
        lightBlue: "#B3E5FC",
      },
    },
  },
  plugins: [],
};

export default config;