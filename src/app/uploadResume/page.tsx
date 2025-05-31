// "use client";

// import React, { useState } from "react";
// import { CloudArrowUpIcon, LockClosedIcon } from "@heroicons/react/24/outline";
// import Loader from "../pages/components/Loader";
// import Test from "../pages/Test"

// export default function UploadResume() {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [isUploading, setIsUploading] = useState(false);

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (
//       file &&
//       (file.type === "application/pdf" ||
//         file.type ===
//           "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
//     ) {
//       setSelectedFile(file);
//       setIsUploading(true);

//       // Simulate upload delay
//       setTimeout(() => {
//         setIsUploading(false);
//         alert("Resume uploaded successfully!");
//       }, 8000); // 8 seconds for demo
//     } else {
//       alert("Please upload a valid PDF or DOCX file.");
//     }
//   };

//   if (isUploading) {
//     return <Test/>;
//   }

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center px-4 text-white text-center"  style={{
//             backgroundImage:
//               "radial-gradient(at 50% 100%,rgb(115, 198, 155),rgb(57, 153, 104)",
//           }}>
//       <h1 className="text-3xl font-bold mb-2">Upload Your Resume</h1>
//       <p className="mb-6">
//         Career Level: <span className="font-semibold">Senior-level</span>{" "}
//         <span className="underline cursor-pointer text-blue-300">(Change)</span>
//       </p>

//       <label
//         htmlFor="resumeUpload"
//         className="w-full max-w-lg border-2 border-dashed border-white/50 p-12 rounded-lg mb-6 cursor-pointer hover:bg-white/10 transition"
//       >
//         <CloudArrowUpIcon className="w-16 h-16 mx-auto text-white/70 mb-4" />
//         <p className="text-white/80">
//           Click to browse or drop your resume here.
//         </p>
//         <p className="mt-2 text-sm text-white/90">
//           English resumes in <span className="font-bold">PDF</span> or{" "}
//           <span className="font-bold">DOCX</span> only. Max 2MB file size.
//         </p>
//         <input
//           type="file"
//           id="resumeUpload"
//           accept=".pdf,.docx"
//           onChange={handleFileChange}
//           className="hidden"
//         />
//       </label>

//       {selectedFile && (
//         <p className="text-green-800 mb-2">
//           Selected file:{" "}
//           <span className="font-semibold">{selectedFile.name}</span>
//         </p>
//       )}

//       <div className="flex items-center text-xs text-white/60 mt-4">
//         <LockClosedIcon className="w-4 h-4 mr-2" />
//         <span>
//           We're committed to your{" "}
//           <span className="underline cursor-pointer">privacy</span>. Your resume
//           is processed securely on our servers and is private to you.
//         </span>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useState } from "react";
import { CloudArrowUpIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import Test from "../pages/Test"; // Your loader component

export default function UploadResume() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (
      file &&
      (file.type === "application/pdf" ||
        file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      setIsUploading(true);

      // Simulate upload and analysis delay
      setTimeout(() => {
        setIsUploading(false);
        const simulatedScore = Math.floor(Math.random() * 30) + 65; // Score range: 65–95
        setScore(simulatedScore);
      }, 8000);
    } else {
      alert("Please upload a valid PDF or DOCX file.");
    }
  };

  if (isUploading) return <Test />;

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-start justify-center gap-6 p-6 bg-gradient-to-b from-green-300 to-green-700 text-white">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/3 bg-white/10 p-6 rounded-xl text-center">
        <h1 className="text-3xl font-bold mb-2 text-white">Upload Your Resume</h1>
        <p className="mb-4 text-sm">
          Career Level: <span className="font-semibold">Senior-level</span>{" "}
          <span className="underline cursor-pointer text-blue-300">(Change)</span>
        </p>

        <label
          htmlFor="resumeUpload"
          className="block border-2 border-dashed border-white/50 p-8 rounded-lg mb-4 cursor-pointer hover:bg-white/10 transition"
        >
          <CloudArrowUpIcon className="w-12 h-12 mx-auto text-white/70 mb-2" />
          <p className="text-white/80">Click to browse or drop your resume here</p>
          <p className="mt-1 text-sm text-white/90">
            PDF or DOCX only. Max 2MB.
          </p>
          <input
            type="file"
            id="resumeUpload"
            accept=".pdf,.docx"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {selectedFile && (
          <p className="text-green-200 text-sm mt-1">
            Selected: <span className="font-semibold">{selectedFile.name}</span>
          </p>
        )}

        {score !== null && (
          <div className="mt-6">
            <p className="text-lg">Score:</p>
            <p className="text-5xl font-bold text-yellow-300">{score}/100</p>
            <p className="mt-2 text-sm text-white/70">
              {score >= 80 ? "Great resume!" : "Needs improvement"}
            </p>
          </div>
        )}

        <div className="flex items-center text-xs text-white/60 mt-6">
          <LockClosedIcon className="w-4 h-4 mr-2" />
          <span>
            Your resume is processed securely and privately.
          </span>
        </div>
      </div>

      {/* RIGHT SIDE PREVIEW */}
      <div className="w-full md:w-2/3 bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4 text-black">Resume Preview</h2>
        {previewUrl ? (
          <iframe src={previewUrl} className="w-full h-[75vh] border rounded-lg" />
        ) : (
          <p className="text-gray-500 text-sm">No resume uploaded yet.</p>
        )}
      </div>
    </div>
  );
}
