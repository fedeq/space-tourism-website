"use client";
import {useState} from "react";

import {Header} from "@/components/Header";
import { useSwipeable } from "react-swipeable";

const tech = [
  {
    name: "Launch Vehicle",
    info: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    imagePortrait: "/technology/image-launch-vehicle-portrait.jpg",
    imageLandscape: "/technology/image-launch-vehicle-landscape.jpg",
  },
  {
    name: "Spaceport",
    info: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    imagePortrait: "/technology/image-spaceport-portrait.jpg",
    imageLandscape: "/technology/image-spaceport-landscape.jpg",
  },
  {
    name: "Space Capsule",
    info: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    imagePortrait: "/technology/image-space-capsule-portrait.jpg",
    imageLandscape: "/technology/image-space-capsule-landscape.jpg",
  },
];

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState(0);
  const handlers = useSwipeable({
    onSwipedRight: (eventData) => setSelectedTech((currentTech) => (currentTech - 1 + tech.length) % tech.length),
    onSwipedLeft: (eventData) => setSelectedTech((currentTech) => (currentTech + 1) % tech.length),
  });
  const imageUrl = tech[selectedTech].imageLandscape;

  return (
    <div className="xl:bg-technology_desktop bg-technology_mobile sm:bg-technology_tablet grid min-h-screen grid-rows-[auto,1fr] bg-cover bg-center bg-no-repeat">
      <Header />
      <main className="pb-6 xl:pl-36">
        <header>
          <h1 className="mb-8 text-center text-base md:my-10 md:ml-12 md:text-left md:text-xl xl:my-5 xl:ml-0 xl:text-[28px]">
            <span className="font-barlow_condensed font-bold tracking-[4.72px] text-white opacity-25">
              03
            </span>
            <span className="font-barlow_condensed ml-6 font-normal uppercase tracking-[4.72px] text-white">
              space launch 101
            </span>
          </h1>
        </header>
        <div {...handlers} className="flex flex-col items-center gap-4 md:gap-10 xl:grid xl:h-[800px] xl:grid-cols-8">
          <div
            className="flex h-60 w-full items-center justify-center bg-cover bg-center bg-no-repeat md:h-96 xl:hidden"
            style={{backgroundImage: `url(${imageUrl})`}}
          />
          <nav className="font-bellefair my-6 flex gap-10 text-base md:text-2xl xl:my-0 xl:flex-col">
            <button
              className={`flex h-14 w-14 items-center justify-center rounded-full border border-white hover:bg-indigo-50 hover:text-black xl:h-20 xl:w-20 ${selectedTech == 0 ? 'bg-white text-black' : ''}`}
              type="button"
              onClick={() => setSelectedTech(0)}
            >
              1
            </button>
            <button
              className={`flex h-14 w-14 items-center justify-center rounded-full border border-white hover:bg-indigo-50 hover:text-black xl:h-20 xl:w-20 ${selectedTech == 1 ? 'bg-white text-black' : ''}`}
              type="button"
              onClick={() => setSelectedTech(1)}
            >
              2
            </button>
            <button
              className={`flex h-14 w-14 items-center justify-center rounded-full border border-white hover:bg-indigo-50 hover:text-black xl:h-20 xl:w-20 ${selectedTech == 2 ? 'bg-white text-black' : ''} `}
              type="button"
              onClick={() => setSelectedTech(2)}
            >
              3
            </button>
          </nav>
          <section className="col-span-4 flex text-center xl:text-left">
            <article className="flex flex-col gap-4">
              <h3 className="font-barlow_condensed text-sm font-normal tracking-[2.70px] text-indigo-200 md:text-base">
                THE TERMINOLOGY…
              </h3>
              <h2 className="font-bellefair text-2xl font-normal uppercase text-white md:text-4xl xl:text-[56px]">
                {tech[selectedTech].name}
              </h2>
              <p className="font-barlow px-6 text-sm font-thin leading-6 text-indigo-200 md:w-[444px] md:px-0 md:text-base md:leading-7 xl:text-lg xl:leading-loose">
                {tech[selectedTech].info}
              </p>
            </article>
          </section>
          <section className="col-span-3 hidden xl:flex">
            <img alt="Launch Vehicle" src={tech[selectedTech].imagePortrait} />
          </section>
        </div>
      </main>
    </div>
  );
}
