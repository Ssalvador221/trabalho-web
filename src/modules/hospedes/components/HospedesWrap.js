"use client";
import React from "react";
import HospedesPage from "./HospedesPage";
import Menu from "@/components/Menu";

function HospedesWrap() {
  return (
    <>
      <div className="fixed">
        <Menu />
      </div>
      <div className="h-screen ml-24">
        <HospedesPage />
      </div>
    </>
  );
}

export default HospedesWrap;
