import React, { useEffect, useState } from "react";
import Card from "../Card";
import { getAllQuartos, getAllReservas } from "../../service/getAllLocations";

function Feed() {
  const [data, setData] = useState([]);
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    getAllQuartos().then((response) => {
      setData(response.data);
    });

    getAllReservas().then((response) => {
      setReservas(response.data);
    });
  }, []);

  const combinedData = data.map((item) => {
    const reserva =
      reservas.find((r) => r.numero_quarto === item.numero_quarto) || {};
    return {
      ...item,
      ...reserva,
    };
  });

  return (
    <div className="flex flex-row gap-8 flex-wrap p-4">
      {combinedData.map((item) => (
        <Card
          key={item.numero_quarto}
          image={"./foto_quarto.png"}
          title={item.tipo_quarto}
          description={item.descricao}
          disponivel={item.status_quarto}
          valor={item.valor_reserva} // Adicionado da reserva correspondente
          tipo_reserva={item.tipo_reserva} // Adicionado da reserva correspondente
        />
      ))}
    </div>
  );
}

export default Feed;
