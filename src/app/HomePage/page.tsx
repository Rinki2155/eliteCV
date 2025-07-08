"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Footer from "../pages/components/Footer";
import Header from "../pages/components/Header";

export default function HomePage() {
  const { data: session, status } = useSession();
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("dashboard");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="text-center py-10 text-xl">Loading...</div>;
  }

  const menuItems = [
    { name: "Progress", key: "dashboard" },
    { name: "Get Pro", key: "getpro" },
    { name: "Resumes", key: "resumes" },
    { name: "Feedback", key: "feedback" },
    { name: "My Account", key: "myaccount" },
  ];

  const quickLinks = [
    {
      name: "Score My Resume",
      description: "Get expert feedback on your resume, instantly",
      image: "/images/resume.png",
      href: "/uploadResume",
      bg: "bg-[#cab3ee] hover:bg-[#AD45FF]",
      color: "text-[#2D2D2D]",
    },
    {
      name: "Targeted Resume",
      description: "Tailor your resume to a job description",
      image: "/images/target.jpeg",
      href: "/target-resume",
      bg: "bg-[#cab3ee] hover:bg-[#AD45FF]",
    },
  ];

  const progressSections = [
    {
      title: "OVERALL RESUME SCORE",
      score: "27/100",
      scoreText: "Your resume scored 27 out of 100. Aim for a score of 85+.",
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
      bg: "bg-[#cab3ee] hover:bg-[#AD45FF]",
    },
  ];

  return (
    <>
      <Header />
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
              const isActive = activeSection === item.key;
              return (
                <button
                  key={item.name}
                  onClick={() => setActiveSection(item.key)}
                  className={`w-full text-left px-6 py-4 rounded-xl transition ${
                    isActive
                      ? "bg-blue-800 text-white"
                      : "bg-[#b49bdc] text-[purple]"
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="min-h-screen bg-gradient-to-br from-purple-200 to-indigo-200 p-8 rounded-lg">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="w-full h-[90vh] overflow-y-auto bg-gradient-to-br from-purple-200 p-6 md:p-10">
              {activeSection === "dashboard" && (
                <>
                  <div className="bg-yellow-100 border-l-4 border-yellow-400 p-6 rounded-xl shadow-md mb-8">
                    <p className="text-yellow-800 font-bold text-lg">
                      OFFER: GET{" "}
                      <span className="underline font-extrabold">75% OFF</span>{" "}
                      EliteCV PRO
                    </p>
                    <p className="text-yellow-900 text-sm mt-2">
                      Unlock AI-powered resume writing, unlimited reviews, ATS
                      optimization, industry-specific templates, and expert
                      tools.
                    </p>
                    <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 transition text-white px-6 py-2 font-semibold rounded-lg shadow-md">
                      🚀 UPGRADE TO PRO
                    </button>
                    <p className="text-yellow-800 text-xs mt-2 italic">
                      * Limited Time Bonus: You'll also get access to our
                      LinkedIn suite.
                    </p>
                  </div>

                  <h2 className="text-2xl font-bold mb-3 text-black">
                    Track your progress
                  </h2>
                  <p className="text-base mb-8 text-gray-800">
                    Our tools will guide you through your{" "}
                    <span className="font-semibold">most effective</span> resume
                    and LinkedIn journey. Follow the steps below.
                  </p>

                  {progressSections.map((section, i) => (
                    <div
                      className="bg-white p-6 rounded-2xl shadow-lg mb-6 border border-gray-200 transition hover:shadow-xl"
                      key={i}
                    >
                      <p className="text-md font-semibold text-purple-800 uppercase tracking-wide">
                        {section.title}
                      </p>
                      <p className="text-sm mt-2 text-gray-700">
                        {section.scoreText}
                      </p>
                      {section.score && (
                        <div className="flex justify-between items-center mt-4">
                          <span className="bg-pink-100 text-pink-800 px-4 py-1 rounded-full font-bold text-sm">
                            {section.score}
                          </span>
                        </div>
                      )}
                      <Link href={section.href}>
                        <button
                          className={`mt-4 px-5 py-2 text-sm font-semibold rounded-lg shadow-md transition hover:opacity-90 ${section.color} ${section.bg}`}
                        >
                          {section.buttonText}
                        </button>
                      </Link>
                    </div>
                  ))}
                </>
              )}

              {activeSection === "myaccount" && (
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                  <h2 className="text-2xl font-bold mb-3 text-black">
                    My Account
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Manage your account details, subscription, and preferences
                    here.
                  </p>
                  <p className="text-sm text-gray-500">More coming soon...</p>
                </div>
              )}

              {activeSection === "feedback" && (
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
                  <h2 className="text-2xl font-bold mb-3 text-black">
                    Feedback
                  </h2>
                  <p className="text-gray-700">
                    We value your feedback! Please let us know how we can
                    improve.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
