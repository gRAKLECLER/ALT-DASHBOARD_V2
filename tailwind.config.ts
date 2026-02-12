import type { Config } from "tailwindcss";

const config: Config = {
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
