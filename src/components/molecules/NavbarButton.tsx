"use client";

import React from "react";
import Button from "../atoms/Button";
import { AiOutlineDownload } from "react-icons/ai"; // Usando un ícono de descarga de react-icons

const NavbarButton = ({ label }: { label: string }) => {
  const handleClick = () => {
    alert("Downloading resume...");
  };

  return (
    <Button
      label={
        <>
          {label} <AiOutlineDownload className="ml-2" />
        </>
      }
      onClick={handleClick}
      className="bg-black text-white flex items-center px-4 py-2 rounded-lg"
    />
  );
};

export default NavbarButton;