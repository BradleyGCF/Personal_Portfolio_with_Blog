import React from "react";
import Navbar from "../components/organisms/Navbar";
import HeroSection from "../components/organisms/HeroSection";
const Page = () => {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <HeroSection />
      </main>
    </div>
  );
};

export default Page;
