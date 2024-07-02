import { axiosInstance } from "@/lib/axios/api";
import Cookies from "js-cookie";

export const getAllReservas = async () => {
  return axiosInstance.get("/reservas", {
    headers: {
      Authorization: Cookies.get("token"),
    },
  });
};
