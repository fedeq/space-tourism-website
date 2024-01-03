import {Header} from "@/components/Header";
import {DestinationTabs} from "@/components/DestinationTabs";

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
