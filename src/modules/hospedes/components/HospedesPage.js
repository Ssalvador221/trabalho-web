import React from "react";
import TableComponent from "./Table/TableComponent";

function HospedesPage() {
  return (
    <>
      <div className="pt-16 px-16">
        <h1 className="text-3xl font-bold mb-4">Lista de Hospedes</h1>
        <TableComponent />
      </div>
    </>
  );
}

export default HospedesPage;
