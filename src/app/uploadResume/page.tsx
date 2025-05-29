// import React from "react";
// import Link from "next/link";
// import { CloudArrowUpIcon, LockClosedIcon } from "@heroicons/react/24/outline";

// export default function UploadResume() {
//   return (
//     <div className="min-h-screen bg-[#1a1249] flex flex-col items-center justify-center px-4 text-white text-center">
//       <h1 className="text-3xl font-bold mb-2">Upload Your Resume</h1>
//       <p className="mb-6">
//         Career Level: <span className="font-semibold">Senior-level</span>{" "}
//         <span className="underline cursor-pointer text-blue-300">(Change)</span>
//       </p>

//       <div className="w-full max-w-lg border-2 border-dashed border-white/50 p-12 rounded-lg mb-6">
//         <CloudArrowUpIcon className="w-16 h-16 mx-auto text-white/70 mb-4" />
//         <p className="text-white/80">
//           Click the button above or drop your resume in here.
//         </p>
//         <p className="mt-2 text-sm text-white/90">
//           English resumes in <span className="font-bold">PDF</span> (or{" "}
//           <span className="font-bold">DOCX</span>) only. Max 2MB file size.
//         </p>
//       </div>

//       {/* ✅ Redirect Button */}
//       <Link href="/Uploadre">
//         <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-semibold transition">
//           UPLOAD RESUME
//         </button>
//       </Link>

//       <div className="flex items-center text-xs text-white/60 mt-6">
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
'use client';
import React, { useState } from "react";
import { CloudArrowUpIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function UploadResume() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && (file.type === "application/pdf" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
      setSelectedFile(file);
    } else {
      alert("Please upload a valid PDF or DOCX file.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-white text-center" style={{
            backgroundImage:
              "radial-gradient(at 50% 100%, #c9ded3,rgb(72, 152, 111)",
          }}>
      <h1 className="text-3xl font-bold mb-2">Upload Your Resume</h1>
      <p className="mb-6">
        Career Level: <span className="font-semibold">Senior-level</span>{" "}
        <span className="underline cursor-pointer text-blue-300">(Change)</span>
      </p>

      <label
        htmlFor="resumeUpload"
        className="w-full max-w-lg border-2 border-dashed border-white/50 p-12 rounded-lg mb-6 cursor-pointer hover:bg-white/10 transition"
      >
        <CloudArrowUpIcon className="w-16 h-16 mx-auto text-white/70 mb-4" />
        <p className="text-white/80">
          Click to browse or drop your resume here.
        </p>
        <p className="mt-2 text-sm text-white/90">
          English resumes in <span className="font-bold">PDF</span> or{" "}
          <span className="font-bold">DOCX</span> only. Max 2MB file size.
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
        <p className="text-green-400 mb-2">
          Selected file: <span className="font-semibold">{selectedFile.name}</span>
        </p>
      )}

      <div className="flex items-center text-xs text-white/60 mt-4">
        <LockClosedIcon className="w-4 h-4 mr-2" />
        <span>
          We're committed to your{" "}
          <span className="underline cursor-pointer">privacy</span>. Your resume
          is processed securely on our servers and is private to you.
        </span>
      </div>
    </div>
  );
}

