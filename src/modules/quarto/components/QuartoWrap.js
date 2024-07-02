"use client";
import React from "react";
import QuartosPage from "@/modules/quarto/components/QuartosPage";
import Menu from "@/components/Menu";

function QuartoWrap() {
  return (
    <>
      <div className="fixed">
        <Menu />
      </div>
      <div className="h-screen ml-24">
        <QuartosPage />
      </div>
    </>
  );
}
export default QuartoWrap;
