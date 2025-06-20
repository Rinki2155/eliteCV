// "use client";

// import Lottie from "lottie-react";
// import animationData from "../../../../public/loader.json";

// export default function LoaderPage() {
//   return (
//     <div className="min-h-screen bg-[#5aa35d] flex items-center justify-center">
//       <div className="w-[250px] h-[250px]">
//         <Lottie animationData={animationData} loop autoplay />
//       </div>
//     </div>
//   );
// }
// "use client";

import Lottie from "lottie-react";
import animationData from "../../../../public/loader.json"; // Make sure path is correct

export default function LoaderPage() {
  return (
    <div className="min-h-screen bg-[#5aa35d] flex items-center justify-center">
      <div className="w-[250px] h-[250px]">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
}


// 'use client'
// import React, { useEffect, useState } from 'react'
// import Lottie from 'lottie-react'
// import loaderAnimation from '../../../../public/loader.json' // Adjust path if needed

// const LoaderPage = () => {
//   const [isLoading, setIsLoading] = useState(true)
//   const [data, setData] = useState(null)

//   useEffect(() => {
//     // Simulate API call
//     fetch('https://ai-cv-builder-be.fly.dev/resume/upload')
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data)
//         setIsLoading(false)
//       })
//   }, [])

//   if (isLoading) {
//     return (
//       <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <Lottie animationData={loaderAnimation} loop={true} style={{ height: 200, width: 200 }} />
//       </div>
//     )
//   }

//   return (
//     <div>
//       <h1>API Loaded ✅</h1>
//       <pre>{JSON.stringify(data, null, 2)}</pre>
//     </div>
//   )
// }

// export default LoaderPage

