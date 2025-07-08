// "use client";
import React from "react";
import Image from "next/image";

export default function FirstLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="bg-[#c2b0de] rounded-2xl shadow-lg p-10 sm:p-20 max-w-7xl w-full text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          What do you want to start with?
        </h2>
        <p className="text-gray-700 text-base sm:text-lg">
          Thanks for joining Resume Worded. Our promise to you is that we’ll
          help you get closer to your career goals — faster.
        </p>
        <p className="text-gray-700 text-base sm:text-lg">
          We recommend starting with one of our core tools below — you can
          always try our other tools later. Choose one to continue.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 mx-auto max-w-3xl ">
          {/* Score My Resume */}
          <div className="bg-white border rounded-xl shadow-md p-6 flex flex-col items-center transition transform hover:shadow-xl hover:-translate-y-1 hover:scale-105 duration-300">
            <h3 className="font-semibold text-gray-800 text-xl mb-4">
              Score My Resume
            </h3>
            <Image
              src="/images/linkdinProfileReview.png"
              alt="Score My Resume"
              className="w-40 h-40 mb-6 object-contain"
              width={100} height={100}
            />
            <p className="text-1xl text-gray-600 mb-6 leading-relaxed text-center">
              Upload your resume and get <br /> expert feedback. Find out <br />{" "}
              where your resume falls short — in <br /> just 30 seconds.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
              START
            </button>
          </div>

          {/* LinkedIn Profile Review */}
          <div className="bg-white border rounded-xl shadow-md p-6 flex flex-col items-center transition transform hover:shadow-xl hover:-translate-y-1 hover:scale-105 duration-300">
            <h3 className="font-semibold text-gray-800 text-xl mb-4">
              LinkedIn Profile Review
            </h3>
            <Image
              src="/images/scoreMyResume.png"
              alt="LinkedIn Profile Review"
              className="w-40 h-40 mb-6 object-contain"
              width={100} height={100}
            />
            <p className="text-1xl text-gray-600 mb-6 leading-relaxed text-center">
              Get instant feedback on your <br /> LinkedIn profile. Optimize{" "}
              <br /> it and unlock more opportunities <br /> on LinkedIn.
            </p>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
