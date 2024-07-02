import { axiosInstance } from "@/lib/axios/api";
import Cookies from "js-cookie";

export function updateUserName(userId, body) {
  return axiosInstance.put(`/users/fullName/${userId}`, body, {
    headers: {
      Authorization: Cookies.get("token"),
    },
  });
}

export function updateUserEmail(userId, body) {
  return axiosInstance.put(`/users/email/${userId}`, body, {
    headers: {
      Authorization: Cookies.get("token"),
    },
  });
}

export function updateUserPhone(userId, body) {
  return axiosInstance.put(`/users/phone/${userId}`, body, {
    headers: {
      Authorization: Cookies.get("token"),
    },
  });
}