"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

import { UploadCloud, Lock, AlertTriangle } from "lucide-react";

export default function Score() {
  const { data: session, status } = useSession();
  const [file, setFile] = useState<File | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = e.target.files?.[0] || null;
    setFile(uploadedFile);

    if (uploadedFile) {
      const url = URL.createObjectURL(uploadedFile);
      setPreviewURL(url);
      setScore(Math.floor(Math.random() * 41) + 60); // Random 60–100
    }
  };

  const progressColor = (score: number | null) => {
    if (score === null) return "stroke-gray-300";
    if (score >= 85) return "stroke-green-500";
    if (score >= 70) return "stroke-yellow-400";
    return "stroke-red-500";
  };

  const circularProgress = (
    <svg width="80" height="80">
      <circle
        cx="40"
        cy="40"
        r="35"
        stroke="#E5E7EB"
        strokeWidth="8"
        fill="none"
      />
      <circle
        cx="40"
        cy="40"
        r="35"
        strokeLinecap="round"
        strokeWidth="8"
        fill="none"
        className={progressColor(score)}
        strokeDasharray={220}
        strokeDashoffset={score !== null ? 220 - (220 * score) / 100 : 220}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        className="text-xl font-bold fill-gray-800"
      >
        {score ?? "--"}
      </text>
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#F4F5FA] flex font-sans">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 border-r flex flex-col justify-between">
        <div>
          <div className="flex justify-center mb-6">{circularProgress}</div>
          <div className="text-center text-sm text-gray-600 mb-4">OVERALL</div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-1">
                TOP FIXES
              </h3>
              <ul className="text-sm space-y-1">
                <li className="flex justify-between">
                  <span>Buzzwords</span>
                  <span className="text-red-500 text-xs font-bold">0</span>
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>Skills section</span>
                  <Lock size={14} />
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>Summary</span>
                  <Lock size={14} />
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>Filler words</span>
                  <Lock size={14} />
                </li>
                <li className="flex justify-between text-gray-500">
                  <span>Spelling & consistency</span>
                  <Lock size={14} />
                </li>
              </ul>
              <button className="mt-2 text-xs text-purple-600 font-semibold">
                11 MORE ISSUES →
              </button>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-1">
                COMPLETED
              </h3>
              <ul className="text-sm space-y-1">
                <li className="flex justify-between">
                  <span>Dates</span>
                  <span className="text-green-500">10</span>
                </li>
                <li className="flex justify-between">
                  <span>Unnecessary sections</span>
                  <span className="text-green-500">10</span>
                </li>
                <li className="flex justify-between">
                  <span>Repetition</span>
                  <span className="text-green-500">10</span>
                </li>
              </ul>
              <button className="mt-2 text-xs text-purple-600 font-semibold">
                3 MORE CHECKS →
              </button>
            </div>
          </div>
        </div>

        <button className="bg-blue-600 text-white py-2 rounded mt-6 text-sm font-semibold shadow">
          Unlock full report
        </button>
      </div>

      {/* Main content */}
      <div className="p-8 space-y-6 w-[700px]">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-[green] text-uppercase">
            {status === "loading"
              ? "Loading..."
              : `Good evening, ${
                  session?.user?.name || session?.user?.email || "user"
                }`}
          </h1>
          <button className="border text-sm px-3 py-1 rounded font-medium text-gray-700">
            HOW IT WORKS
          </button>
        </div>

        <div className="bg-white p-6 rounded shadow space-y-5">
          <div className="flex space-x-4 mb-4">
            <button className="bg-[#EDEBFE] text-[#5145CD] px-3 py-1 text-sm rounded font-semibold">
              LATEST SCORE
            </button>
            <button className="text-sm text-gray-500 px-3 py-1">
              PREVIOUS SCORE
            </button>
          </div>

          {score !== null ? (
            <>
              <h2 className="text-base font-bold">
                Your resume scored {score} out of 100.
              </h2>
              <p className="text-sm text-gray-600">
                You're on the right track, but there's room for improvement on
                your resume! While your resume does well in some areas, it falls
                short in others which are important to hiring managers and
                resume screeners. But don't worry – we'll show you how to make
                easy improvements to your resume, which will increase your score
                by 20+ points.
              </p>
              <div className="w-full h-4 bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 rounded mt-3 relative">
                <div
                  className="absolute top-0 h-4 bg-purple-600 rounded"
                  style={{ width: `${score}%` }}
                ></div>
              </div>

              <div className="flex items-start bg-yellow-50 border border-yellow-300 rounded p-3 mt-4 text-sm text-yellow-800">
                <AlertTriangle size={16} className="mr-2 mt-0.5" />
                Use the feedback to find and fix errors in your resume, then
                reupload it to get a new score.
                <strong className="ml-1">
                  80% of people increase their score by over 20 points with just
                  three uploads and revisions.
                </strong>
              </div>
            </>
          ) : (
            <p className="text-sm text-gray-500">
              Upload your resume to get a score.
            </p>
          )}
        </div>

        <div className="bg-white p-4 rounded shadow flex items-center gap-4 border">
          <label
            htmlFor="file-upload"
            className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
          >
            {" "}
            <UploadCloud className="w-6 h-6 text-gray-500" />
          </label>
          <input
            id="file-upload"
            type="file"
            // accept="application/pdf"
            accept=".pdf"
            className="hidden"
            onChange={handleUpload}
          />
        </div>
      </div>

      {/* Preview Panel */}
      <div className="w-[600px] bg-white border-l p-4 overflow-auto">
        <h2 className="text-sm font-semibold mb-2">Resume Preview</h2>
        <div className="h-full text-xs text-gray-700">
          {previewURL ? (
            <iframe
              src={previewURL}
              className="w-full h-[90vh] border"
              title="Resume Preview"
            />
          ) : (
            <p className="text-sm text-gray-400 italic">No resume uploaded.</p>
          )}
        </div>
      </div>
    </div>
  );
}
