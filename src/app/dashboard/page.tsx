// "use client";
// import { useEffect, useState } from 'react';
// // import { useRouter } from 'next/router';
// import { useRouter } from 'next/navigation';
// import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import app  from '../../firebase' // Make sure Firebase is configured
// import Link from 'next/link';

// export default function Dashboard() {
//   const [userName, setUserName] = useState('');
//   const router = useRouter();

//   useEffect(() => {
//     const auth = getAuth(app);
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUserName(user.displayName || 'User');
//       } else {
//         // router.push('/login');
//       }
//     });
//   }, []);

//   return (
//     <div className="flex h-screen overflow-y-scroll">
//       {/* Left Sidebar */}
//       <div className="w-1/3 bg-gradient-to-b from-[#1a033d] to-[#240c6a] p-8 text-white">
//         <h1 className="text-3xl font-bold">Good morning, {userName}.</h1>
//         <p className="text-sm mt-2 mb-6">Welcome back to your career toolkit.</p>

//         <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
//         <div className="grid grid-cols-1 gap-4 mb-6">
//           <Link href="/score-my-resume">
//             <span className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 rounded-xl shadow hover:opacity-90">
//               <h3 className="font-bold">Score My Resume</h3>
//               <p className="text-sm">Get expert feedback on your resume, instantly</p>
//             </span>
//           </Link>
//           <Link href="/targeted-resume">
//             <span className="bg-gradient-to-r from-blue-500 to-teal-600 p-4 rounded-xl shadow hover:opacity-90">
//               <h3 className="font-bold">Targeted Resume</h3>
//               <p className="text-sm">Tailor your resume to a job description</p>
//             </span>
//           </Link>
//           <Link href="/linkedin-review">
//             <span className="bg-gradient-to-r from-indigo-500 to-purple-700 p-4 rounded-xl shadow hover:opacity-90">
//               <h3 className="font-bold">LinkedIn Review</h3>
//               <p className="text-sm">Optimize your LinkedIn profile in seconds</p>
//             </span>
//           </Link>
//         </div>

//         <h2 className="text-lg font-semibold mb-4">Dashboard</h2>
//         <nav className="flex flex-col gap-3">
//           <Link href="/progress" className="bg-purple-700 p-3 rounded text-center">Progress</Link>
//           <Link href="/pro" className="text-green-400">Get Pro</Link>
//           <Link href="/resumes">Resumes</Link>
//           <Link href="/career-tools">Career Tools</Link>
//           <Link href="/linkedin">LinkedIn</Link>
//           <Link href="/help">Help Center</Link>
//           <Link href="/feedback">Feedback</Link>
//           <Link href="/account">My Account</Link>
//         </nav>
//       </div>

//       {/* Right Panel */}
//       <div className="w-2/3 bg-[#f1effa] p-8">
//         <div className="bg-yellow-100 border border-yellow-400 p-6 rounded-md mb-6">
//           <h2 className="font-bold text-yellow-800 mb-2">OFFER: GET 75% OFF RESUME WORDED PRO</h2>
//           <p className="text-sm text-gray-700 mb-4">
//             Unlock AI-powered resume writing, unlimited reviews, ATS optimization, industry-specific templates, and expert tools.
//           </p>
//           <button className="bg-orange-500 text-white px-4 py-2 rounded-md">UPGRADE TO PRO</button>
//           <p className="text-xs text-gray-500 mt-2">* Limited Time Bonus: LinkedIn optimization suite (worth $49) free</p>
//         </div>

//         <h3 className="text-2xl font-semibold mb-4">Track your progress</h3>
//         <div className="space-y-4">
//           <div className="bg-white p-6 rounded-md shadow">
//             <h4 className="font-bold text-purple-700 mb-2">OVERALL RESUME SCORE</h4>
//             <p className="text-sm">Your resume scored 44 out of 100. Aim for a score of 85+.</p>
//             <button className="mt-2 bg-purple-700 text-white px-4 py-2 rounded-md">UPLOAD RESUME</button>
//           </div>
//           <div className="bg-white border border-blue-300 p-6 rounded-md shadow">
//             <h4 className="font-bold text-blue-700 mb-2">TARGETED RESUME SCORE</h4>
//             <p className="text-sm">You have not tried this tool yet.</p>
//             <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">TARGET YOUR RESUME</button>
//           </div>
//           <div className="bg-white p-6 rounded-md shadow">
//             <h4 className="font-bold text-purple-700 mb-2">LINKEDIN PROFILE SCORE</h4>
//             <p className="text-sm">You have not optimized your LinkedIn profile yet.</p>
//             <button className="mt-2 bg-gray-700 text-white px-4 py-2 rounded-md">UPLOAD LINKEDIN PROFILE</button>
//           </div>
//         </div>

