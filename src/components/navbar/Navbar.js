import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#ff9c06] p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div >
          <a className="flex items-center" href={"/"}>
          <img className="mr-5" src={"../logo-pousada-quinta-do-ypua.webp"} alt="logo" />
          <span className="text-white text-lg font-semibold">Pousada Ypuã</span>
          </a>
        </div>

        <div className="space-x-4 text-white">
          <Link to={"/"}>Home</Link>
          <Link to={"/contato"}>Contato</Link>
          <Link to={"/sobre"}>Sobre</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
