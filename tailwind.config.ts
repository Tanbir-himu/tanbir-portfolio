import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0A0F",
          secondary: "#12121A",
          tertiary: "#1A1A2E",
        },
        accent: {
          blue: "#4F46E5",
          purple: "#7C3AED",
          cyan: "#06B6D4",
        },
        text: {
          primary: "#F1F5F9",
          secondary: "#94A3B8",
          muted: "#64748B",
        },
        border: {
          DEFAULT: "#1E293B",
        },
        glass: "rgba(255, 255, 255, 0.05)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #4F46E5, #7C3AED)",
        "gradient-glow":
          "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #06B6D4 100%)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "spin-slow": "spin 20s linear infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 0 0 rgba(79,70,229,0.6)" },
          "50%": { opacity: "0.7", boxShadow: "0 0 0 6px rgba(79,70,229,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
