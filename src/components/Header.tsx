"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

export function Header() {
  // State to track if the nav menu is open or not
  const [isNavOpen, setIsNavOpen] = useState(false);

  // Function to toggle the nav menu
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="font-barlow_condensed xl:py-8">
      <nav className="ml-6 flex h-24 items-center justify-between md:ml-12">
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
          className="mr-6 inline-flex h-10 w-10 items-center justify-center p-2 text-sm text-white md:hidden"
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleNav}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-10 w-10"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {isNavOpen ? (
          <ul className="absolute right-0 top-0 z-10 flex h-screen w-[250px] flex-col gap-8 bg-white bg-opacity-5 py-6 uppercase backdrop-blur-md [&>a]:ml-8 [&>a]:border-r-4">
            <button
              className="ml-auto mr-6 inline-flex h-10 w-10 items-center justify-center text-sm text-white md:hidden"
              data-collapse-toggle="navbar-default"
              type="button"
              onClick={toggleNav}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <NavLinks />
          </ul>
        ) : null}
        <ul
          className="hidden flex-col items-center justify-center gap-8 bg-white bg-opacity-5 text-base uppercase tracking-[2.70px] shadow-md backdrop-blur-md md:flex md:h-full md:w-[450px] md:flex-row xl:w-[830px] xl:gap-12 [&>a]:h-full [&>a]:border-b-4"
          id="navbar-default"
        >
          <NavLinks />
        </ul>
      </nav>
    </header>
  );
}

function NavLinks() {
  return (
    <>
      <Link
        className="flex items-center border-transparent hover:border-white hover:border-opacity-50 active:border-opacity-100"
        href="/"
      >
        <div className="flex gap-2">
          <span className="font-barlow_condensed font-bold sm:block md:hidden xl:block">00</span>{" "}
          Home
        </div>
      </Link>
      <Link
        className="flex items-center border-transparent hover:border-white hover:border-opacity-50 active:border-opacity-100"
        href="/about"
      >
        <div className="flex gap-2">
          <span className="font-barlow_condensed font-bold sm:block md:hidden xl:block">01</span>{" "}
          Destination
        </div>
      </Link>
      <Link
        className="flex items-center border-transparent hover:border-white hover:border-opacity-50 active:border-opacity-100"
        href="/contact"
      >
        <div className="flex gap-2">
          <span className="font-barlow_condensed font-bold sm:block md:hidden xl:block">02</span>{" "}
          Crew
        </div>
      </Link>
      <Link
        className="flex items-center border-transparent hover:border-white hover:border-opacity-50 active:border-opacity-100"
        href="/contact"
      >
        <div className="flex gap-2">
          <span className="font-barlow_condensed font-bold sm:block md:hidden xl:block">03</span>{" "}
          Technology
        </div>
      </Link>
    </>
  );
}
