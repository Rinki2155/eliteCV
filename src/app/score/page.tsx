"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { UploadCloud, Lock, AlertTriangle } from "lucide-react";

export default function Score() {
  const { data: session, status } = useSession();
  const searchParams = useSearchParams();

  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [strengths, setStrengths] = useState<string[]>([]);
  const [weaknesses, setWeaknesses] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [previewURL, setPreviewURL] = useState<string | null>(null);

  useEffect(() => {
    const scoreParam = searchParams.get("score");
    const feedbackParam = searchParams.get("feedback");
    const strengthsParam = searchParams.get("strengths");
    const weaknessesParam = searchParams.get("weaknesses");
    const suggestionsParam = searchParams.get("suggestions");

    if (scoreParam) setScore(Number(scoreParam));
    if (feedbackParam) setFeedback(decodeURIComponent(feedbackParam));
    if (strengthsParam)
      setStrengths(JSON.parse(decodeURIComponent(strengthsParam)));
    if (weaknessesParam)
      setWeaknesses(JSON.parse(decodeURIComponent(weaknessesParam)));
    if (suggestionsParam)
      setSuggestions(JSON.parse(decodeURIComponent(suggestionsParam)));

    const preview = sessionStorage.getItem("resumePreviewURL");
    if (preview) setPreviewURL(preview);
  }, [searchParams]);

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
          <div className="text-center text-sm text-[green] mb-4">
            OVERALL SCORE
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm text-[green] mb-1">STRENGTHS</h3>
              <ul className="text-sm space-y-1">
                {strengths.map((item, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{item}</span>
                    <span className="text-[green] font-bold">✓</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-[green] mb-1">WEAKNESSES</h3>
              <ul className="text-sm space-y-1">
                {weaknesses.map((item, i) => (
                  <li key={i} className="flex justify-between">
                    <span>{item}</span>
                    <span className="text-red-500 text-[green] font-bold">⚠</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <button className="bg-blue-600 text-white py-2 rounded mt-6 text-sm font-semibold shadow">
          Unlock full report
        </button>
      </div>

      {/* Main */}
      <div className="flex-1 p-8 space-y-6">
        <h1 className="text-xl font-bold text-green-700">
          {status === "loading"
            ? "Loading..."
            : `Hi, ${session?.user?.name || session?.user?.email || "User"}`}
        </h1>

        <div className="bg-white p-6 rounded shadow space-y-4">
          <h2 className="text-lg font-bold">
            Your resume scored {score} out of 100.
          </h2>
          {feedback && (
            <p className="text-sm text-gray-700 italic border-l-4 border-yellow-400 pl-4">
              {feedback}
            </p>
          )}
          <div className="w-full h-4 bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 rounded mt-3 relative">
            <div
              className="absolute top-0 h-4 bg-purple-600 rounded"
              style={{ width: `${score}%` }}
            ></div>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-semibold">Suggestions</h3>
            <ul className="text-sm mt-2 space-y-1">
              {suggestions.map((item, i) => (
                <li key={i} className="list-disc list-inside text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-start bg-yellow-50 border border-yellow-300 rounded p-3 mt-4 text-sm text-yellow-800">
            <AlertTriangle size={16} className="mr-2 mt-0.5" />
            Use this feedback to revise your resume and try again.
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="w-[600px] bg-white border-l p-4 overflow-auto">
        <h2 className="text-sm font-semibold mb-2">Resume Preview</h2>
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
  );
}
