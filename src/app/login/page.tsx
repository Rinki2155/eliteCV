"use client";

import React, { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import Header from "../pages/components/Header";
import { useRouter } from "next/navigation";
import Footer from "../pages/components/Footer";
import Image from "next/image";

export default function AccountLogin() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (status === "authenticated") {
      router.push("/HomePage");
    }
  }, [status, router]);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signIn("email", {
        email,
        redirect: false,
      });
      if (res?.ok) {
        setEmailSent(true);
      } else {
        console.error("Sign-in failed:", res?.error || "Unknown error");
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Sign-in error:", error);
      alert("Failed to send magic link. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-sans bg-[#F4EEFF] text-black">
      {isMounted && <Header />}

      {isMounted && session?.user ? (
        <div className="bg-[#B3E5FC] text-black p-4 text-center w-[500px] mx-auto mt-10 rounded shadow-md">
          <h4>🎉 Logged in as {session.user.email}</h4>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-center py-16 px-4 md:px-0 gap-6">
          {/* Left Card */}
          <div className="bg-[#FAFAFF] text-black p-10 w-full max-w-md rounded shadow-lg border border-[#B3E5FC]">
            <h2 className="text-2xl font-bold mb-6 text-[#845EC2]">
              Login to your account
            </h2>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-2xl font-bold text-[#48986f]">✔</span>{" "}
                <span className="text-lg text-[#2D2D2D] font-semibold">
                  Access your resume and LinkedIn reviews
                </span>
                <p className="text-[#666666] ml-6 mt-1">
                  Revisit the feedback from your previous resume or LinkedIn
                  reviews.
                </p>
              </li>
              <li>
                <span className="text-2xl font-bold text-[#48986f]">✔</span>{" "}
                <span className="text-lg text-[#2D2D2D] font-semibold">
                  Get a new resume or LinkedIn review
                </span>
                <p className="text-[#666666] ml-6 mt-1">
                  Upload your resume or LinkedIn profile again for another
                  review!
                </p>
              </li>
              <li>
                <span className="text-2xl font-bold text-[#48986f]">✔</span>{" "}
                <span className="text-lg text-[#2D2D2D] font-semibold">
                  Access the resume bullet point builder
                </span>
                <p className="text-[#666666] ml-6 mt-1">
                  Add and manage your bullet points, or get inspired by resume
                  bullet points.
                </p>
              </li>
            </ul>
          </div>

          {/* Right Card */}
          <div className="bg-[#c2b0de] text-white p-10 w-full max-w-md rounded shadow-lg">
            <h3 className="text-lg font-semibold mb-6">
              Choose an option to continue
            </h3>

            <button
              onClick={() => signIn("google")}
              className="bg-white text-black w-full py-2 px-4 rounded mb-4 flex justify-center items-center font-semibold hover:bg-[#eee]"
            >
              <Image
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google"
                className="w-5 h-5 mr-2"
                width={100} height={100}
              />
              Sign in with Google
            </button>

            <div className="text-center text-sm text-[#FAFAFF] mb-4">
              - or -
            </div>

            {emailSent ? (
              <p className="text-green-100 text-sm text-center">
                ✅ Magic link sent! Check your email.
              </p>
            ) : (
              <form onSubmit={handleEmailSignIn} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-3 py-2 rounded text-black"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  type="submit"
                  className={`bg-[#FF6F61] text-white w-full py-2 px-4 rounded hover:bg-[#e65a50] transition ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Sending link..." : "Sign in via Email"}
                </button>
              </form>
            )}

            <p className="text-xs text-white mt-4 text-center">
              By continuing, you agree to our{" "}
              <a href="#" className="underline">
                Terms
              </a>{" "}
              and{" "}
              <a href="#" className="underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
