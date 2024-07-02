import { axiosInstance } from "@/lib/axios/api";
import Cookies from "js-cookie";

export const getAllQuartos = async () => {
  return await axiosInstance.get("/quartos", {
    headers: {
      Authorization: Cookies.get("token"),
    },
  });
};
