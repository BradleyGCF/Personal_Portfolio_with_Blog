"use client";

import SocialIcons from "../atoms/SocialIcons";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center py-10 px-20 bg-white ">
      {/* Text Section */}
      <div className="text-center ml-40 md:text-left md:w-1/2">
        <h1 className="text-5xl text-black mb-4">
          Hello I’m{" "}
          <span className="text-5xl font-black text-black">Bradley Caruci</span>
        </h1>
        <h2 className="text-5xl font-extrabold text-black mb-6">
          Frontend <span className="typing-effect">Developer</span>
        </h2>
        <h2 className="text-5xl text-black mb-6">
          Based in{" "}
          <span className="text-5xl font-black text-black">Madrid</span>
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          I&apos;m Bradley Caruci Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the
          industry&apos;s standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a
          specimen book.
        </p>

        {/* Social Icons */}
        <SocialIcons />
      </div>
      <div className="z-auto">
        {/* Image Section */}
        <Image
          src="/Banner.svg" // Cambia esta ruta por la correcta
          alt="Illustration of a person"
          width={600}
          height={600}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default HeroSection;
