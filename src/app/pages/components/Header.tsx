"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  const isLoggedIn = status === "authenticated";

  return (
    <header className="w-full flex justify-between items-center px-8 py-4 border-b border-gray-700 bg-[#c9e4ca] relative z-50">
      <Link href="/">
        <div className="text-white text-xl font-bold tracking-wide cursor-pointer">
          <Image
            src="/images/newlogo.png"
            height={150}
            width={150}
            alt="Logo"
          />
        </div>
      </Link>

      <nav className="flex items-center space-x-6 text-gray-200 ml-[-50%]">
        {/* Example dropdown menu (commented out for now) */}

        {/* LOGIN */}
        {!isLoggedIn && (
          <Link href="/login">
            <div className="cursor-pointer hover:text-[green] text-black">
              Login
            </div>
          </Link>
        )}

        {/* LOGOUT */}
        {isLoggedIn && (
         <>
           <button
              onClick={() => router.push("/HomePage")}
              className="cursor-pointer hover:text-green-700 text-black"
            >
              Dashboard
            </button>

            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="cursor-pointer hover:text-red-600 text-black"
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
