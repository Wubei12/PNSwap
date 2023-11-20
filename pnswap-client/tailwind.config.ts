import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "420px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        monument: ["Monument"],
        "monument-bold": ["Monument-bold"],
        redhat: ["RedHat Display Regular"],
        "redhat-semibold": ["RedHat Display Semibold"],
        "redhat-bold": ["RedHat-Display Bold"],
      },
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "rotate(-45deg) scale(1)",
          },
          "25%": {
            transform: "rotate(-45deg) scale(1.06)",
          },
          "50%": {
            transform: "rotate(-45deg) scale(1.1)",
          },
          "75%": {
            transform: "rotate(-45deg) scale(1.06)",
          },
          "100%": {
            transform: "rotate(-45deg) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
