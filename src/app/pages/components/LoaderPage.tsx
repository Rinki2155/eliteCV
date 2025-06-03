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
"use client";

import Lottie from "lottie-react";
import animationData from "../../../../public/loader.json";

export default function LoaderPage() {
  return (
    <div className="min-h-screen bg-[#5aa35d] flex items-center justify-center">
      <div className="w-[250px] h-[250px]">
        <Lottie animationData={animationData} loop autoplay />
      </div>
    </div>
  );
}
