import { axiosInstance } from "@/lib/axios/api";
import Cookies from "js-cookie";

export const getHospedeById = async (hospedeId) => {
  return axiosInstance.get(`/hospedes/${hospedeId}`, {
    headers: {
      Authorization: Cookies.get("token"),
    },
  });
};
