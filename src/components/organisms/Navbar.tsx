"use client"; // Esto asegura que el componente es renderizado en el cliente

import Logo from "../atoms/Logo"; // Aquí va tu logo
import NavbarLinks from "../molecules/NavbarLinks";
import NavbarButton from "../molecules/NavbarButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-20 p-4 bg-white shadow-md">
      {/* Logo a la izquierda */}
      <div className="flex items-center h-10  w-10 ">
        {" "}
        {/* Ajusta el tamaño de tu logo aquí */}
        <Logo /> {/* Aquí se coloca tu logo o icono */}
      </div>

      {/* Enlaces de navegación centrados */}
      <div className="flex-grow items-center justify-center space-x-8">
        <NavbarLinks />
      </div>

      {/* Botón "Resume" a la derecha */}
      <div className="flex items-center">
        <NavbarButton label="Resume" />
      </div>
    </nav>
  );
};

export default Navbar;
