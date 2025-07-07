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
                  <a href="/" className=" text-white">Score my resume</a>
                </li>
                <li>
                  <a href="#" className=" text-white">Targeted resume</a>
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
                  <a href="#">ATS resume templates</a>
                </li>
                <li>
                  <a href="#">ATS resume test</a>
                </li>
                <li>
                  <a href="#">ATS resume guide</a>
                </li>
                <li>
                  <a href="#">Resume helper</a>
                </li>
                <li>
                  <a href="#">Resume proofreader</a>
                </li>
                <li>
                  <a href="#">Rate my resume</a>
                </li>
                <li>
                  <a href="#">Resume grammar checker</a>
                </li>
                <li>
                  <a href="#">Resume optimizer</a>
                </li>
                <li>
                  <a href="#">Google Docs resume</a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div>
              <h3 className="font-semibold text-white mb-4">Get to know us</h3>
              <ul className="space-y-2 text-white text-1xl">
                <li>
                  <a href="#">Help center</a>
                </li>
                <li>
                  <a href="#">Get in touch</a>
                </li>
                <li>
                  <a href="#">For businesses</a>
                </li>
                <li>
                  <a href="#">For resume writers</a>
                </li>
                <li>
                  <a href="#">Affiliates</a>
                </li>
                <li>
                  <a href="#">Coached, our newsletter</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      <footer className="bg-[purple] text-white py-8  md:px-12">
        <div className="max-w-7xl mx-auto text-2xl text-center">© 2025 EliteCv. All rights reserved.</div>
      </footer>
    </>
  );
}
