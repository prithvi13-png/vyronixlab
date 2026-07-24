import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        card: "#101010",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#F7D774",
          dark: "#9C7A1F",
        },
        offwhite: "#FFFFFF",
        grey: "#A0A0A0",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #D4AF37 0%, #F7D774 50%, #D4AF37 100%)",
        "luxury-radial": "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.15) 0%, rgba(5,5,5,0) 60%)",
        "noise": "url('/noise.png')",
      },
      boxShadow: {
        "gold-glow": "0 0 40px rgba(212,175,55,0.25)",
        "gold-glow-lg": "0 0 80px rgba(212,175,55,0.35)",
        "card": "0 8px 40px rgba(0,0,0,0.5)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 10s ease-in-out infinite",
        "spin-slow": "spin 12s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
        },
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
