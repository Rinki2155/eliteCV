"use client";
import React from "react";

export default function FirstLoginPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "radial-gradient(at 50% 100%, #c9ded3,rgb(72, 152, 111)",
      }}
    >
      <div className="bg-white rounded-xl shadow-lg p-40 max-w-7xl w-full text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
          What do you want to start with?
        </h2>
        <p className="text-gray-600 mb-2">
          Thanks for joining Resume Worded. Our promise to you is that we’ll get
          you closer to your career goals, faster.
        </p>
        <p className="text-gray-600 mb-10">
          We recommend starting with one of our core tools below — you can
          always try our other tools later. Choose one to continue.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
          {/* Score My Resume */}
          <div className="bg-white border rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
            <img
              src="/resume-icon.png"
              alt="Resume"
              className="w-16 h-16 mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">Score My Resume</h3>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Upload your resume and get expert feedback on it.
              <br />
              Find out where your resume falls short — in 30 seconds.
            </p>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700">
              START
            </button>
          </div>

          {/* LinkedIn Profile Review */}
          <div className="bg-white border rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
            <img
              src="/linkedin-icon.png"
              alt="LinkedIn"
              className="w-16 h-16 mb-4"
            />
            <h3 className="font-semibold text-lg mb-2">
              LinkedIn Profile Review
            </h3>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Get instant feedback on your LinkedIn profile.
              <br />
              Optimize your profile and get more opportunities on LinkedIn.
            </p>
            <button className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700">
              START
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
