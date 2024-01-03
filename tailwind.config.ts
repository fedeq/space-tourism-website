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
        home_mobile: "url('/home/background-home-mobile.jpg')",
        home_tablet: "url('/home/background-home-tablet.jpg')",
        destination_desktop: "url('/destination/background-destination-desktop.jpg')",
        destination_mobile: "url('/destination/background-destination-mobile.jpg')",
        destination_tablet: "url('/destination/background-destination-tablet.jpg')",
        crew_desktop: "url('/crew/background-crew-desktop.jpg')",
        crew_mobile: "url('/crew/background-crew-mobile.jpg')",
        crew_tablet: "url('/crew/background-crew-tablet.jpg')",
        technology_desktop: "url('/technology/background-technology-desktop.jpg')",
        technology_mobile: "url('/technology/background-technology-mobile.jpg')",
        technology_tablet: "url('/technology/background-technology-tablet.jpg')",
      },
      textColor: {
        dark_blue: "#0B0D17",
        light_blue: "#D0D6F9",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};

export default config;
