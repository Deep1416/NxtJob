import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'playwrite': ['"Playwrite BE VLG"', 'sans-serif'],
      },
      colors: {
        transparent: "transparent",
        bgPeach: "#FEF7F1",
        darkPeach: "#FAE8DC",
        borderGrey: "#F6F6F6",
        bgBlue: "#EEEBFE",
        bgMobile: "#DBD3F8",
      },
    },
  },
  plugins: [],
};

export default config;
