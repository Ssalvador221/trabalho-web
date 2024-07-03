import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="bg-[#ff9c06] p-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center">
          <span class="text-white text-lg font-semibold">Pousada Ypuã</span>
        </div>

        <div class="space-x-4 text-white">
          <Link to={"/"}>Home</Link>
          <Link>Contato</Link>
          <Link>Sobre</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
