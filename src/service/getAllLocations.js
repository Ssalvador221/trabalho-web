import axios from "axios";

export const getAllQuartos = async () => {
  return axios.get("http://localhost:8090/quartos", {
    headers: {
      "Content-Type": "*",
    },
  });
};

export const getAllReservas = async () => {
  return axios.get("http://localhost:8090/reservas", {
    headers: {
      "Content-Type": "*",
    },
  });
};
