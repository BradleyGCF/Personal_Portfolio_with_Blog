"use client"; // Esto asegura que el componente es renderizado en el cliente

import { useState } from "react";
import Logo from "../atoms/Logo";
import NavbarLinks from "../molecules/NavbarLinks";
import NavbarButton from "../molecules/NavbarButton";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 flex justify-between items-center px-40 h-20 bg-white shadow-md z-50">
      {/* Logo */}
      <div className="flex items-center h-10 w-[55px]">
        <Logo />
      </div>
      {/* Links and Button */}
      <div className="hidden md:flex flex-1 justify-center items-center">
        <NavbarLinks />
      </div>
      <div className="hidden md:flex items-center ml-auto">
        <NavbarButton label="Resume" />
      </div>

      {/* Hamburger Menu */}
      <div className="flex md:hidden items-center ml-auto">
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black"
          title="Toggle Menu"
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-white shadow-md flex flex-col items-center md:hidden">
          {/* Logo and Hamburger Menu */}
          <div className="flex justify-between items-center w-full p-6">
            <div className="flex items-center h-10 w-[55px]">
              <Logo />
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black"
              title="Toggle Menu"
            >
              <FaBars size={24} />
            </button>
          </div>
          {/* Links and Button */}
          <div className="mt-20">
            <NavbarLinks />
          </div>
          <div className="mt-4">
            <NavbarButton label="Resume" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
