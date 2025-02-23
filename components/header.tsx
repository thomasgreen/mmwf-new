"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "@/public/favicon_compressed.png"; // Ensure this is in `public/`

interface HeaderProps {
  siteTitle?: string;
}

export default function Header({ siteTitle = "" }: HeaderProps) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <nav className="bg-teal-600 shadow-lg text-white">
      <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto p-4 md:p-8">
        {/* Logo & Title */}
        <Link href="/" className="flex items-center no-underline text-white max-w-3/4">
          <Image className="w-16 mr-2" src={logo} alt="Madeleine Mary Walker Logo" width={64} height={64} />
          <span className="font-bold text-2xl tracking-tight">
            {siteTitle}{" "}
            <span className="text-xs hidden lg:inline">Reg Charity Commission No. 1062657</span>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => setExpanded(!isExpanded)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        {/* Navigation Links */}
        <div className={`${isExpanded ? "block" : "hidden"} md:block md:flex md:items-center w-full md:w-auto`}>
          <div className="text-sm">
            <Link href="/" className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white font-semibold select-none">
              Home
            </Link>
            <Link href="/about" className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white font-semibold select-none">
              About Madeleine
            </Link>
            <Link
              href="/apply"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-white font-semibold border border-white hover:border-transparent hover:text-teal-600 hover:bg-white rounded px-4 py-2 select-none"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
