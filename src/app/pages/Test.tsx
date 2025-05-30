// "use client";
// import Lottie from "lottie-react";
// import animationData from "../../../public/loader.json"; // make sure the file is in /public or adjust path

// export default function LoaderPage() {
//   return (
//     <div className="min-h-screen bg-[#5aa35d] flex items-center justify-center">
//       <div className="w-[250px] h-[250px]">
//         <Lottie animationData={animationData} loop autoplay />
//       </div>
//     </div>
//   );
// }
"use client";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../../public/loader.json";

export default function LoaderPage() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
      // Optional: Redirect here using router.push('/next-page')
    }, 9000); // 9 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!showLoader) return null; // Nothing rendered after 9s

  return (
    <div className="min-h-screen bg-[#5aa35d] flex items-center justify-center">
      <div className="w-[250px] h-[250px]">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
}
