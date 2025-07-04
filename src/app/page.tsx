import Image from "next/image";
import Header from "./pages/components/Header";
import HomePage from "./HomePage/page";
import LandingPages from "./LandingPages/page";
import FirstLoginPage from "./FirstLoginPage/page";

export default function Home() {
  return (
    <>

        <div
          className="min-h-screen text-white bg-[#F4EEFF]"
        >
          <LandingPages />
          <FirstLoginPage />
          {/* <HomePage/> */}
          {/*<Loader/> */}
          {/* <Test />{" "} */}
        </div>

    </>
  );
}
