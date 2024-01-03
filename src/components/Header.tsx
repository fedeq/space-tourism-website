"use client";

import Image from "next/image";
import Link from "next/link";
import {useState} from "react";

import {HamburgerIcon} from "./HamburgerIcon";
import {CloseIcon} from "./CloseIcon";
import {NavLinks} from "./NavLinks";

export const navLinks = [
  {
    number: "00",
    text: "Home",
    href: "/",
  },
  {
    number: "01",
    text: "Destination",
    href: "/destination",
  },
  {
    number: "02",
    text: "Crew",
    href: "/crew",
  },
  {
    number: "03",
    text: "Technology",
    href: "/technology",
  },
];

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

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
          <HamburgerIcon />
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
              <CloseIcon />
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
