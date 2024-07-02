"use client";
import React from "react";
import Menu from "@/components/Menu";
import Feed from "./Feed";

function HomeWrap() {
  return (
    <>
      <div className="fixed">
        <Menu />
      </div>
      <div className="h-screen ml-24">
        <Feed />
      </div>
    </>
  );
}

export default HomeWrap;
