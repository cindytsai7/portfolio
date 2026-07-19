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
      // Fluid sizes all lock to their previous literal at or below 1440px,
      // so desktop (1280+) is unchanged by construction. Only phones shrink.
      fontSize: {
        display: ["64px", { lineHeight: "1.1", fontWeight: "600" }],
        h1: ["clamp(24px,2.5vw,36px)", { lineHeight: "1.3", fontWeight: "600" }],
        // 28px @375 -> 36px from 866px up (desktop unchanged)
        h2: ["clamp(28px, 25.6px + 1.2vw, 36px)", { lineHeight: "1.08", fontWeight: "600" }],
        h3: ["clamp(16px,1.4vw,20px)", { lineHeight: "1.4", fontWeight: "500" }],
        // was clamp(15px, 1.5vh, 18px) — clamped on viewport HEIGHT, so it rendered
        // 15px on any normal laptop and never responded to width. Now 15px through
        // 1440 (identical to today) and drifts to 16px only above that.
        body: ["clamp(15px, 12px + 0.208vw, 16px)", { lineHeight: "1.25", fontWeight: "400", letterSpacing: "-0.025em" }],
        caption: ["13px", { lineHeight: "1.4", letterSpacing: "0.05em" }],
        // 16px @375 -> 20px from 1024px up. Replaces scattered text-[20px].
        "card-title": ["clamp(16px, 13.69px + 0.62vw, 20px)", { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        // 32px @375 -> 52px from 1024px up. Replaces text-[52px] in DarkOutroSection.
        stat: ["clamp(32px, 20.45px + 3.08vw, 52px)", { lineHeight: "1", letterSpacing: "-0.03em" }],
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
