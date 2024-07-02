import { axiosInstance } from "@/lib/axios/api";
import Cookies from "js-cookie";
export const deleteHospede = async (hospodeId) => {
  return axiosInstance.put(
    `/hospedes/delete/${hospodeId}`,
    {},
    {
      headers: {
        Authorization: Cookies.get("token"),
      },
    }
  );
};
