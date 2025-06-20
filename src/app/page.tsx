import Image from "next/image";
import Header from "./pages/components/Header";
import LandingPages from "./pages/components/LandingPages";
import Loader from "./pages/Test";
import HomePage from "./HomePage/page";
// import Test from "./pages/Test";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#1B005E] to-[#3A0079] min-h-screen text-white">
        <Header />
        <div
          className=""
          style={{
            backgroundImage:
              "radial-gradient(at 50% 100%,rgb(156, 103, 213),rgb(220, 151, 165)",
          }}
        >
          <LandingPages />
           {/* <HomePage/> */}
          {/*<Loader/> */}
          {/* <Test />{" "} */}
        </div>
      </div>
    </>
  );
}
