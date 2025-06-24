// "use client";

// import { useState } from "react";
// import { useSession } from "next-auth/react";

// import { UploadCloud, Lock, AlertTriangle } from "lucide-react";

// export default function Score() {
//   const { data: session, status } = useSession();
//   const [file, setFile] = useState<File | null>(null);
//   const [score, setScore] = useState<number | null>(null);
//   const [previewURL, setPreviewURL] = useState<string | null>(null);

//   const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const uploadedFile = e.target.files?.[0] || null;
//     setFile(uploadedFile);

//     if (uploadedFile) {
//       const url = URL.createObjectURL(uploadedFile);
//       setPreviewURL(url);
//       setScore(Math.floor(Math.random() * 41) + 60); // Random 60–100
//     }
//   };

//   const progressColor = (score: number | null) => {
//     if (score === null) return "stroke-gray-300";
//     if (score >= 85) return "stroke-green-500";
//     if (score >= 70) return "stroke-yellow-400";
//     return "stroke-red-500";
//   };

//   const circularProgress = (
//     <svg width="80" height="80">
//       <circle
//         cx="40"
//         cy="40"
//         r="35"
//         stroke="#E5E7EB"
//         strokeWidth="8"
//         fill="none"
//       />
//       <circle
//         cx="40"
//         cy="40"
//         r="35"
//         strokeLinecap="round"
//         strokeWidth="8"
//         fill="none"
//         className={progressColor(score)}
//         strokeDasharray={220}
//         strokeDashoffset={score !== null ? 220 - (220 * score) / 100 : 220}
//       />
//       <text
//         x="50%"
//         y="50%"
//         textAnchor="middle"
//         dy=".3em"
//         className="text-xl font-bold fill-gray-800"
//       >
//         {score ?? "--"}
//       </text>
//     </svg>
//   );

//   return (
//     <div className="min-h-screen bg-[#F4F5FA] flex font-sans">
//       {/* Sidebar */}
//       <div className="w-64 bg-white p-6 border-r flex flex-col justify-between">
//         <div>
//           <div className="flex justify-center mb-6">{circularProgress}</div>
//           <div className="text-center text-sm text-gray-600 mb-4">OVERALL </div>

//           <div className="space-y-4">
//             <div>
//               <h3 className="text-sm font-semibold text-gray-700 mb-1">
//                 TOP FIXES
//               </h3>
//               <ul className="text-sm space-y-1">
//                 <li className="flex justify-between">
//                   <span>Buzzwords</span>
//                   <span className="text-red-500 text-xs font-bold">0</span>
//                 </li>
//                 <li className="flex justify-between text-gray-500">
//                   <span>Skills section</span>
//                   <Lock size={14} />
//                 </li>
//                 <li className="flex justify-between text-gray-500">
//                   <span>Summary</span>
//                   <Lock size={14} />
//                 </li>
//                 <li className="flex justify-between text-gray-500">
//                   <span>Filler words</span>
//                   <Lock size={14} />
//                 </li>
//                 <li className="flex justify-between text-gray-500">
//                   <span>Spelling & consistency</span>
//                   <Lock size={14} />
//                 </li>
//               </ul>
//               <button className="mt-2 text-xs text-purple-600 font-semibold">
//                 11 MORE ISSUES →
//               </button>
//             </div>

//             <div>
//               <h3 className="text-sm font-semibold text-gray-700 mb-1">
//                 COMPLETED
//               </h3>
//               <ul className="text-sm space-y-1">
//                 <li className="flex justify-between">
//                   <span>Dates</span>
//                   <span className="text-green-500">10</span>
//                 </li>
//                 <li className="flex justify-between">
//                   <span>Unnecessary sections</span>
//                   <span className="text-green-500">10</span>
//                 </li>
//                 <li className="flex justify-between">
//                   <span>Repetition</span>
//                   <span className="text-green-500">10</span>
//                 </li>
//               </ul>
//               <button className="mt-2 text-xs text-purple-600 font-semibold">
//                 3 MORE CHECKS →
//               </button>
//             </div>
//           </div>
//         </div>

//         <button className="bg-blue-600 text-white py-2 rounded mt-6 text-sm font-semibold shadow">
//           Unlock full report
//         </button>
//       </div>

