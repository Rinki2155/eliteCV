"use client";
import { useState } from "react";

const TABS = [
  { id: "review", label: "INSTANT RESUME REVIEW" },
  { id: "samples", label: "RESUME SAMPLES" },
];

export default function ResumeTabsSection() {
  const [activeTab, setActiveTab] = useState("review");

  const tabClasses = (id: string) =>
    `px-6 py-3 font-semibold text-sm md:text-base rounded-t-md transition-all ${
      activeTab === id
        ? "bg-purple-800 text-white"
        : "bg-purple-800 text-white hover:text-black-300"
    }`;

  const renderContent = () => {
    switch (activeTab) {
      case "review":
        return (
          <div className="flex flex-col md:flex-row gap-8 items-center bg-[#c2b0de] p-8 rounded-b-md shadow-lg">
            <div className="w-full md:w-1/2">
              <video
                src="/videos/resume-review.mp4"
                controls
                className="rounded-lg shadow-lg w-full h-100"
              />
            </div>
            <div className="w-full md:w-1/2 text-[purple] space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                Get expert feedback on your resume,{" "}
                <span className="text-[purple]">instantly</span>
              </h2>
              <p className="text-gray-200 text-md">
                Score My Resume scores your resume on key criteria recruiters
                and hiring managers look for. Upload your resume and in just 30
                seconds, you'll get actionable steps to revamp your resume and
                land more interviews.
              </p>
              <button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md text-white text-lg">
                Upload resume <span className="ml-2">»</span>
              </button>
            </div>
          </div>
        );

      case "samples":
        return (
          <div className="p-8 bg-[#c2b0de] text-white rounded-b-md">
            <h2 className="text-2xl font-bold mb-4">Resume Samples</h2>
            <p className="text-gray-300">
              Explore 250+ resume samples across industries and roles to
              kickstart your writing.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-8xl mx-auto mt-12 px-4">
      <div className="bg-[#af88ec] rounded-md overflow-hidden ">
        <div className="flex space-x-4 border-b border-blue-700 px-6 py-4">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={tabClasses(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {renderContent()}
      </div>
    </div>
  );
}
