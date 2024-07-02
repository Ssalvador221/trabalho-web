import React from "react";
import TableComponent from "./Table/TableComponent";

function ReservasComponent() {
  return (
    <>
      <div className="pt-16 px-16">
        <h1 className="text-3xl font-bold mb-4">Reservas</h1>
        <TableComponent />
      </div>
    </>
  );
}

export default ReservasComponent;
