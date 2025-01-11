import React from "react";
import Navbar from "../components/organisms/Navbar";

const Page = () => {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl">Welcome to my website!</h1>
      </main>
    </div>
  );
};

export default Page;
