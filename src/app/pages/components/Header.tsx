"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://ai-cv-builder-be.fly.dev";

const API_ENDPOINTS = {
  VERIFY_EMAIL: `${API_BASE_URL}/auth/verify-email`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
};

export default function Header() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [tokenSet, setTokenSet] = useState(false);

  const isLoading = status === "loading";
  const isLoggedIn = status === "authenticated";

  const handleLogoClick = () => {
    router.push(isLoggedIn ? "/HomePage" : "/LandingPages");
  };

  const handleLogin = () => {
    signIn("google", { callbackUrl: "/HomePage" });
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("access_token");
      if (token) {
        const res = await fetch(API_ENDPOINTS.LOGOUT, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) throw new Error("Logout failed");
        console.log("✅ Logout API successful");
      }
    } catch (error) {
      console.error("❌ Logout API call failed:", error);
    } finally {
      localStorage.removeItem("access_token");
      signOut({ callbackUrl: "/LandingPages", redirect: true });
    }
  };

  // ✅ Auto JWT token issue after Google login
  useEffect(() => {
    const verifyEmail = async () => {
      if (!session?.user || tokenSet) return;

      const [firstName = "", lastName = ""] =
        session.user.name?.split(" ") || [];

      try {
        const res = await fetch(API_ENDPOINTS.VERIFY_EMAIL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa("admin:securepassword"),
          },
          body: JSON.stringify({
            email: session.user.email,
            first_name: firstName,
            last_name: lastName,
            phone: "0000000000",
          }),
        });

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`Verify email failed: ${res.status} ${errorText}`);
        }

        const data = await res.json();
        if (data?.access_token) {
          localStorage.setItem("access_token", data.access_token);
          setTokenSet(true);
          console.log("🎫 JWT received:", data.access_token);
        } else {
          throw new Error("Access token not received");
        }
      } catch (err) {
        console.error("❌ Email verification failed:", err);
      }
    };

    if (isLoggedIn) {
      verifyEmail();
    }
  }, [isLoggedIn, session, tokenSet]);

  // ✅ Redirect guest users away from protected routes
  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      const protectedRoutes = ["/uploadResume", "/HomePage"];
      if (protectedRoutes.includes(pathname)) {
        router.push("/LandingPages");
      }
    }
  }, [isLoggedIn, isLoading, pathname, router]);

  const navButtons = [];

  if (!isLoading && !isLoggedIn) {
    navButtons.push({
      label: "Login",
      onClick: () => router.push("/login"),
      // onClick: handleLogin,
      className: "hover:text-green-700",
    });
  }

  if (isLoggedIn) {
    if (pathname === "/uploadResume") {
      navButtons.push({
        label: "Dashboard",
        onClick: () => router.push("/HomePage"),
        className: "hover:text-blue-700",
      });
    }
    navButtons.push({
      label: "Logout",
      onClick: handleLogout,
      className: "hover:text-red-600",
    });
  }

  return (
    <header className="w-full flex justify-between items-center px-8 py-4 border-b border-gray-700 bg-[#c2b0de] relative z-50">
      <div onClick={handleLogoClick} className="cursor-pointer">
        <Image
          src="/images/newlogo.png"
          height={100}
          width={100}
          alt="Logo"
          priority
        />
      </div>

      <nav className="flex items-center space-x-6">
        {isLoading ? (
          <span className="text-gray-500">Loading...</span>
        ) : (
          navButtons.map(({ label, onClick, className }) => (
            <button
              key={label}
              onClick={onClick}
              className={`cursor-pointer text-black text-lg font-medium ${className}`}
            >
              {label}
            </button>
          ))
        )}
      </nav>
    </header>
  );
}
