import {Barlow, Barlow_Condensed, Bellefair} from "next/font/google";

export const bellefair = Bellefair({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-bellefair",
});

export const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-barlow-condensed",
});

export const barlow = Barlow({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-barlow",
});
