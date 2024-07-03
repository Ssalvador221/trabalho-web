import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#ff9c06] p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-lg font-semibold">Pousada Ypuã</span>
        </div>

        <div className="space-x-4 text-white">
          <Link to={"/"}>Home</Link>
          <Link>Contato</Link>
          <Link to={"/sobre"}>Sobre</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
