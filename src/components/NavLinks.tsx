"use client";
import Link from "next/link";

import {navLinks} from "./Header";

export function NavLinks() {
  return navLinks.map(({href, number, text}) => (
    <NavLink key={href} href={href} number={number} text={text} />
  ));
}
function NavLink({href, number, text}: {href: string; number: string; text: string}) {
  return (
    <Link
      className="flex items-center border-transparent hover:border-white hover:border-opacity-50 active:border-white active:border-opacity-100"
      href={href}
    >
      <div className="flex gap-2">
        <span className="font-barlow_condensed font-bold sm:block md:hidden xl:block">
          {number}
        </span>{" "}
        {text}
      </div>
    </Link>
  );
}
