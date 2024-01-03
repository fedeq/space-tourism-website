import {Header} from "@/components/Header";
import {TechSlides} from "@/components/TechSlides";

export const tech = [
  {
    name: "Launch Vehicle",
    info: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    imagePortrait: "/technology/image-launch-vehicle-portrait.webp",
    imageLandscape: "/technology/image-launch-vehicle-landscape.webp",
  },
  {
    name: "Spaceport",
    info: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.`,
    imagePortrait: "/technology/image-spaceport-portrait.webp",
    imageLandscape: "/technology/image-spaceport-landscape.webp",
  },
  {
    name: "Space Capsule",
    info: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`,
    imagePortrait: "/technology/image-space-capsule-portrait.webp",
    imageLandscape: "/technology/image-space-capsule-landscape.webp",
  },
];

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