//       {/* Main content */}
//       <div className="p-8 space-y-6 w-[700px]">
//         <div className="flex justify-between items-center">
//           <h1 className="text-xl font-bold text-[green] text-uppercase">
//             {status === "loading"
//               ? "Loading..."
//               : `Good evening, ${
//                   session?.user?.name || session?.user?.email || "user"
//                 }`}
//           </h1>
//           <button className="border text-sm px-3 py-1 rounded font-medium text-gray-700">
//             HOW IT WORKS
//           </button>
//         </div>

//         <div className="bg-white p-6 rounded shadow space-y-5">
//           <div className="flex space-x-4 mb-4">
//             <button className="bg-[#EDEBFE] text-[#5145CD] px-3 py-1 text-sm rounded font-semibold">
//               LATEST SCORE
//             </button>
//             <button className="text-sm text-gray-500 px-3 py-1">
//               PREVIOUS SCORE
//             </button>
//           </div>

//           {score !== null ? (
//             <>
//               <h2 className="text-base font-bold">
//                 Your resume scored {score} out of 100.
//               </h2>
//               <p className="text-sm text-gray-600">
//                 You're on the right track, but there's room for improvement on
//                 your resume! While your resume does well in some areas, it falls
//                 short in others which are important to hiring managers and
//                 resume screeners. But don't worry – we'll show you how to make
//                 easy improvements to your resume, which will increase your score
//                 by 20+ points.
//               </p>
//               <div className="w-full h-4 bg-gradient-to-r from-red-400 via-yellow-300 to-green-400 rounded mt-3 relative">
//                 <div
//                   className="absolute top-0 h-4 bg-purple-600 rounded"
//                   style={{ width: `${score}%` }}
//                 ></div>
//               </div>

//               <div className="flex items-start bg-yellow-50 border border-yellow-300 rounded p-3 mt-4 text-sm text-yellow-800">
//                 <AlertTriangle size={16} className="mr-2 mt-0.5" />
//                 Use the feedback to find and fix errors in your resume, then
//                 reupload it to get a new score.
//                 <strong className="ml-1">
//                   80% of people increase their score by over 20 points with just
//                   three uploads and revisions.
//                 </strong>
//               </div>
//             </>
//           ) : (
//             <p className="text-sm text-gray-500">
//               Upload your resume to get a score.
//             </p>
//           )}
//         </div>

//         <div className="bg-white p-4 rounded shadow flex items-center gap-4 border">
//           <label
//             htmlFor="file-upload"
//             className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
//           >
//             {" "}
//             <UploadCloud className="w-6 h-6 text-gray-500" />
//           </label>
//           <input
//             id="file-upload"
//             type="file"
//             // accept="application/pdf"
//             accept=".pdf"
//             className="hidden"
//             onChange={handleUpload}
//           />
//         </div>
//       </div>

