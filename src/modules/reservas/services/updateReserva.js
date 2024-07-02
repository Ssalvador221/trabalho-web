import { axiosInstance } from "@/lib/axios/api";
import Cookies from "js-cookie";

export const updateReserva = (reservaId, data) => {
  return axiosInstance.put(`/reservas/${reservaId}`, data, {
    headers: {
      Authorization: Cookies.get("token"),
    },
  });
};
