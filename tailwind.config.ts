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
    },
    extend: {
      screens: {
        "xs": "294px",
        "sm": "600px",
        "md": "960px",
        "lg": "1280px",
        "xl": "1920px",
        "2xl": "1400px",
      },
      fontSize: {
        "3.5xl": "2rem"
      },
      spacing: {
        "home-content-lg": "calc(83.333333% - 6rem)",
        "home-content-xl": "calc(66.66666666666666% - 6rem)",
        "home-content-md": "calc(100% - 4rem)"
      },
      fontFamily: {
        NetflixSansRegular: ["var(--netflix-sans_400)"],
        NetflixSansSemiBold: ["var(--netflix-sans_500)"],
        NetflixSansBold: ["var(--netflix-sans_900)"],
      },
      colors: {
        primary: "#e50914",
        "input-validation": "#eb3942",
        "home-select": "#ffffff66",
        "home-overlay": "#00000066",
        "home-input-border": "#808080b3",
        "home-input": "#161616b3",
        "home-input-label": "#ffffffb3",
        "home-section-divider": "#232323",
        "home-download-text": "#0071eb",
        "home-question-btn": "#2d2d2d",
        "home-question-btn-hover": "#414141"
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
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
      transitionProperty: {
        "rotate": "rotate",
        "input": "margin-top, font-size",
      },
      data: {
        "placeholder-position": "placeholder-position~='top'"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config