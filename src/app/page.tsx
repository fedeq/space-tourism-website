export default function Home() {
  return (
    <div className="container mx-auto flex h-full flex-col items-center justify-evenly px-6 md:px-0 md:py-20 xl:flex-row xl:items-end ">
      <div className="flex flex-col text-center xl:w-1/2 xl:text-left">
        <div className="font-barlow_condensed font-normal tracking-[4.72px] text-indigo-200 md:text-[28px]">
          SO, YOU WANT TO TRAVEL TO
        </div>
        <div className="font-bellefair text-[80px] font-normal text-white md:text-[150px]">
          SPACE
        </div>
        <div className="font-barlow max-w-[444px] text-[15px] font-normal leading-[25px] leading-loose text-indigo-200 md:text-lg">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space
          and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a
          truly out of this world experience!
        </div>
      </div>
      <div className="mt-10 flex w-1/2 justify-center">
        <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white hover:cursor-pointer hover:ring-[50px] hover:ring-white hover:ring-opacity-20 md:h-[274px] md:w-[274px]">
          <div className="font-bellefair text-xl font-normal tracking-widest text-gray-950 md:text-[32px]">
            EXPLORE
          </div>
        </div>
      </div>
    </div>
  );
}
