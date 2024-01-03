import {Header} from "@/components/Header";

import {ExploreButton} from "../components/ExploreButton";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr] bg-home_mobile bg-cover bg-center bg-no-repeat sm:bg-home_tablet xl:bg-home_desktop">
      <Header />
      <main className="p-4">
        <div className="container mx-auto flex h-full flex-col items-center justify-evenly px-6 md:px-0 md:py-20 xl:flex-row xl:items-end ">
          <div className="flex flex-col text-center xl:w-1/2 xl:text-left">
            <div className="font-barlow_condensed text-base font-normal tracking-[2.70px] text-indigo-200  md:text-[28px] md:text-xl md:tracking-[4.72px] xl:text-3xl">
              SO, YOU WANT TO TRAVEL TO
            </div>
            <div className="font-bellefair text-[80px] font-normal text-white md:text-[150px]">
              SPACE
            </div>
            <div className="max-w-[444px] font-barlow text-sm font-normal leading-7 text-indigo-200 md:text-base xl:text-lg">
              Let’s face it; if you want to go to space, you might as well genuinely go to outer
              space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
              give you a truly out of this world experience!
            </div>
          </div>
          <ExploreButton />
        </div>
      </main>
    </div>
  );
}
