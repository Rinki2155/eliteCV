import React from "react";
import Link from "next/link";
import { GraduationCap, User, Users } from "lucide-react";

export default function CareerLevelPage() {
  const options = [
    {
      icon: <GraduationCap className="w-5 h-5 mr-2" />,
      title: "Entry-level",
      description: "Students & recent graduates. Less than 2 years of work experience.",
    },
    {
      icon: <User className="w-5 h-5 mr-2" />,
      title: "Mid-level",
      description: "You have between 2 and 10 years of relevant work experience.",
    },
    {
      icon: <Users className="w-5 h-5 mr-2" />,
      title: "Senior-level",
      description: "You have more than 10 years of relevant work experience.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#C2B0DE] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-[#AD46FF] text-white rounded-xl p-8 shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">What best describes you?</h1>
        <p className="text-center text-gray-300 mb-8">
          Our AI will use this to personalize your resume review to you.
        </p>

        <div className="space-y-6">
          {options.map((option, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-white text-gray-900 rounded-xl p-5 shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-start">
                <div className="text-purple-700">{option.icon}</div>
                <div>
                  <p className="font-semibold">{option.title}</p>
                  <p className="text-sm text-gray-600">{option.description}</p>
                </div>
              </div>
              <Link href="/uploadResume">
                <button className="bg-purple-100 text-purple-700 px-4 py-1.5 text-sm font-semibold rounded-md hover:bg-purple-200 transition">
                  CHOOSE
                </button>
              </Link>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-400 text-center mt-6">
          Choose just one option to continue. Don’t worry; you can change your career level later.
        </p>
      </div>
    </div>
  );
}
