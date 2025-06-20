"use client";

import React, { useState, useEffect } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Header from "../pages/components/Header";

export default function AccountLogin() {
  const { data: session, status } = useSession();
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // ✅ to avoid hydration mismatch

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await signIn("email", {
        email,
        redirect: false,
        callbackUrl: "/",
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
    <div
      className="min-h-screen text-white font-sans"
      style={{
        background: "radial-gradient(at 50% 100%, #c9ded3, #48986f)",
      }}
    >
      {isMounted && <Header />}

      {isMounted && session?.user ? (
        <div className="text-black bg-[#c9e4ca] p-4 text-center w-[500px] mx-auto mt-10 rounded">
          <h4> Logged in as {session.user.email}</h4>{" "}

        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-center py-16 px-4 md:px-0">
          <div className="bg-white text-black p-10 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-[#4a944a]">
              Login to your account
            </h2>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-3xl font-bold text-[green] py-2">✔</span>{" "}
                <span className="text-[18px] text-[#4a944a] font-bold">
                  {" "}
                  Access your resume and LinkedIn reviews
                </span>
                <br />
                <p className="text-gray-500 mx-5 py-2">
                  Revisit the feedback from your previous resume or LinkedIn
                  reviews and see how you scored.
                </p>{" "}
              </li>
              <li>
                <span className="text-3xl font-bold text-[green] py-2">✔</span>{" "}
                <span className="text-[18px] text-[#4a944a] font-bold">
                  {" "}
                  Get a new resume or LinkedIn review
                </span>
                <br />
                <p className="text-gray-500 mx-5 py-2">
                  Upload your resume or LinkedIn profile again for another
                  review!
                </p>{" "}
              </li>
              <li>
                <span className="text-3xl font-bold text-[green] py-2">✔</span>{" "}
                <span className="text-[18px] text-[#4a944a] font-bold">
                  {" "}
                  Access the resume bullet point builder
                </span>{" "}
                <br />
                <p className="text-gray-500 mx-5 py-2">
                  Add and manage your bullet points, or get inspired by resume
                  bullet points from top resumes.
                </p>{" "}
              </li>
            </ul>
          </div>

          <div className="bg-[radial-gradient(at_50%_100%,#8dc5a8,#48986f)] text-[#0a7a3b] p-10 w-full max-w-md mt-10 md:mt-0">
            <h3 className="text-lg text-[#0a7a3b] mb-6">
              Choose an option to continue
            </h3>

            <button
              onClick={() => signIn("google")}
              className="bg-white text-black w-full py-2 px-4 rounded mb-4 flex justify-center items-center font-semibold"
            >
              <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>

            <div className="text-center text-sm text-gray-300 mb-4">- or -</div>

            {emailSent ? (
              <p className="text-green-400 text-sm text-center">
                Magic link sent! Check your email.
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
                  className={`border border-gray-900 text-[0a7a3b] w-full py-2 px-4 rounded hover:bg-[#0a7a3b] ${
                    loading ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={loading}
                >
                  {loading ? "Sending link..." : "Sign in via Email"}
                </button>
              </form>
            )}

            <p className="text-xs text-[#0a7a3b] mt-4 text-center">
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
    </div>
  );
}
