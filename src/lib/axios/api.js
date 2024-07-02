import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ROUTER,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