//         <h3 className="text-2xl font-semibold mt-8 mb-4">Additional resources</h3>
//         <div className="space-y-4">
//           <div className="bg-white p-6 rounded-md shadow">
//             <h4 className="font-bold text-purple-700 mb-1">COVER LETTER GENERATOR <span className="text-sm text-pink-500">NEW!</span></h4>
//             <p className="text-sm mb-2">Let our AI write a great cover letter for you, in seconds.</p>
//             <button className="bg-gray-800 text-white px-4 py-2 rounded-md">GENERATE A COVER LETTER</button>
//           </div>
//           <div className="bg-white p-6 rounded-md shadow">
//             <h4 className="font-bold text-purple-700 mb-1">DON'T HAVE A RESUME?</h4>
//             <p className="text-sm">Use our sample templates and bullet points to create one now.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';
// pages/dashboard.tsx
import { useSession, getSession } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";


export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className="min-h-screen flex text-white">
      {/* Left Sidebar */}
      <div className="w-1/3 bg-[#1c0e4b] p-6">
        <h2 className="text-xl mb-8 font-semibold">Good morning, {session?.user?.name}.</h2>
        <h3 className="text-sm mb-2 uppercase tracking-wide">Quick Links</h3>
        <div className="space-y-4 mb-8">
          <Card title="Score My Resume" desc="Get expert feedback on your resume, instantly" color="from-pink-500 to-purple-500" />
          <Card title="Targeted Resume" desc="Tailor your resume to a job description" color="from-cyan-500 to-blue-600" />
          <Card title="LinkedIn Review" desc="Optimize your LinkedIn profile in seconds" color="from-purple-700 to-indigo-700" />
        </div>
        <div className="space-y-4 text-sm">
          <SidebarLink label="Progress" />
          <SidebarLink label="Resumes" />
          <SidebarLink label="LinkedIn" />
          <SidebarLink label="Career Tools" />
          <SidebarLink label="Help Center" />
          <SidebarLink label="My Account" />
        </div>
      </div>

      {/* Right Main Panel */}
      <div className="w-2/3 bg-[#f0f4ff] p-8 text-black overflow-y-auto">
        <Offer />
        <Progress score={44} />
        <Targeted />
        <LinkedIn />
        <AdditionalResources />
      </div>
    </div>
  );
}

// Reusable components
function Card({ title, desc, color }: { title: string; desc: string; color: string }) {
  return (
    <div className={`p-4 rounded-lg bg-gradient-to-br ${color}`}>
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm">{desc}</p>
    </div>
  );
}

function SidebarLink({ label }: { label: string }) {
  return <div className="hover:text-purple-300 cursor-pointer">{label}</div>;
}

function Offer() {
  return (
    <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 p-4 rounded mb-6">
      <strong>OFFER: GET 75% OFF RESUME WORDED PRO</strong><br />
      Unlock AI-powered resume writing, unlimited reviews, ATS optimization...
      <button className="bg-orange-400 mt-2 px-4 py-2 rounded text-white">UPGRADE TO PRO</button>
    </div>
  );
}

function Progress({ score }: { score: number }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h3 className="font-semibold mb-2">OVERALL RESUME SCORE</h3>
      <p>Your resume scored {score} out of 100. Aim for a score of 85+.</p>
      <div className="flex justify-between items-center mt-2">
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Upload Resume</button>
        <span className="text-3xl font-bold">{score}/100</span>
      </div>
    </div>
  );
}

function Targeted() {
  return (
    <div className="bg-white p-4 rounded shadow mb-6 border border-blue-200">
      <h3 className="font-semibold mb-2">TARGETED RESUME SCORE</h3>
      <p className="text-sm">You have not tried this tool yet. Match it to a job posting to fix.</p>
      <button className="bg-gray-200 mt-2 px-4 py-2 rounded">Target Your Resume</button>
    </div>
  );
}

function LinkedIn() {
  return (
    <div className="bg-white p-4 rounded shadow mb-6">
      <h3 className="font-semibold mb-2">LINKEDIN PROFILE SCORE</h3>
      <p className="text-sm">You have not optimized your LinkedIn profile yet.</p>
      <button className="bg-gray-200 mt-2 px-4 py-2 rounded">Upload LinkedIn Profile</button>
    </div>
  );
}

function AdditionalResources() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-semibold mb-4">ADDITIONAL RESOURCES</h3>
      <div className="mb-4">
        <h4 className="text-purple-700 font-bold">COVER LETTER GENERATOR</h4>
        <button className="bg-gray-200 mt-1 px-4 py-2 rounded">Generate a Cover Letter</button>
      </div>
      <div>
        <h4 className="text-purple-700 font-bold">DON’T HAVE A RESUME?</h4>
        <p className="text-sm">Create a new resume with our templates and bullet points.</p>
      </div>
    </div>
  );
}
