"use client";
import Image from "next/image";
import {useState} from "react";
import {useSwipeable} from "react-swipeable";

interface DestinationTab {
  destinationName: string;
  image: string;
  details: string;
  avgDistance: string;
  estTravelTime: string;
}

const tabs: DestinationTab[] = [
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

export function DestinationTabs() {
  const [destination, setDestination] = useState(0);
  const handlers = useSwipeable({
    onSwipedRight: () =>
      setDestination((currentDestination) => (currentDestination - 1 + tabs.length) % tabs.length),
    onSwipedLeft: () =>
      setDestination((currentDestination) => (currentDestination + 1) % tabs.length),
  });

  return (
    <div {...handlers} className="grid grid-cols-1 gap-10 pt-10 md:pt-20 xl:grid-cols-2 xl:gap-0">
      <div className="mx-auto flex flex-col overflow-hidden">
        <Image
          key={tabs[destination].destinationName}
          alt="Destination"
          className="animate-fade px-20 md:px-0 xl:mt-20"
          height={400}
          src={tabs[destination].image}
          width={400}
        />
      </div>
      <div className="flex flex-col items-center gap-10 px-10 xl:items-start">
        <div className="flex gap-8">
          <button
            className={`border-b-4 font-barlow_condensed ${
              destination == 0 ? "border-white text-white" : "border-transparent text-indigo-200"
            } py-2 text-sm font-normal tracking-[2.70px] hover:border-indigo-200  md:text-base`}
            type="button"
            onClick={() => setDestination(0)}
          >
            MOON
          </button>
          <button
            className={`border-b-4 font-barlow_condensed ${
              destination == 1 ? "border-white text-white" : "border-transparent text-indigo-200"
            } py-2 text-sm font-normal tracking-[2.70px] text-indigo-200 hover:border-indigo-200 md:text-base`}
            type="button"
            onClick={() => setDestination(1)}
          >
            MARS
          </button>
          <button
            className={`border-b-4 font-barlow_condensed ${
              destination == 2 ? "border-white text-white" : "border-transparent text-indigo-200"
            } py-2 text-sm font-normal tracking-[2.70px] text-indigo-200 hover:border-indigo-200 md:text-base`}
            type="button"
            onClick={() => setDestination(2)}
          >
            EUROPA
          </button>
          <button
            className={`border-b-4 font-barlow_condensed ${
              destination == 3 ? "border-white text-white" : "border-transparent text-indigo-200"
            } py-2 text-sm font-normal tracking-[2.70px] text-indigo-200 hover:border-indigo-200 md:text-base`}
            type="button"
            onClick={() => setDestination(3)}
          >
            TITAN
          </button>
        </div>
        <div className="font-bellefair text-[56px] font-normal uppercase text-white md:text-[100px]">
          {tabs[destination].destinationName}
        </div>
        <p className="w-[327px] text-center font-barlow text-[15px] font-thin leading-loose text-indigo-200 md:w-[573px] md:text-lg xl:w-[444px] xl:text-left">
          {tabs[destination].details}
        </p>
        <div className="h-px w-[327px] bg-gray-700 md:w-[573px] xl:w-[444px]" />
        <div className="grid w-[327px] grid-cols-1 justify-evenly gap-10 text-center md:w-[573px] md:grid-cols-2 xl:w-[444px] xl:justify-start xl:gap-20 xl:text-left">
          <div className="flex flex-col gap-2">
            <div className="font-barlow_condensed text-sm font-thin uppercase tracking-widest text-indigo-200">
              AVG. DISTANCE
            </div>
            <div className="font-bellefair text-[28px] font-normal uppercase text-white">
              {tabs[destination].avgDistance}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="font-barlow_condensed text-sm font-thin uppercase tracking-widest text-indigo-200">
              EST. TRAVEL TIME
            </div>
            <div className="font-bellefair text-[28px] font-normal uppercase text-white">
              {tabs[destination].estTravelTime}
            </div>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}
