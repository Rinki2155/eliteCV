// app/resume-analyzer/page.tsx
"use client";

import { useState } from "react";
import UploadResume from "../uploadResume/page";

export default function ResumeAnalyzer() {
  const [file, setFile] = useState<File | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileUpload = async (resumeFile: File) => {
    setFile(resumeFile);
    setPreviewUrl(URL.createObjectURL(resumeFile));

    // Fake scoring simulation — replace with API logic
    const simulatedScore = Math.floor(Math.random() * 40) + 60; // Range: 60–100
    setScore(simulatedScore);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex gap-6">
      {/* LEFT: Score Panel */}
      <div className="w-1/3 bg-white p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-4">Resume Score</h2>
        {score !== null ? (
          <>
            <div className="text-4xl font-bold text-blue-600">{score} / 100</div>
            <p className="mt-2 text-sm text-gray-600">
              {score >= 80
                ? "Your resume looks strong!"
                : "You can improve by refining summary, skills, or removing filler."}
            </p>
          </>
        ) : (
          <p className="text-sm text-gray-500">Upload your resume to get a score.</p>
        )}
        <UploadResume onUpload={handleFileUpload} />
      </div>

      {/* RIGHT: Preview Panel */}
      <div className="w-2/3 bg-white p-4 rounded shadow overflow-auto">
        <h2 className="text-xl font-bold mb-4">Resume Preview</h2>
        {previewUrl ? (
          <iframe src={previewUrl} className="w-full h-[80vh] border" />
        ) : (
          <p className="text-gray-500 text-sm">No resume uploaded.</p>
        )}
      </div>
    </div>
  );
}
