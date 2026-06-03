import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          primary: "#1A1A1A",
          surface: "#ECEBE7",
          accent: "#B35942",
          secondary: "#C2CCBD",
          muted: "#737373",
          background: "#FFFFFF",
        },
      },
      fontSize: {
        display: ["clamp(32px,3.6vw,52px)", { lineHeight: "1.2", fontWeight: "700" }],
        h1: ["clamp(24px,2.5vw,36px)", { lineHeight: "1.3", fontWeight: "700" }],
        h2: ["clamp(20px,1.9vw,28px)", { lineHeight: "1.3", fontWeight: "600" }],
        h3: ["clamp(16px,1.4vw,20px)", { lineHeight: "1.4", fontWeight: "500" }],
        body: ["clamp(15px,1.2vw,17px)", { lineHeight: "1.375", fontWeight: "400" }],
        caption: ["13px", { lineHeight: "1.4", letterSpacing: "0.05em" }],
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
