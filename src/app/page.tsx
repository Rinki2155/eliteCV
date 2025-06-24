import Image from "next/image";
import Header from "./pages/components/Header";
import Loader from "./pages/Test";
import HomePage from "./HomePage/page";
import LandingPages from "./LandingPages/page";
import FirstLoginPage from "./FirstLoginPage/page";
// import Test from "./pages/Test";

export default function Home() {
  return (
    <>
      {/* <div className="bg-gradient-to-b from-[#1B005E] to-[#3A0079] min-h-screen text-white"> */}
        {/* <Header /> */}
        <div
          className="min-h-screen text-white bg-[#F4EEFF]"
        >
          <LandingPages />
          <FirstLoginPage />
          {/* <HomePage/> */}
          {/*<Loader/> */}
          {/* <Test />{" "} */}
        </div>
      {/* </div> */}
    </>
  );
}
