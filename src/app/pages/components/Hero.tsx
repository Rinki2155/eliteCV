"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 max-w-[1290px] mx-auto">
      <div className="md:w-1/2 text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight font-sans">
          Improve your resume and <br className="hidden md:block" /> LinkedIn
          profile
        </h1>
        <p className="text-lg mb-6 text-[#333333] leading-relaxed">
          Designed by top recruiters, our AI-powered platform instantly gives
          you tailored feedback on your resume and LinkedIn profile.
        </p>
        <p className="text-md mb-8 text-[#2e6e30] leading-relaxed">
          Land 5x more interviews, opportunities and job offers.
        </p>
        <div className="flex space-x-4">
          <button
            className="text-black font-semibold py-2 px-4 rounded"
            style={{ backgroundColor: " #ffffff ", width:"300px", padding:"20px" }}
          >
            Get started for free
          </button>
          <button className="bg-purple-800 hover:bg-purple-900 text-white font-semibold py-2 px-4 rounded" style={{ backgroundColor: "#3e8e41", width:"150px", padding:"20px" }}>
            See preview
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-end mr-[-12%]">
        <div className="relative w-[800px] h-[700px]">
          <Image
            src="/images/8.jpg"
            alt="Dashboard preview"
            fill
            className="rounded-lg shadow-lg"
            style={{
              boxShadow: "24px 16px 72px rgba(0, 0, 0, 0.68)",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </section>
  );
}
