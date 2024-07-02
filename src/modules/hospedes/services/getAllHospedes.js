import { axiosInstance } from "@/lib/axios/api";
import Cookies from "js-cookie";

export const getAllHospedes = async () => {
  return axiosInstance.get("/hospedes", {
    headers: {
      Authorization: Cookies.get("token"),
    },
  });
};
