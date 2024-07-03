import React from "react";

function Card({ title, description, image, disponivel, valor, tipo_reserva }) {
  const status = {
    livre: "livre",
    reservado: "Reservado",
  };

  return (
    <div className="bg-white w-[300px] shadow-md rounded-lg overflow-hidden mb-4">
      {image && <img src={image} className="w-full h-48 object-cover" />}
      <div className="p-4">
        <h2 className="text-lg font-semibold">Tipo Quarto: {title}</h2>
      </div>
      <div className="descricao">
        <p className="text-gray-700 mt-2 pl-4 w-full pb-2">
          Descrição:
          <br />
          {description}
        </p>
      </div>
      <div className="preco">
        <p className="pl-4 font-semibold">
          R$: {valor ? valor : 0} - {tipo_reserva}
        </p>
      </div>
      <div className="footer flex flex-row-reverse p-4">
        <button
          className={`border-2 rounded-[4px] p-2 w-48 ${
            disponivel === status.livre
              ? "border-orange-500 hover:bg-orange-500 hover:text-white transition-all"
              : "border-red-500 bg-red-500 text-white"
          }`}
        >
          {disponivel === status.livre ? "Reservar" : status.reservado}
        </button>
      </div>
    </div>
  );
}

export default Card;
