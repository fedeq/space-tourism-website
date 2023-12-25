import type {Config} from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        bellefair: ["var(--font-bellefair)"],
        barlow_condensed: ["var(--font-barlow-condensed)"],
        barlow: ["var(--font-barlow)"],
      },
      backgroundImage: {
        home_desktop: "url('/home/background-home-desktop.jpg')",
      },
      textColor: {
        dark_blue: "#0B0D17",
        light_blue: "#D0D6F9",
      },
    },
  },
  plugins: [],
};

export default config;
