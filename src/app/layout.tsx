import type {Metadata} from "next";

import "./globals.css";

import {barlow_condensed, bellefair} from "./fonts";

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Made by @fedeq",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html className={`${bellefair.variable} ${barlow_condensed.variable} `} lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
