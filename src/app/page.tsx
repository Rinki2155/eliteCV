import Image from "next/image";
import Header from "./pages/components/Header";
import Dashboard from "./dashboard/page";
import LandingPages from "./pages/components/LandingPages";
import Loader from "./pages/Test";
// import Test from "./pages/Test";

export default function Home() {
  return (
    <>
      <main className="bg-gradient-to-b from-[#1B005E] to-[#3A0079] min-h-screen text-white">
        <Header />
        <div
          className=""
          style={{
            backgroundImage:
              "radial-gradient(at 50% 100%, #c9ded3,rgb(72, 152, 111)",
          }}
        >
          <LandingPages />
          <Dashboard />
          <Loader/>
          {/* <Test />{" "} */}
        </div>
      </main>
    </>
  );
}
