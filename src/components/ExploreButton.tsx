import Link from "next/link";

export function ExploreButton() {
  return (
    <Link className="mt-16 flex justify-center md:w-1/2" href="/destination">
      <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full bg-white font-bellefair text-xl font-normal tracking-widest text-gray-950 hover:cursor-pointer hover:ring-[50px] hover:ring-white hover:ring-opacity-20 md:h-[274px] md:w-[274px] md:text-[32px]">
        EXPLORE
      </div>
    </Link>
  );
}
