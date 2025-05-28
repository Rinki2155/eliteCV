import Image from "next/image";
import Hero from "./pages/components/Hero";
import Header from "./pages/components/Header";
import Dashboard from "./dashboard/page";

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
          <Hero />
          <Dashboard />
        </div>
      </main>
    </>
  );
}