//       {/* Preview Panel */}
//       <div className="w-[600px] bg-white border-l p-4 overflow-auto">
//         <h2 className="text-sm font-semibold mb-2">Resume Preview</h2>
//         <div className="h-full text-xs text-gray-700">
//           {previewURL ? (
//             <iframe
//               src={previewURL}
//               className="w-full h-[90vh] border"
//               title="Resume Preview"
//             />
//           ) : (
//             <p className="text-sm text-gray-400 italic">No resume uploaded.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// components/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated";

  return (
    <header className="w-full flex justify-between items-center px-8 py-4 border-b border-gray-700 bg-[#c9e4ca] relative z-50">
      <Link href="/">
        <div className="text-white text-xl font-bold tracking-wide cursor-pointer">
          <Image
            src="/images/newlogo.png"
            height={150}
            width={150}
            alt="Logo"
          />
        </div>
      </Link>

      <nav className="flex items-center space-x-6 text-gray-200 ml-[-50%]">
        {!isLoggedIn && (
          <Link href="/login">
            <div className="cursor-pointer hover:text-[green] text-black">
              Login
            </div>
          </Link>
        )}

        {isLoggedIn && (
          <>
            <button
              onClick={() => signOut({ callbackUrl: "/HomePage" })} // Redirects to landing page
              className="cursor-pointer hover:text-red-600 text-black"
            >
              Dashboard
            </button>
            <button
              onClick={() => signOut({ callbackUrl: "/HomePage" })} // Redirects to landing page
              className="cursor-pointer hover:text-red-600 text-black"
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}


"use client";

import React, { useState, useEffect } from "react";
import { CloudArrowUpIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Header from "../pages/components/Header";
import Lottie from "lottie-react";
import uploadingAnimation from "@/app/animations/loader.json";
import { verifyEmailWithServer } from "@/app/utils/auth";

export default function UploadResume() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const { data: session, status } = useSession();
  const router = useRouter();

  // 🔒 Redirect to login if unauthenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="text-center py-10 text-xl">Loading...</div>;
  }

  // 📄 Upload resume to backend
  const uploadResume = async (file: File, token: string) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(
      "https://ai-cv-builder-be.fly.dev/resume/upload",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      }
    );

    const result = await response.json();

    if (!response.ok || result.is_resume === false) {
      throw new Error("Invalid resume or upload failed");
    }

    return result;
  };

  // 📂 File change + upload flow
  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (
      file &&
      (file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setSelectedFile(file);
      setIsUploading(true);
      setMessage("Processing your resume...");

      try {
        let token = localStorage.getItem("access_token");

        // If token not found, verify email again
        if (!token && session?.user?.email) {
          const [firstName = "", lastName = ""] =
            session.user.name?.split(" ") || [];
          const result = await verifyEmailWithServer({
            email: session.user.email,
            first_name: firstName,
            last_name: lastName,
            phone: "0000000000",
          });

          token = result.access_token;
          localStorage.setItem("access_token", token);
        }

        if (!token) throw new Error("Access token missing.");

        const result = await uploadResume(file, token);

        const previewURL = URL.createObjectURL(file);
        sessionStorage.setItem("resumePreviewURL", previewURL);

        const { score, feedback, strengths, weaknesses, suggestions } = result;

        router.push(
          `/score?score=${score}&feedback=${encodeURIComponent(
            feedback
          )}&strengths=${encodeURIComponent(
            JSON.stringify(strengths || [])
          )}&weaknesses=${encodeURIComponent(
            JSON.stringify(weaknesses || [])
          )}&suggestions=${encodeURIComponent(
            JSON.stringify(suggestions || [])
          )}`
        );
      } catch (error: any) {
        console.error("🚨 Upload error:", error);
        setIsUploading(false);
        setMessage("❌ Upload failed. " + error.message);
      }
    } else {
      setMessage("❗ Please upload a valid PDF or DOCX file.");
    }
  };

  // 🔄 Lottie loader
  if (isUploading) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage:
            "radial-gradient(at 50% 100%,rgb(115, 198, 155),rgb(57, 153, 104))",
        }}
      >
        <div className="w-64 h-64">
          <Lottie animationData={uploadingAnimation} loop={true} />
        </div>
        <p className="text-lg font-semibold text-gray-700 mt-4">
          Uploading and analyzing your resume...
        </p>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div
        className="min-h-screen flex flex-col items-center justify-center px-4 text-white text-center"
        style={{
          backgroundImage:
            "radial-gradient(at 50% 100%,rgb(115, 198, 155),rgb(57, 153, 104))",
        }}
      >
        <h1 className="text-3xl font-bold mb-2">Upload Your Resume</h1>
        <p className="mb-6">
          Career Level: <span className="font-semibold">Senior-level</span>{" "}
          <span className="underline cursor-pointer text-blue-300">
            (Change)
          </span>
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
          <p className="text-green-800 mb-2">
            Selected file:{" "}
            <span className="font-semibold">{selectedFile.name}</span>
          </p>
        )}

        {message && (
          <p className="mt-4 px-4 py-2 rounded-md bg-white/20 text-sm">
            {message}
          </p>
        )}

        <div className="flex items-center text-xs text-white/60 mt-4">
          <LockClosedIcon className="w-4 h-4 mr-2" />
          <span>
            We're committed to your{" "}
            <span className="underline cursor-pointer">privacy</span>. Your
            resume is processed securely on our servers and is private to you.
          </span>
        </div>
      </div>
    </>
  );
}
