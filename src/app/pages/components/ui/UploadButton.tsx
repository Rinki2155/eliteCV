"use client";

import { useRouter } from "next/navigation";

export default function UploadButton() {
  const router = useRouter();

  const handleUpload = () => {
    // After resume upload:
    router.push("/HomePage?from=uploadResume");
  };

  return (
    <button
      onClick={handleUpload}
      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
    >
      Upload Resume
    </button>
  );
}
