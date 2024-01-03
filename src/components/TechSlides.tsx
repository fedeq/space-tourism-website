"use client";
import {useState} from "react";
import {useSwipeable} from "react-swipeable";

import {tech} from "../app/technology/page";

export function TechSlides() {
  const [selectedTech, setSelectedTech] = useState(0);
  const handlers = useSwipeable({
    onSwipedRight: () =>
      setSelectedTech((currentTech) => (currentTech - 1 + tech.length) % tech.length),
    onSwipedLeft: () => setSelectedTech((currentTech) => (currentTech + 1) % tech.length),
  });
  const imageUrl = tech[selectedTech].imageLandscape;

  return (
    <div
      {...handlers}
      className="flex flex-col items-center gap-4 md:gap-10 xl:grid xl:h-[800px] xl:grid-cols-8"
    >
      <div
        key={tech[selectedTech].name}
        className="flex h-60 w-full animate-fade items-center justify-center bg-cover bg-center bg-no-repeat md:h-96 xl:hidden"
        style={{backgroundImage: `url(${imageUrl})`}}
      />
      <nav className="my-6 flex gap-10 font-bellefair text-base md:text-2xl xl:my-0 xl:flex-col">
        <button
          className={`flex h-14 w-14 items-center justify-center rounded-full border border-white hover:bg-indigo-50 hover:text-black xl:h-20 xl:w-20 ${
            selectedTech == 0 ? "bg-white text-black" : ""
          }`}
          type="button"
          onClick={() => setSelectedTech(0)}
        >
          1
        </button>
        <button
          className={`flex h-14 w-14 items-center justify-center rounded-full border border-white hover:bg-indigo-50 hover:text-black xl:h-20 xl:w-20 ${
            selectedTech == 1 ? "bg-white text-black" : ""
          }`}
          type="button"
          onClick={() => setSelectedTech(1)}
        >
          2
        </button>
        <button
          className={`flex h-14 w-14 items-center justify-center rounded-full border border-white hover:bg-indigo-50 hover:text-black xl:h-20 xl:w-20 ${
            selectedTech == 2 ? "bg-white text-black" : ""
          } `}
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
          <p className="px-6 font-barlow text-sm font-thin leading-6 text-indigo-200 md:w-[444px] md:px-0 md:text-base md:leading-7 xl:text-lg xl:leading-loose">
            {tech[selectedTech].info}
          </p>
        </article>
      </section>
      <section className="col-span-3 hidden xl:flex">
        <img alt="Launch Vehicle" src={tech[selectedTech].imagePortrait} />
      </section>
    </div>
  );
}
