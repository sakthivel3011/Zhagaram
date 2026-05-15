import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: "#FF4522",
        },
        neutral: {
          black: "#000000",
          gray: {
            300: "#d1d5db",
            900: "#1a1a1a",
          },
          white: "#ffffff",
          transparent: "transparent",
        },
        theme: {
          primary: "#111111",
          secondary: "#1a1a1a",
          textPrimary: "#ffffff",
          textSecondary: "#a1a1aa",
          textTertiary: "#f4f4f5",
          borderMain: "#333333",
        }
      },
      fontFamily: {
        outfit: ["var(--font-outfit)", "sans-serif"],
        michroma: ["var(--font-michroma)", "sans-serif"],
        oxanium: ["var(--font-oxanium)", "sans-serif"],
        "great-vibes": ["var(--font-great-vibes)", "cursive"],
        "fira-sans": ["var(--font-fira-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
