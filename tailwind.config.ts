import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
        screens: {
            mobile: "0px",
            tablet: "768px",
            desktop: "1164px",
            wide: "1440px",
          },
    },
  },
  plugins: [],
};

export default config;
