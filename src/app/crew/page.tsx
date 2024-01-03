"use client";
import Image from "next/image";
import {useState} from "react";

import {Header} from "@/components/Header";

const crew = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    image: "/crew/image-douglas-hurley.png",
    info: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former
    NASA astronaut. He launched into space for the third time as commander of Crew
    Dragon Demo-2.`,
  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    image: "/crew/image-mark-shuttleworth.png",
    info: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.`,
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    image: "/crew/image-victor-glover.png",
    info: `Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. `,
  },
  {
    name: "Anousheh Ansari",
    role: "Mission Specialist",
    image: "/crew/image-anousheh-ansari.png",
    info: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. `,
  },
];

export default function Crew() {
  const [crewMember, setCrewMember] = useState(0);

  const crewMemberSelector = (
    <>
      <button
        className={`h-2.5 w-2.5 rounded-full xl:h-[15px] xl:w-[15px] ${
          crewMember == 0 ? "bg-white" : "bg-indigo-200"
        }`}
        type="button"
        onClick={() => setCrewMember(0)}
      />
      <button
        className={`h-2.5 w-2.5 rounded-full xl:h-[15px] xl:w-[15px] ${
          crewMember == 1 ? "bg-white" : "bg-indigo-200"
        }`}
        type="button"
        onClick={() => setCrewMember(1)}
      />
      <button
        className={`h-2.5 w-2.5 rounded-full xl:h-[15px] xl:w-[15px] ${
          crewMember == 2 ? "bg-white" : "bg-indigo-200"
        }`}
        type="button"
        onClick={() => setCrewMember(2)}
      />
      <button
        className={`h-2.5 w-2.5 rounded-full xl:h-[15px] xl:w-[15px] ${
          crewMember == 3 ? "bg-white" : "bg-indigo-200"
        }`}
        type="button"
        onClick={() => setCrewMember(3)}
      />
    </>
  );

  return (
    <div className="xl:bg-crew_desktop bg-crew_mobile sm:bg-crew_tablet grid min-h-screen grid-rows-[auto,1fr] bg-cover bg-center bg-no-repeat">
      <Header />
      <main>
        <div className="grid h-full grid-cols-1 gap-10 xl:grid-cols-2 xl:gap-0">
          <div className="flex flex-col items-center text-center text-base md:ml-12 md:mt-10 md:items-start md:text-left md:text-xl xl:ml-36 xl:text-[28px]">
            <div>
              <span className="font-barlow_condensed font-bold tracking-[4.72px] text-white opacity-25">
                02
              </span>
              <span className="font-barlow_condensed ml-6 font-normal uppercase tracking-[4.72px] text-white">
                Meet your crew
              </span>
            </div>
            <div className="mt-8 flex h-[40%] w-[90%] items-end justify-center border-b border-b-gray-700 md:hidden">
              <img alt="Crew" className="mt-10 px-20 md:px-0" src={crew[crewMember].image} />
            </div>
            <div className="flex gap-6 py-5 md:hidden">{crewMemberSelector}</div>
            <div className="mt-4 flex w-full flex-col items-center justify-center md:mt-14 md:h-[270px] xl:mt-0 xl:h-full xl:items-start">
              <div className="font-bellefair text-base font-normal uppercase text-white opacity-50 md:text-2xl xl:text-[32px]">
                {crew[crewMember].role}
              </div>
              <div className="font-bellefair mt-2 inline-block text-2xl font-normal uppercase text-white md:mt-4 md:text-[40px] xl:mt-8 xl:text-[56px]">
                {crew[crewMember].name}
              </div>
              <p className="font-barlow mt-4 px-4 text-center text-sm font-thin leading-loose text-indigo-200 md:mt-8 md:w-[444px] md:px-0 md:text-base xl:mt-12 xl:text-left xl:text-lg">
                {crew[crewMember].info}
              </p>
              <div className="hidden md:mt-12 md:flex md:gap-6 xl:mt-20">{crewMemberSelector}</div>
            </div>
          </div>
          <div className="hidden justify-center md:flex">
            <img alt="Crew" className="mt-10 px-20 md:px-0" src={crew[crewMember].image} />
          </div>
        </div>
      </main>
    </div>
  );
}
