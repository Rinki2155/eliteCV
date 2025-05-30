"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSession, getSession } from "next-auth/react";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  if (status === "loading") return <div>Loading...</div>;

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
      href: "/score-resume",
      bg: "bg-gradient-to-r from-pink-500 to-purple-500",
    },
    {
      name: "Targeted Resume",
      description: "Tailor your resume to a job description",
      image: "/images/resume.png",
      href: "/target-resume",
      bg: "bg-gradient-to-r from-teal-400 to-blue-500",
    },
    {
      name: "LinkedIn Review",
      description: "Optimize your LinkedIn profile in seconds",
      image: "/images/resume.png",
      href: "/linkedin-review",
      bg: "bg-gradient-to-r from-indigo-500 to-purple-700",
    },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-1/2 overflow-y-auto  p-8 text-white">
        <h1 className="text-3xl font-bold mb-4">
          Good afternoon, {session?.user?.name}.{" "}
        </h1>
        <p className="mb-6">Welcome back to your career toolkit.</p>

        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {quickLinks.map((link) => (
            <div className={`rounded-xl p-4 text-center text-white ${link.bg}`}>
              <Link href={link.href} key={link.name}>
                <div className="cursor-pointer">
                  <Image
                    src={link.image}
                    alt={link.name}
                    width={50}
                    height={50}
                    className="mx-auto mb-2"
                  />
                </div>

                <p className="text-sm font-semibold">{link.name}</p>
                <p className="text-xs">{link.description}</p>
              </Link>
            </div>
          ))}
        </div>
        <h3 className="text-sm font-bold mb-2">Dashboard</h3>
        <div className="w-full max-w-xs py-5">
          {menuItems.map((item, index) => {
            const gradients = [
              "from-pink-500 to-purple-500",
              "from-blue-500 to-green-500",
              "from-yellow-500 to-red-500",
              "from-indigo-500 to-purple-600",
              "from-teal-500 to-cyan-600",
              "from-orange-500 to-pink-500",
              "from-lime-500 to-emerald-500",
            ];

            const baseGradient = gradients[index % gradients.length];
            const isActive = pathname === item.href;

            return (
              <div key={item.name} className="mb-4">
                <Link href={item.href}>
                  <button
                    className={`w-full text-left px-6 py-4 rounded-xl text-white transition 
              ${
                isActive
                  ? "bg-blue-700"
                  : `bg-gradient-to-r ${baseGradient} hover:from-blue-500 hover:to-indigo-600`
              }`}
                  >
                    {item.name}
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Content */}
      <div className="w-1/2 overflow-y-auto bg-[#F3F4FF] p-8 rounded-xl mr-[1%]">
        <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-xl mb-6">
          <p className="text-yellow-800 font-semibold">
            OFFER: GET <span className="underline">75% OFF</span> EliteCV
            PRO
          </p>
          <p className="text-yellow-900 text-sm mt-2">
            Unlock AI-powered resume writing, unlimited reviews, ATS
            optimization, industry-specific templates, and expert tools. Proven
            to get you more interviews.
          </p>
          <button className="mt-3 bg-yellow-400 text-white px-4 py-2 rounded">3
            UPGRADE TO PRO
          </button>
          <p className="text-yellow-800 text-xs mt-1">
            * Limited Time Bonus: You'll also get access to our LinkedIn
            optimization suite (worth $49) for free.
          </p>
        </div>
        <h2 className="text-xl font-semibold mb-2 text-[black]">Track your progress</h2>
        <p className="text-sm mb-6 text-[black]">
          Our tools will guide you through the process of creating your{" "}
          <span className="font-semibold">most effective</span> resume and
          LinkedIn profile. To make the most out of them, follow the steps
          below.
        </p>
        <div className="bg-white p-4 rounded-xl shadow mb-4">
          <p className="text-sm font-semibold">OVERALL RESUME SCORE</p>
          <div className="flex items-center justify-between mt-2">
            <p className="text-sm">
              Your resume scored 27 out of 100. Aim for a score of 85+.
            </p>
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-xl font-bold">
              27/100
            </span>
          </div>
          <Link href="/uploadResume">
            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded">
              UPLOAD RESUME
            </button>
          </Link>
        </div>
        <div className="bg-white p-4 rounded-xl shadow mb-4">
          <p className="text-sm font-semibold text-purple-700">
            TARGETED RESUME SCORE
          </p>
          <p className="text-sm mt-2">
            You have not tried this tool yet. Your resume may be missing
            important keywords. Match it to a job posting to fix.
          </p>
          <Link href="/target-resume">
            <button className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded">
              🎯 TARGET YOUR RESUME
            </button>
          </Link>
        </div>
        <div className="bg-white p-4 rounded-xl shadow mb-4">
          <p className="text-sm font-semibold text-purple-700">
            LINKEDIN PROFILE SCORE
          </p>
          <p className="text-sm mt-2">
            You have not optimized your LinkedIn profile yet. You might be
            missing out on opportunities from recruiters.
          </p>
          <Link href="/linkedin-review">
            <button className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded">
              🔍 REVIEW PROFILE
            </button>
          </Link>
        </div>
        <div className="bg-white p-4 rounded-xl shadow mb-4">
          <p className="text-sm font-semibold text-purple-700">
            LINKEDIN PROFILE SCORE
          </p>
          <p className="text-sm mt-2">
            You have not optimized your LinkedIn profile yet. You might be
            missing out on opportunities from recruiters.
          </p>
          <Link href="/linkedin-review">
            <button className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded">
              🔍 REVIEW PROFILE
            </button>
          </Link>
        </div>{" "}
        <div className="bg-white p-4 rounded-xl shadow mb-4">
          <p className="text-sm font-semibold text-purple-700">
            LINKEDIN PROFILE SCORE
          </p>
          <p className="text-sm mt-2">
            You have not optimized your LinkedIn profile yet. You might be
            missing out on opportunities from recruiters.
          </p>
          <Link href="/linkedin-review">
            <button className="mt-4 bg-gray-200 text-gray-800 px-4 py-2 rounded">
              🔍 REVIEW PROFILE
            </button>
          </Link>
        </div>
        <div className="fixed bottom-4 right-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full">
            Help
          </button>
        </div>
      </div>
    </div>
  );
}
