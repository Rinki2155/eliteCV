"use client";
import { useEffect, useState } from "react";

const steps = [
  "Please wait...",
  "Loading your resume...",
  "Parsing your resume...",
  "Identifying core sections...",
];

export default function LoaderPage() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-300 font-sans">
      <ul className="w-[300px] space-y-4">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isDone = index < currentStep;

          return (
            <li
              key={index}
              className={`flex items-center text-base transition-opacity ${
                isActive
                  ? "text-white opacity-100"
                  : isDone
                  ? "text-white opacity-60"
                  : "opacity-30"
              }`}
            >
              <div
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-3 relative transition-all duration-500 ${
                  isActive || isDone ? "border-green-400" : "border-gray-400"
                } ${isActive ? "bg-white" : ""}`}
              >
                {(isActive || isDone) && (
                  <span className="text-green-400 text-xs font-bold">✔</span>
                )}
              </div>
              <span>{step}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
