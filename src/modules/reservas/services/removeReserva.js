import { axiosInstance } from "@/lib/axios/api";
import Cookies from "js-cookie";

export const removeReserva = async (reservaId) => {
  return axiosInstance.put(
    `/reservas/remove/${reservaId}`,
    {},
    {
      headers: {
        Authorization: Cookies.get("token"),
      },
    }
  );
};
