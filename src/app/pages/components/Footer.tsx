"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="bg-purple-500 text-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Logo + Tagline */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold">
              <span className="text-white">EliteCv</span>{" "}
              <span className="text-gray-300"></span>
            </h2>
            <p className="text-sm mt-2">Get the job you deserve, faster.</p>
          </div>

          {/* Grid Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
            {/* Column 1 */}
            <div>
              <h3 className="font-semibold text-white mb-4">
                Improve your resume
              </h3>
              <ul className="space-y-2 text-white">
                <li>
                  <Link href="/" className="text-white">Score my resume</Link>
                </li>
                <li>
                  <Link href="#" className="text-white">Targeted resume</Link>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="font-semibold text-white mb-4">
                Write your resume
              </h3>
              <ul className="space-y-2 text-white text-1xl">
                <li>
                  <Link href="#">ATS resume templates</Link>
                </li>
                <li>
                  <Link href="#">ATS resume test</Link>
                </li>
                <li>
                  <Link href="#">ATS resume guide</Link>
                </li>
                <li>
                  <Link href="#">Resume helper</Link>
                </li>
                <li>
                  <Link href="#">Resume proofreader</Link>
                </li>
                <li>
                  <Link href="#">Rate my resume</Link>
                </li>
                <li>
                  <Link href="#">Resume grammar checker</Link>
                </li>
                <li>
                  <Link href="#">Resume optimizer</Link>
                </li>
                <li>
                  <Link href="#">Google Docs resume</Link>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="font-semibold text-white mb-4">Get to know us</h3>
              <ul className="space-y-2 text-white text-1xl">
                <li>
                  <Link href="#">Help center</Link>
                </li>
                <li>
                  <Link href="#">Get in touch</Link>
                </li>
                <li>
                  <Link href="#">For businesses</Link>
                </li>
                <li>
                  <Link href="#">For resume writers</Link>
                </li>
                <li>
                  <Link href="#">Affiliates</Link>
                </li>
                <li>
                  <Link href="#">Coached, our newsletter</Link>
                </li>
                <li>
                  <Link href="#">Testimonials</Link>
                </li>
                <li>
                  <Link href="#">Privacy</Link>
                </li>
                <li>
                  <Link href="#">Terms</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-[purple] text-white py-8 md:px-12">
        <div className="max-w-7xl mx-auto text-2xl text-center">
          © 2025 EliteCv. All rights reserved.
        </div>
      </footer>
    </>
  );
}
