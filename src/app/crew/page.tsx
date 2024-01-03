"use client";

import {Header} from "@/components/Header";
import {CrewMemberSlides} from "@/components/CrewMemberSlides";

export const crew = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    image: "/crew/image-douglas-hurley.webp",
    info: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former
    NASA astronaut. He launched into space for the third time as commander of Crew
    Dragon Demo-2.`,
  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    image: "/crew/image-mark-shuttleworth.webp",
    info: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    image: "/crew/image-victor-glover.webp",
    info: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. `,
  },
  {
    name: "Anousheh Ansari",
    role: "Mission Specialist",
    image: "/crew/image-anousheh-ansari.webp",
    info: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. `,
  },
];

export default function Crew() {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr] bg-crew_mobile bg-cover bg-center bg-no-repeat sm:bg-crew_tablet xl:bg-crew_desktop">
      <Header />
      <main>
        <CrewMemberSlides />
      </main>
    </div>
  );
}
