import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        NetflixSansRegular: ["var(--netflix-sans_400)"],
        NetflixSansSemiBold: ["var(--netflix-sans_500)"],
        NetflixSansBold: ["var(--netflix-sans_900)"],
      },
      colors: {
        primary: "#e50914",
        "home-select": "#ffffff66",
        "home-overlay": "rgba(0, 0, 0, .4)",
        "home-input-border": "rgba(128, 128, 128, 0.7)",
        "home-input": "rgba(22, 22, 22, 0.7)",
        "home-input-label": "rgba(255, 255, 255, 0.7)",
        "home-section-divider": "rgb(35,35,35)"
      },
      padding: {
        18: "4.5rem",
      },
      margin: {
        18: "4.5rem"
      },
      scale: {
        125: "1.25"
      },
      zIndex: {
        "1": "1"
      },
      backgroundImage: {
        "home-promo-pattern": "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config