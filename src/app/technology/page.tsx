import {Header} from "@/components/Header";
import {TechSlides} from "@/components/TechSlides";

export default function Technology() {
  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr] bg-technology_mobile bg-cover bg-center bg-no-repeat sm:bg-technology_tablet xl:bg-technology_desktop">
      <Header />
      <main className="pb-6 xl:pl-36">
        <header>
          <h1 className="mb-8 text-center text-base md:my-10 md:ml-12 md:text-left md:text-xl xl:my-5 xl:ml-0 xl:text-[28px]">
            <span className="font-barlow_condensed font-bold tracking-[4.72px] text-white opacity-25">
              03
            </span>
            <span className="ml-6 font-barlow_condensed font-normal uppercase tracking-[4.72px] text-white">
              space launch 101
            </span>
          </h1>
        </header>
        <TechSlides />
      </main>
    </div>
  );
}
