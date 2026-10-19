import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

/**
 * Jat Law design tokens
 *  navy  = brand blue   (logo "LAW" lettering is navy-800, #133A62)
 *  gold  = brand gold   (logo blocks are gold-500, #C9A904)
 *  ivory = off-white
 * Fonts: Montserrat for headings, Open Sans for content (wired up in app/layout.tsx).
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F1F6FB",
          100: "#E1EBF6",
          200: "#C2D5EA",
          300: "#93B3D6",
          400: "#5E8BBE",
          500: "#2F6199",
          600: "#1F4D80",
          700: "#18426F",
          800: "#133A62",
          900: "#0C2A48",
          950: "#061A30",
        },
        gold: {
          50: "#FCF8E3",
          100: "#F8EFC2",
          200: "#F0E08A",
          300: "#E6CD4A",
          400: "#D9B91A",
          500: "#C9A904",
          600: "#A58C03",
          700: "#7C6802",
          800: "#574901",
          900: "#3A3101",
        },
        ivory: {
          DEFAULT: "#F8F5EC",
          50: "#FDFCF8",
          100: "#F8F5EC",
          200: "#EFEAD9",
          300: "#E2DBC1",
        },
      },
      fontFamily: {
        heading: ["var(--font-montserrat)", "Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-open-sans)", "Open Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "btn-gold":
          "inset 0 1px 0 rgb(255 255 255 / .6), inset 0 -3px 0 rgb(0 0 0 / .16), 0 12px 22px -10px rgb(124 104 2 / .85)",
        "btn-navy":
          "inset 0 1px 0 rgb(255 255 255 / .25), inset 0 -3px 0 rgb(0 0 0 / .3), 0 12px 22px -10px rgb(6 26 48 / .8)",
        coin: "inset 0 2px 0 rgb(255 255 255 / .65), inset 0 -5px 8px rgb(0 0 0 / .22), 0 12px 18px -6px rgb(6 26 48 / .55)",
      },
      dropShadow: {
        slab: "0 18px 16px rgb(6 26 48 / .28)",
        "slab-hover": "0 28px 22px rgb(6 26 48 / .36)",
      },
    },
  },
  plugins: [
    // 3D helpers: preserve-3d, perspective-*, translate-z-*
    plugin(({ addUtilities, matchUtilities }) => {
      addUtilities({
        ".preserve-3d": { transformStyle: "preserve-3d" },
        ".backface-hidden": { backfaceVisibility: "hidden" },
      });
      matchUtilities(
        { perspective: (value: string) => ({ perspective: value }) },
        { values: { 800: "800px", 1000: "1000px", 1200: "1200px", 1400: "1400px", 1600: "1600px" } },
      );
      matchUtilities(
        { "translate-z": (value: string) => ({ transform: `translateZ(${value})` }) },
        { values: { 4: "4px", 8: "8px", 12: "12px", 16: "16px", 20: "20px", 24: "24px", 32: "32px" } },
      );
    }),
  ],
};

export default config;
