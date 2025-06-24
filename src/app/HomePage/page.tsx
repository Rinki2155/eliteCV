"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="text-center py-10 text-xl">Loading...</div>;
  }

  const menuItems = [
    { name: "Progress", href: "/progress" },
    { name: "Get Pro", href: "/get-pro" },
    { name: "Resumes", href: "/resumes" },
    { name: "Career Tools", href: "/career-tools" },
    { name: "LinkedIn", href: "/linkedin" },
    { name: "Help Center", href: "/help" },
    { name: "Feedback", href: "/feedback" },
    { name: "My Account", href: "/account" },
  ];

  const quickLinks = [
    {
      name: "Score My Resume",
      description: "Get expert feedback on your resume, instantly",
      image: "/images/resume.png",
      href: "/uploadResume",
      bg: "bg-[#cab3ee] hover:bg-[#b39cd6]",
      color: "text-[#2D2D2D]",
    },
    
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFF] grid grid-cols-1 md:grid-cols-2">
      {/* Left Sidebar */}
      <div className="w-full overflow-y-auto p-4 md:p-8 lg:p-16">
        <h1 className="text-3xl font-bold mb-4 text-[#2D2D2D]">
          Good afternoon, {session?.user?.name}.
        </h1>
        <p className="mb-6 text-[#845EC2]">
          Welcome back to your career toolkit.
        </p>

        <h2 className="text-xl font-semibold mb-4 text-[#666666]">
          Quick Links
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {quickLinks.map((link) => (
            <div
              className={`rounded-xl p-4 text-center text-white ${link.bg}`}
              key={link.name}
            >
              <Link href={link.href}>
                <div className="cursor-pointer">
                  <Image
                    src={link.image}
                    alt={link.name}
                    width={100}
                    height={100}
                    className="mx-auto mb-2"
                  />
                </div>
              </Link>
              <p className="text-2xl font-semibold">{link.name}</p>
              <p className="text-sm">{link.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-sm font-bold mb-2 text-[purple]">Dashboard</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {menuItems.map((item, index) => {
            const backgroundColor = [
              "#b49bdc",
              "#b49bdc",
              "#b49bdc",
              "#b49bdc",
              "#b49bdc",
              "#b49bdc",
              "#b49bdc",
            ];

            const baseColor = backgroundColor[index % backgroundColor.length];
            const isActive = pathname === item.href;

            return (
              <>
                {/* <Link href={item.href} key={item.name}>
                <button
                  className={`w-full text-left px-6 py-4 rounded-xl text-white transition
                    ${
                      isActive
                        ? "bg-blue-700"
                        : `bg-gradient-to-r ${baseGradient} hover:from-#b49bdc-500 hover:to-indigo-600`
                    }`}
                >
                  {item.name}
                </button>
              </Link> */}
                <Link href={item.href} key={item.name}>
                  <button
                    className={`w-full text-left px-6 py-4 rounded-xl text-[purple] transition`}
                    style={{
                      backgroundColor: isActive ? "#1e3a8a" : baseColor, // Tailwind's blue-700 for active
                    }}
                  >
                    {item.name}
                  </button>
                </Link>
              </>
            );
          })}
        </div>
      </div>

      {/* Right Content */}
      <div className="w-full overflow-y-auto bg-[#c2b0de] p-4 md:p-8">
        <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-xl mb-6">
          <p className="text-yellow-800 font-semibold">
            OFFER: GET <span className="underline">75% OFF</span> EliteCV PRO
          </p>
          <p className="text-yellow-900 text-sm mt-2">
            Unlock AI-powered resume writing, unlimited reviews, ATS
            optimization, industry-specific templates, and expert tools.
          </p>
          <button className="mt-3 bg-yellow-400 text-white px-4 py-2 rounded">
            3 UPGRADE TO PRO
          </button>
          <p className="text-yellow-800 text-xs mt-1">
            * Limited Time Bonus: You'll also get access to our LinkedIn suite.
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-2 text-black">
          Track your progress
        </h2>
        <p className="text-sm mb-6 text-black">
          Our tools will guide you through your{" "}
          <span className="font-semibold">most effective</span> resume and
          LinkedIn journey. Follow the steps below.
        </p>

        {[
          {
            title: "OVERALL RESUME SCORE",
            score: "27/100",
            scoreText:
              "Your resume scored 27 out of 100. Aim for a score of 85+.",
            buttonText: "UPLOAD RESUME",
            href: "/uploadResume",
            color: "bg-purple-600 text-white",
          },
          {
            title: "TARGETED RESUME SCORE",
            scoreText:
              "You have not tried this tool yet. Match it to a job posting to fix.",
            buttonText: "🎯 TARGET YOUR RESUME",
            href: "/target-resume",
            color: "bg-gray-200 text-gray-800",
          },
          {
            title: "LINKEDIN PROFILE SCORE",
            scoreText:
              "You have not optimized your LinkedIn profile yet. You might be missing out.",
            buttonText: "🔍 REVIEW PROFILE",
            href: "/linkedin-review",
            color: "bg-gray-200 text-gray-800",
          },
        ].map((section, i) => (
          <div className="bg-white p-4 rounded-xl shadow mb-4" key={i}>
            <p className="text-sm font-semibold text-purple-700">
              {section.title}
            </p>
            <p className="text-sm mt-2">{section.scoreText}</p>
            {section.score && (
              <div className="flex justify-between items-center mt-2">
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-xl font-bold">
                  {section.score}
                </span>
              </div>
            )}
            <Link href={section.href}>
              <button className={`mt-4 px-4 py-2 rounded ${section.color}`}>
                {section.buttonText}
              </button>
            </Link>
          </div>
        ))}

        <div className="fixed bottom-4 right-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
            Help
          </button>
        </div>
      </div>
    </div>
  );
}
