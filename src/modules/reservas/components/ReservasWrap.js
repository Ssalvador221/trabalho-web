"use client";
import React from "react";
import Menu from "@/components/Menu";
import ReservasComponent from "./ReservasComponent";

function ReservasWrap() {
  return (
    <>
      <div className="fixed">
        <Menu />
      </div>
      <div className="h-screen ml-24">
        <ReservasComponent />
      </div>
    </>
  );
}

export default ReservasWrap;
