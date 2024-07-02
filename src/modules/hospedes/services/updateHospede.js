import { axiosInstance } from "@/lib/axios/api";
import Cookies from "js-cookie";

export const updateHospede = async (hospedeId, data) => {
  return axiosInstance.put(`/hospedes/update/${hospedeId}`, data, {
    headers: {
      Authorization: Cookies.get("token"),
    },
  });
};
