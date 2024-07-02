import { axiosInstance } from "@/lib/axios/api";
import Cookies from "js-cookie";

export const addNewHospede = async (data) => {
  return axiosInstance.post("/hospedes", data, {
    headers: {
      Authorization: Cookies.get("token"),
    },
  });
};
