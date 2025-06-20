"use client";

import React, { useState } from "react";
import { CloudArrowUpIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import LoaderPage from "../pages/components/LoaderPage";
import { usePathname, useRouter } from "next/navigation";
import { useSession, getSession } from "next-auth/react";
import { useEffect } from "react";
import Header from "../pages/components/Header";

export default function UploadResume() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  
    const { data: session, status } = useSession();
    const pathname = usePathname();
   const router = useRouter();


        // Redirect to login if not authenticated 
    useEffect(() => {
      if (status === "unauthenticated") {
        router.push("/login"); // Redirect to login if not logged in
      }
    }, [status, router]);
  
   if (status === "loading") {
      return <div className="text-center py-10 text-xl">Loading...</div>;
    }

    
  const email = "rinkikumar9028@gmail.com";

  const verifyEmailAndGetToken = async (): Promise<string> => {
    const credentials = btoa("admin:securepassword");

    const response = await fetch(
      "https://ai-cv-builder-be.fly.dev/auth/verify-email",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          first_name: "Rinki Kumari",
          last_name: "Doe The Good Person",
          phone: "9155211167",
        }),
      }
    );

    if (!response.ok) throw new Error("Email verification failed");

    const data = await response.json();
    return data.access_token;
  };

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
        const token = await verifyEmailAndGetToken();
        const result = await uploadResume(file, token);

        // save preview URL for Score page
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

  if (isUploading) return <LoaderPage />;

  return (
    <>
          <Header/>
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
          <span className="underline cursor-pointer">privacy</span>. Your resume
          is processed securely on our servers and is private to you.
        </span>
      </div>
    </div>
    </>
  );
}
