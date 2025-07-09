import LandingPages from "./LandingPages/page";
import FirstLoginPage from "./FirstLoginPage/page";
import CareerLevelPage from "./pages/components/CareerLevelPage";

export default function Home() {
  return (
    <div className="min-h-screen text-white bg-[#F4EEFF]">
      <LandingPages />
      <FirstLoginPage />
      <CareerLevelPage />
      {/* Uncomment as needed */}
      {/* <HomePage /> */}
      {/* <Loader /> */}
      {/* <Test /> */}
    </div>
  );
}
