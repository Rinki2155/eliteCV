// "use client";

// import React, { useState } from "react";
// import { CloudArrowUpIcon, LockClosedIcon } from "@heroicons/react/24/outline";

// export default function Score() {
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [isUploading, setIsUploading] = useState(false);
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const [score, setScore] = useState<number | null>(null);

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];

//     if (
//       file &&
//       (file.type === "application/pdf" ||
//         file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
//     ) {
//       setSelectedFile(file);
//       setPreviewUrl(URL.createObjectURL(file));
//       setIsUploading(true);

//       // Simulate upload and analysis delay
//       setTimeout(() => {
//         setIsUploading(false);
//         const simulatedScore = Math.floor(Math.random() * 30) + 65; // Score range: 65–95
//         setScore(simulatedScore);
//       }, 8000);
//     } else {
//       alert("Please upload a valid PDF or DOCX file.");
//     }
//   };

//   if (isUploading) return ;

//   return (
//     <div className="min-h-screen flex flex-col md:flex-row items-start justify-center gap-6 p-6 bg-gradient-to-b from-green-300 to-green-700 text-white">
//       {/* LEFT SIDE */}
//       <div className="w-full md:w-1/3 bg-white/10 p-6 rounded-xl text-center">
//         <h1 className="text-3xl font-bold mb-2 text-white">Upload Your Resume</h1>
//         <p className="mb-4 text-sm">
//           Career Level: <span className="font-semibold">Senior-level</span>{" "}
//           <span className="underline cursor-pointer text-blue-300">(Change)</span>
//         </p>

//         <label
//           htmlFor="resumeUpload"
//           className="block border-2 border-dashed border-white/50 p-8 rounded-lg mb-4 cursor-pointer hover:bg-white/10 transition"
//         >
//           <CloudArrowUpIcon className="w-12 h-12 mx-auto text-white/70 mb-2" />
//           <p className="text-white/80">Click to browse or drop your resume here</p>
//           <p className="mt-1 text-sm text-white/90">
//             PDF or DOCX only. Max 2MB.
//           </p>
//           <input
//             type="file"
//             id="resumeUpload"
//             accept=".pdf,.docx"
//             onChange={handleFileChange}
//             className="hidden"
//           />
//         </label>

//         {selectedFile && (
//           <p className="text-green-200 text-sm mt-1">
//             Selected: <span className="font-semibold">{selectedFile.name}</span>
//           </p>
//         )}

//         {score !== null && (
//           <div className="mt-6">
//             <p className="text-lg">Score:</p>
//             <p className="text-5xl font-bold text-yellow-300">{score}/100</p>
//             <p className="mt-2 text-sm text-white/70">
//               {score >= 80 ? "Great resume!" : "Needs improvement"}
//             </p>
//           </div>
//         )}

//         <div className="flex items-center text-xs text-white/60 mt-6">
//           <LockClosedIcon className="w-4 h-4 mr-2" />
//           <span>
//             Your resume is processed securely and privately.
//           </span>
//         </div>
//       </div>

//       {/* RIGHT SIDE PREVIEW */}
//       <div className="w-full md:w-2/3 bg-white p-4 rounded-lg shadow">
//         <h2 className="text-xl font-bold mb-4 text-black">Resume Preview</h2>
//         {previewUrl ? (
//           <iframe src={previewUrl} className="w-full h-[75vh] border rounded-lg" />
//         ) : (
//           <p className="text-gray-500 text-sm">No resume uploaded yet.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// import ScoreCircle from "@/components/ScoreCircle";
// import ScoreBar from "@/components/ScoreBar";
// import FixesList from "@/components/FixesList";
// import SectionCard from "@/components/SectionCard";
import ScoreCircle from "../pages/components/ScoreCircle";
import ScoreBar from "../pages/components/ScoreBar";
import FixesList from "../pages/components/FixesList";
import SectionCard from "../pages/components/SectionCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 border-r">
        <ScoreCircle score={62} />
        <FixesList />
      </aside>

      {/* Main Content */}
      <section className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Welcome to your resume review.</h1>

        <SectionCard title="Your resume scored 62 out of 100.">
          <p className="mb-4">
            You're on the right track, but there's room for improvement on your resume! While your resume
            does well in some areas, it falls short in others which are important to hiring managers and
            resume screeners.
          </p>
          <p className="mb-2">
            But don't worry — we'll show you how to make easy improvements to your resume, which will
            increase your score by 20+ points.
          </p>
          <ScoreBar score={62} />
        </SectionCard>
      </section>
    </main>
  );
}
