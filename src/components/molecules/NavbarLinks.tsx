import React from "react";
import Link from "../atoms/Link";

const NavbarLinks = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center color-black space-y-4 md:space-y-0 md:space-x-4">
      <Link
        href="#about Me"
        label="About Me"
        className="text-black text-[20px] font-semibold"
      />
      <Link
        href="#skills"
        label="Skills"
        className="text-black text-[20px] font-semibold"
      />
      <Link
        href="project"
        label="Project"
        className="text-black text-[20px] font-semibold"
      />
      <Link
        href="#contact me"
        label="Contact Me"
        className="text-black text-[20px] font-semibold"
      />
    </div>
  );
};

export default NavbarLinks;
