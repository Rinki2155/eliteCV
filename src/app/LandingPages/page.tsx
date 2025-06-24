"use client";

import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "../pages/components/Header";
import JobFunnelSection from "../pages/components/JobFunnelSection";
import TopJobsSection from "../pages/components/TopJobsSection";

export default function LandingPages() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const isLoggedIn = status === "authenticated";

  const handleUploadResume = () => {
    if (isLoggedIn) {
      router.push("/uploadResume");
    } else {
      signIn("google", { callbackUrl: "/uploadResume" }); // or router.push("/login") if custom login
    }
  };


  const landingSections = [
  {
    type: 'jobFunnel',
    title: 'Write and improve your resume',
    paragraph1:
      "Struggling to write your resume? Don't worry. We have over 250+ sample bullet points from top resumes across all industries and skills. Use our templates and sample lines to quickly write an effective resume from scratch.",
    paragraph2:
      "With Score My Resume, you can improve one upload at a time. Unlike any other tool, you get specific feedback on your resume's content, including on each bullet point.",
    buttonText: 'Upload resumes >>',
    imageUrl: '/image/Screenshot1.png',
    link: '/login',
  },
  {
    type: 'topJobs',
    title: 'Proven to land top jobs',
    paragraph1:
      'Resume Worded has helped hundreds of people land jobs at top companies like PwC, Google, Amazon and Credit Suisse.',
    paragraph2:
      'Our AI-powered technologies have been designed by real hiring managers and provide actionable feedback on your LinkedIn profile and resume.',
    imageUrl: '/image/Screenshot2.png',
  },
  {
    type: 'jobFunnel',
    title: 'Optimize your job search funnel',
    paragraph1:
      "Let's say you apply to or get contacted by a recruiter for 50 job openings. Out of those, your resume might get you 5 interviews, and out of those, you may end up getting one job offer.",
    paragraph2:
      "Resume Worded optimizes this job search funnel. With LinkedIn Review, you'll get contacted by more recruiters for more jobs on LinkedIn, thus widening the top part of the funnel. With our resume tools, you'll then be able to ensure you are maximizing the conversion of those jobs to interviews.",
    buttonText: 'Optimize your LinkedIn profile >>',
    imageUrl: '/image/Screenshot3.png',
    link: '/login',
  },
];

  return (
    <>
      <Header />
      <div>
        <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-12 md:py-16 max-w-[1290px] mx-auto">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-[purple] font-bold mb-6 leading-snug md:leading-tight font-sans">
              Improve your resume and <br className="hidden md:block" />{" "}
              LinkedIn profile
            </h1>

            <p className="text-base sm:text-lg mb-6 text-[#333333] leading-relaxed px-2 md:px-0">
              Designed by top recruiters, our AI-powered platform instantly
              gives you tailored feedback on your resume and LinkedIn profile.
            </p>

            <p className="text-sm sm:text-md mb-8 text-[#2e6e30] leading-relaxed px-2 md:px-0">
              Land 5x more interviews, opportunities and job offers.
            </p>

            <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start items-center gap-4">
              <button
                className="text-black font-semibold py-3 px-6 rounded w-full sm:w-[300px]  font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition"
                style={{ backgroundColor: "purple" }}
              >
                Get started for free
              </button>

              {/* ✅ Updated Upload Resume Button */}
              <button
                onClick={() => router.push("/login")}
                className="text-white font-semibold px-6 py-3 rounded-lg hover:bg-indigo-700 transition w-full sm:w-[180px]"
                style={{ backgroundColor: "#FF6F61" }}
              >
                Upload Resume
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end px-4 md:px-0 mr-[-4%]">
            <div className="relative w-full max-w-[560px] sm:max-w-[800px] md:w-[800px] md:h-[700px] h-[300px] sm:h-[700px] md:mr-[-12%]">
              <Image
                src="/images/8.jpg"
                alt="Dashboard preview"
                fill
                className="rounded-lg shadow-lg"
                style={{
                  boxShadow: "24px 16px 72px rgba(0, 0, 0, 0.68)",
                  borderRadius: "10px",
                }}
              />
            </div>
          </div>
        </section>
         <main>
      {landingSections.map((section, index) => {
        if (section.type === 'jobFunnel') {
          return (
            <JobFunnelSection
              key={index}
              title={section.title}
              paragraph1={section.paragraph1}
              paragraph2={section.paragraph2}
              buttonText={section.buttonText ?? ""}
              imageUrl={section.imageUrl}
              link={section.link ?? ""}
            />
          );
        } else if (section.type === 'topJobs') {
          return (
            <TopJobsSection
              key={index}
              title={section.title}
              paragraph1={section.paragraph1}
              paragraph2={section.paragraph2}
              imageUrl={section.imageUrl}
            />
          );
        }
      })}
    </main>
      </div>
    </>
  );
}
