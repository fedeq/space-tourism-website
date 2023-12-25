import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="font-barlow_condensed xl:py-8">
      <div className="ml-6 flex h-24 items-center justify-between md:ml-12">
        <Link href="/">
          <Image
            alt="Space Tourism"
            className="shadow-2xl"
            height={48}
            src="/logo.svg"
            width={48}
          />
        </Link>
        <div className="z-40 -mr-10 ml-10 hidden h-px grow bg-white opacity-25 xl:block" />
        <button
          aria-controls="navbar-default"
          aria-expanded="false"
          className="mr-6 inline-flex h-10 w-10 items-center justify-center p-2 text-sm text-white md:hidden"
          data-collapse-toggle="navbar-default"
          type="button"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            aria-hidden="true"
            className="h-10 w-10"
            fill="none"
            viewBox="0 0 17 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1h15M1 7h15M1 13h15" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
        <nav
          className="hidden h-full items-center justify-center gap-8 bg-white bg-opacity-5 text-base uppercase tracking-[2.70px] shadow-md backdrop-blur-md md:flex md:w-[450px] xl:w-[830px] xl:gap-12"
          id="navbar-default"
        >
          <Link
            className="flex h-full items-center border-b-4 border-transparent hover:border-white hover:border-opacity-50 active:border-opacity-100"
            href="/"
          >
            <div className="flex gap-2">
              <span className="font-barlow_condensed hidden font-bold xl:block">00</span> Home
            </div>
          </Link>
          <Link
            className="flex h-full items-center border-b-4 border-transparent hover:border-white hover:border-opacity-50 active:border-opacity-100"
            href="/about"
          >
            <div className="flex gap-2">
              <span className="font-barlow_condensed hidden font-bold xl:block">01</span>{" "}
              Destination
            </div>
          </Link>
          <Link
            className="flex h-full items-center border-b-4 border-transparent hover:border-white hover:border-opacity-50 active:border-opacity-100"
            href="/contact"
          >
            <div className="flex gap-2">
              <span className="font-barlow_condensed hidden font-bold xl:block">02</span> Crew
            </div>
          </Link>
          <Link
            className="flex h-full items-center border-b-4 border-transparent hover:border-white hover:border-opacity-50 active:border-opacity-100"
            href="/contact"
          >
            <div className="flex gap-2">
              <span className="font-barlow_condensed hidden font-bold xl:block">03</span> Technology
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
}
