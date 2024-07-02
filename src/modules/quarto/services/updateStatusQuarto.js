import { axiosInstance } from "@/lib/axios/api";
import Cookies from "js-cookie";

export default function updateStatusQuarto(quartoId, body) {
  return axiosInstance.put(`/quartos/${quartoId}`, body, {
    headers: {
      Authorization: Cookies.get("token"),
    },
  });
}
