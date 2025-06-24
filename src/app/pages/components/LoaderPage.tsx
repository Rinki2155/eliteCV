"use client";

import React from "react";
import Lottie from "lottie-react";
import breatheAnimation from "../../animations/loader.json"; // ✅ Update path if needed

export default function LoaderPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-72 h-72">
        <Lottie animationData={breatheAnimation} loop autoplay />
      </div>
    </div>
  );
}
