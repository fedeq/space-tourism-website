"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {navLinks} from "./Header";

export function NavLinks() {
  // get current url
  const pathname = usePathname();

  return navLinks.map(({href, number, text}) => (
    <NavLink key={href} href={href} isActive={pathname == href} number={number} text={text} />
  ));
}
function NavLink({
  href,
  number,
  text,
  isActive,
}: {
  href: string;
  number: string;
  text: string;
  isActive: boolean;
}) {
  return (
    <Link
      className={`flex items-center border-transparent hover:border-white hover:border-opacity-50 ${
        isActive ? "border-white border-opacity-100" : ""
      }`}
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
