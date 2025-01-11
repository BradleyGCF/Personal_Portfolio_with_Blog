import React from "react";
import Link from "../atoms/Link";

const NavbarLinks = () => {
  return (
    <div className="flex justify-center items-center color-black space-x-4">
      <Link
        href="#personal"
        label="Personal"
        className="text-black hover:text-blue-500"
      />
      <Link
        href="#about"
        label="About Me"
        className="text-black hover:text-blue-500"
      />
      <Link
        href="#skills"
        label="Skills"
        className="text-black hover:text-blue-500"
      />
      <Link
        href="#project"
        label="Projects"
        className="text-black hover:text-blue-500"
      />
    </div>
  );
};

export default NavbarLinks;
