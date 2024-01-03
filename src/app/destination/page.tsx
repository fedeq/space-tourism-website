"use client";
import {type} from "os";

import {Header} from "@/components/Header";
import {DestinationTabs} from "@/components/DestinationTabs";

type Destination = "moon" | "europa" | "titan" | "mars";

interface DestinationTab {
  destinationName: string;
  image: string;
  details: string;
  avgDistance: string;
  estTravelTime: string;
}

export const tabs: DestinationTab[] = [
  {
    destinationName: "Mars",
    image: "/destination/image-mars.webp",
    details: `Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the
    tallest planetary mountain in our solar system. It’s two and a half times the size of
    Everest!`,
    avgDistance: "225 MIL. km",
    estTravelTime: "9 MONTHS",
  },
  {
    destinationName: "Europa",
    image: "/destination/image-europa.webp",
    details: `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`,
    avgDistance: "628 MIL. km",
    estTravelTime: "3 years",
  },
  {
    destinationName: "Titan",
    image: "/destination/image-titan.webp",
    details: `The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.`,
    avgDistance: "1.6 BIL. km",
    estTravelTime: "7 years",
  },
  {
    destinationName: "Moon",
    image: "/destination/image-moon.webp",
    details: `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`,
    avgDistance: "384,400 km",
    estTravelTime: "3 days",
  },
];

export default function Destination() {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr] bg-destination_mobile bg-cover bg-center bg-no-repeat sm:bg-destination_tablet xl:bg-destination_desktop">
      <Header />
      <main>
        <h1 className="mt-5 text-center text-base md:ml-12 md:mt-10 md:text-left md:text-xl xl:ml-36 xl:text-[28px]">
          <span className="font-barlow_condensed font-bold tracking-[4.72px] text-white opacity-25">
            01
          </span>
          <span className="ml-6 font-barlow_condensed font-normal uppercase tracking-[4.72px] text-white">
            Pick your destination
          </span>
        </h1>
        <DestinationTabs />
      </main>
    </div>
  );
}
