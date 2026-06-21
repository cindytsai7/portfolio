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
          surface: "#F2F1ED",
          "surface-deep": "#B4AC9E",
          stroke: "#E6E5E1",
          accent: "#B35942",
          secondary: "#C2CCBD",
          muted: "#5C5C5C",
          background: "#FFFFFF",
          rule: "#C7C7C2",
        },
      },
      fontSize: {
        display: ["64px", { lineHeight: "1.1", fontWeight: "600" }],
        h1: ["clamp(24px,2.5vw,36px)", { lineHeight: "1.3", fontWeight: "600" }],
        h2: ["36px", { lineHeight: "1.08", fontWeight: "600" }],
        h3: ["clamp(16px,1.4vw,20px)", { lineHeight: "1.4", fontWeight: "500" }],
        body: ["clamp(15px, 1.5vh, 18px)", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "-0.025em" }],
        caption: ["13px", { lineHeight: "1.4", letterSpacing: "0.05em" }],
      },
      fontWeight: {
        bold: "600",
      },
      borderRadius: {
        card: '16px',
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
