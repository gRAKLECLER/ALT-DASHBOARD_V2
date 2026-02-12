import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    screens: {
        mobile: "640px",
        desktop: "1164px", // ton vrai breakpoint
    },
    extend: {},
  },
  plugins: [],
};

export default config;
