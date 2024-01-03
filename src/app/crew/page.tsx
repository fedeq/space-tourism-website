import {Header} from "@/components/Header";
import {CrewMemberSlides} from "@/components/CrewMemberSlides";

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
