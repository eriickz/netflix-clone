import type { Config } from "tailwindcss"
import plugin from "tailwindcss/plugin"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
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
        "1.5lg": "1400px",
        "xl": "1920px",
        "xxl": "2048px",
        "xxxl": "2500px",
      },
      fontSize: {
        "1.5xs": "0.8125rem",
        "1.5xl": "1.375rem",
        "2.5xl": "1.75rem",
        "3.5xl": "2rem",
        "4.5xl": "2.5rem",
        "1.2r": "1.2vw",
        "1.5r": "1.5vw",
      },
      spacing: {
        "home-content-lg": "calc(83.333333% - 6rem)",
        "home-content-xl": "calc(66.66666666666666% - 6rem)",
        "home-content-md": "calc(100% - 4rem)",
      },
      fontFamily: {
        NetflixSansRegular: ["var(--netflix-sans_400)"],
        NetflixSansSemiBold: ["var(--netflix-sans_500)"],
        NetflixSansBold: ["var(--netflix-sans_900)"],
      },
      textShadow: {
        "app-home-movie": "rgba(0, 0, 0, 0.45) 2px 2px 4px",
        "app-home-slide-hover-card-tags": "0 1px 1px rgba(0,0,0,.7)"
      },
      boxShadow: {
        "app-home-slide-hover-card": "rgba(0, 0, 0, 0.75) 0px 3px 10px"
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
        "home-question-btn-hover": "#414141",
        "choose-profile-background": "#141414",
        "choose-profile-default-text-color": "#808080",
        "app-header-nav-item-color": "#e5e5e5",
        "app-header-nav-item-hover-color": "#b3b3b3",
        "app-home-header-scrolled-bg": "#141414",
        "app-home-default-btn-bg-hover": "#ffffffbf",
        "app-home-secondary-btn-bg": "#6d6d6eb3",
        "app-home-secondary-btn-bg-hover": "#6d6d6e66",
        "app-home-refresh-btn-hover": "#ffffff1a",
        "app-home-maturity-ranking-bg": "#33333399",
        "app-home-maturity-ranking-border": "#dcdcdc",
        "app-home-slide-hover-card-btn-border": "#ffffff80",
        "app-home-slide-hover-card-btn-bg": "#2a2a2a99",
        "app-home-slide-hover-card-bg": "#181818",
        "app-home-slide-hover-card-videometadata-match-score": "#46d369",
        "app-home-slide-hover-card-videometadata-content": "#bcbcbc",
        "app-home-slide-hover-card-videometadata-quality-badge": "#ffffffe6",
        "app-home-slide-hover-card-tags-separator-bg": "#646464",
        "app-home-slide-handler-bg": "#14141480",
        "app-home-slide-handler-hover-bg": "#141414b3",
        "app-home-slide-pagination-item-bg": "#4d4d4d",
        "app-home-slide-pagination-active-item-bg": "#aaa",
        "app-footer-text": "#808080"
      },
      padding: {
        "14.5": "3.75rem",
        "16.5": "4.375rem",
        18: "4.5rem",
        "3.9r": "3.9vw"
      },
      margin: {
        18: "4.5rem"
      },
      scale: {
        125: "1.25"
      },
      zIndex: {
        "1": "1",
        "2": "2",
        "3": "3",
      },
      backgroundImage: {
        "home-promo-pattern": "linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%)",
        "app-header-gradient": "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)",
        "app-home-hero-vignette-gradient": "linear-gradient(77deg,rgba(0,0,0,.6),transparent 85%)",
        "app-home-ranking-vignette-gradient": "linear-gradient(180deg,hsla(0,0%,8%,0) 0,hsla(0,0%,8%,.15) 15%,hsla(0,0%,8%,.35) 29%,hsla(0,0%,8%,.58) 44%,#141414 68%,#141414)",
        "avatar": "url('/images/avatar.png')",
        "avatar-hero": "url('/images/avatar-hero.png')",
        "avatar-girl": "url('/images/avatar-girl.png')",
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
        "profile-enter": {
          from: { opacity: "0", transform: "scale(1.1)" },
          to: { opacity: "1", transform: "scale(1)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
        "profile-in": "profile-enter .45s forwards"
      },
      transitionProperty: {
        "rotate": "rotate",
        "input": "margin-top, font-size",
        "backgroundColor": "background-color",
        "slider": "transform",
      },
      transitionDuration: {
        "0.4": "0.4s", 
        "0.54": "0.54s"
      },
      transitionTimingFunction: {
        "slider-ease": "cubic-bezier(.5,0,.1,1)",
      },
      data: {
        "placeholder-position": "placeholder-position~='top'"
      },
      borderWidth: {
        "5": "5px"
      },
      minWidth: {
        "1/2": "50%",
      },
      maxWidth: {
        "1/6": "16.666667%"
      }
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
} satisfies Config

export default config
