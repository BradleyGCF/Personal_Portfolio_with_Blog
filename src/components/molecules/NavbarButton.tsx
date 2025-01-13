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
      className="bg-black rounded-md text-white flex items-center px-8 py-3"
    />
  );
};

export default NavbarButton;
