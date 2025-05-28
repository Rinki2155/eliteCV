"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="w-full flex justify-between items-center px-8 py-4 border-b border-gray-700 bg-[#c9e4ca] relative z-50">
      <Link href="/">
        <div className="text-white text-xl font-bold tracking-wide cursor-pointer">
          {/* Elite CV */}{" "}
          <Image
            src="/images/logo.png"
            height={150}
            width={150}
            alt="Logo"
          />
        </div>
      </Link>
      <nav className="flex items-center space-x-6 text-gray-200 ml-[-50%]">
        <div className="relative">
          {/* <div
            className="cursor-pointer hover:text-white"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            Products
            {showDropdown && (
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md py-2"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
              >
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Resume Review
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  LinkedIn Review
                </a>
              </div>
            )}
          </div> */}
        </div>

        <Link href="/login">
          <div className="cursor-pointer hover:text-[green] text-black">Login</div>
        </Link>
      </nav>
    </header>
  );
}
