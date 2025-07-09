"use client";

import { useState, useEffect } from "react";
import { CloudArrowUpIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Header from "../pages/components/Header";
import Lottie from "lottie-react";
import uploadingAnimation from "@/app/animations/loader.json";
import { verifyEmailWithServer } from "@/app/utils/auth";
import { API_ROUTES } from "../lib/config";
import Footer from "../pages/components/Footer";

export default function UploadResume() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="text-center py-10 text-xl">Loading...</div>;
  }

  const uploadResume = async (file: File, token: string) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(API_ROUTES.RESUME_UPLOAD, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

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
        let token = localStorage.getItem("access_token");

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
          localStorage.setItem("access_token", token as string);
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
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("🚨 Upload error:", error);
          setMessage("❌ Upload failed. " + error.message);
        } else {
          console.error("🚨 Unknown error:", error);
          setMessage("❌ Upload failed due to unknown error.");
        }
        setIsUploading(false);
      }
    } else {
      setMessage("❗ Please upload a valid PDF or DOCX file.");
    }
  };

  if (isUploading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#c2b0de]">
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
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-white text-center ">
        <h1 className="text-3xl font-bold text-[purple] mb-2">
          Upload Your Resume
        </h1>
        <p className="mb-6 text-[purple]">
          Career Level: <span className="font-semibold">Senior-level</span>{" "}
          <span className="underline cursor-pointer text-blue-300">
            (Change)
          </span>
        </p>

        <label
          htmlFor="resumeUpload"
          className="w-full bg-[#c2b0de] h-80 max-w-lg border-2 border-dashed border-white/50 p-12 rounded-lg mb-6 cursor-pointer hover:bg-[#a28fbf] transition"
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
            We&apos;re committed to your{" "}
            <span className="underline cursor-pointer">privacy</span>. Your
            resume is processed securely on our servers and is private to you.
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
}
