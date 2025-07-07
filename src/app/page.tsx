import Image from "next/image";
import Header from "./pages/components/Header";
import HomePage from "./HomePage/page";
import LandingPages from "./LandingPages/page";
import FirstLoginPage from "./FirstLoginPage/page";
import CareerLevelPage from "./pages/components/CareerLevelPage";
import MyAccountPage from "./pages/MyAccount";

export default function Home() {
  return (
    <>
      <div className="min-h-screen text-white bg-[#F4EEFF]">
        <LandingPages />
        {/* <MyAccountPage /> */}
        <FirstLoginPage />
        <CareerLevelPage />
        {/* <HomePage/> */}
        {/*<Loader/> */}
        {/* <Test />{" "} */}
      </div>
    </>
  );
}
